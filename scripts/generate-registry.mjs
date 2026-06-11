#!/usr/bin/env node

import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const REGISTRY_SCHEMA = "https://shadcn-vue.com/schema/registry.json"
const REGISTRY_ITEM_SCHEMA = "https://shadcn-vue.com/schema/registry-item.json"

const DEFAULT_OPTIONS = {
  source: "components",
  output: "registry",
  namespace: "@stacktrace",
  name: "stacktrace-ui",
  homepage: "https://github.com/stacktracelabs/ui",
  includeUtils: true,
}

const SKIPPED_DEPENDENCIES = new Set([
  "@stacktrace/ui",
  "vue",
])

const TEXT_FILE_EXTENSIONS = new Set([
  ".css",
  ".js",
  ".json",
  ".mjs",
  ".ts",
  ".tsx",
  ".vue",
])

const UTILS_ITEM_NAME = "utils"

const UTILS_CONTENT = `import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})

async function main() {
  const options = parseArgs(process.argv.slice(2))

  if (options.help) {
    printHelp()
    return
  }

  const sourceDir = path.resolve(process.cwd(), options.source)
  const outputDir = path.resolve(process.cwd(), options.output)
  const sourceBase = toPosix(path.basename(sourceDir))

  const componentFolders = await getComponentFolders(sourceDir)
  const componentNames = new Map(
    componentFolders.map(folder => [folder, toKebabCase(folder)]),
  )

  const componentItems = []
  const warnings = []

  for (const folder of componentFolders) {
    componentItems.push(
      await buildComponentItem({
        folder,
        sourceDir,
        sourceBase,
        namespace: options.namespace,
        componentNames,
        warnings,
        includeUtils: options.includeUtils,
      }),
    )
  }

  const needsUtils = componentItems.some(item =>
    item.registryDependencies?.includes(namespaced(UTILS_ITEM_NAME, options.namespace)),
  )

  const items = [
    ...(options.includeUtils && needsUtils ? [buildUtilsItem()] : []),
    ...componentItems,
    buildAllItem({
      namespace: options.namespace,
      componentItems,
      includeUtils: options.includeUtils && needsUtils,
    }),
  ]

  await fs.rm(outputDir, { recursive: true, force: true })
  await fs.mkdir(outputDir, { recursive: true })

  const registry = {
    "$schema": REGISTRY_SCHEMA,
    name: options.name,
    homepage: options.homepage,
    items,
  }

  await writeJson(path.join(outputDir, "registry.json"), registry)

  for (const item of items) {
    await writeJson(path.join(outputDir, `${item.name}.json`), item)
  }

  printSummary({ options, outputDir, componentItems, items, warnings })
}

function parseArgs(args) {
  const options = { ...DEFAULT_OPTIONS }

  for (let index = 0; index < args.length; index++) {
    const arg = args[index]

    if (arg === "--help" || arg === "-h") {
      options.help = true
      continue
    }

    if (arg === "--no-utils") {
      options.includeUtils = false
      continue
    }

    const [key, inlineValue] = arg.split("=", 2)
    const readValue = () => {
      if (inlineValue !== undefined) {
        return inlineValue
      }

      const value = args[++index]
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}`)
      }

      return value
    }

    switch (key) {
      case "--source":
        options.source = readValue()
        break
      case "--output":
        options.output = readValue()
        break
      case "--namespace":
        options.namespace = readValue()
        break
      case "--name":
        options.name = readValue()
        break
      case "--homepage":
        options.homepage = readValue()
        break
      default:
        throw new Error(`Unknown option: ${arg}`)
    }
  }

  options.namespace = options.namespace.replace(/\/$/, "")

  return options
}

function printHelp() {
  console.log(`Generate a shadcn-vue registry from the StackTrace UI component package.

Usage:
  node scripts/generate-registry.mjs [options]

Options:
  --source <path>       Component source directory. Default: components
  --output <path>       Registry output directory. Default: registry
  --namespace <name>    Registry namespace used in dependencies. Default: @stacktrace
  --name <name>         Registry name. Default: stacktrace-ui
  --homepage <url>      Registry homepage URL.
  --no-utils            Do not generate the @/Utils registry item.
  --help, -h            Show this help.
`)
}

async function getComponentFolders(sourceDir) {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true })

  return entries
    .filter(entry => entry.isDirectory() && !entry.name.startsWith("."))
    .map(entry => entry.name)
    .sort((left, right) => left.localeCompare(right))
}

async function buildComponentItem({
  folder,
  sourceDir,
  sourceBase,
  namespace,
  componentNames,
  warnings,
  includeUtils,
}) {
  const folderPath = path.join(sourceDir, folder)
  const filePaths = await collectFiles(folderPath)
  const files = []
  const dependencies = new Set()
  const registryDependencies = new Set()

  for (const filePath of filePaths) {
    const content = await fs.readFile(filePath, "utf8")
    const relativePath = toPosix(path.relative(folderPath, filePath))

    files.push({
      path: toPosix(path.join(sourceBase, folder, relativePath)),
      content,
      type: "registry:ui",
    })

    for (const specifier of findImports(content, filePath)) {
      const componentDependency = findComponentDependency(specifier, folder, componentNames)

      if (componentDependency) {
        registryDependencies.add(namespaced(componentDependency, namespace))
        continue
      }

      if (isUtilsImport(specifier)) {
        if (includeUtils) {
          registryDependencies.add(namespaced(UTILS_ITEM_NAME, namespace))
        }

        continue
      }

      const packageName = findPackageDependency(specifier)
      if (packageName) {
        dependencies.add(packageName)
      }
    }
  }

  if (files.length === 0) {
    warnings.push(`${folder} has no registry files.`)
  }

  return compactObject({
    "$schema": REGISTRY_ITEM_SCHEMA,
    name: componentNames.get(folder),
    type: "registry:ui",
    title: toTitle(folder),
    description: `${toTitle(folder)} components for StackTrace UI.`,
    dependencies: sortValues(dependencies),
    registryDependencies: sortValues(registryDependencies),
    files,
  })
}

async function collectFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue
    }

    const filePath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await collectFiles(filePath))
      continue
    }

    if (!entry.isFile() || !shouldIncludeFile(entry.name)) {
      continue
    }

    files.push(filePath)
  }

  return files.sort((left, right) => left.localeCompare(right))
}

function shouldIncludeFile(fileName) {
  const extension = path.extname(fileName)

  return extension !== ".md" && TEXT_FILE_EXTENSIONS.has(extension)
}

function findImports(content, filePath) {
  const specifiers = new Set()
  const source = path.extname(filePath) === ".vue"
    ? extractVueScripts(content)
    : content
  const expressions = [
    /^\s*(?:import|export)\s+(?:type\s+)?(?!["'])[\s\S]*?\s+from\s*["']([^"']+)["']/gm,
    /^\s*import\s*["']([^"']+)["']/gm,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
  ]

  for (const expression of expressions) {
    for (const match of source.matchAll(expression)) {
      specifiers.add(match[1])
    }
  }

  return specifiers
}

function extractVueScripts(content) {
  const blocks = Array.from(content.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))

  return blocks.map(match => match[1]).join("\n")
}

function findComponentDependency(specifier, currentFolder, componentNames) {
  const match = specifier.match(/^@\/Components\/([^/]+)/)

  if (!match) {
    return null
  }

  const folder = match[1]
  if (folder === currentFolder || !componentNames.has(folder)) {
    return null
  }

  return componentNames.get(folder)
}

function isUtilsImport(specifier) {
  return specifier === "@/Utils" || specifier.startsWith("@/Utils/")
}

function findPackageDependency(specifier) {
  if (
    specifier.startsWith(".")
    || specifier.startsWith("/")
    || specifier.startsWith("@/")
    || specifier.startsWith("node:")
  ) {
    return null
  }

  const packageName = specifier.startsWith("@")
    ? specifier.split("/").slice(0, 2).join("/")
    : specifier.split("/")[0]

  if (
    SKIPPED_DEPENDENCIES.has(packageName)
    || Array.from(SKIPPED_DEPENDENCIES).some(dep => specifier.startsWith(`${dep}/`))
  ) {
    return null
  }

  return packageName
}

function buildUtilsItem() {
  return {
    "$schema": REGISTRY_ITEM_SCHEMA,
    name: UTILS_ITEM_NAME,
    type: "registry:file",
    title: "Utils",
    description: "Utility helpers used by StackTrace UI components.",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "resources/js/Utils/index.ts",
        content: UTILS_CONTENT,
        type: "registry:file",
        target: "resources/js/Utils/index.ts",
      },
    ],
  }
}

function buildAllItem({ namespace, componentItems, includeUtils }) {
  const registryDependencies = [
    ...(includeUtils ? [namespaced(UTILS_ITEM_NAME, namespace)] : []),
    ...componentItems.map(item => namespaced(item.name, namespace)),
  ]

  return {
    "$schema": REGISTRY_ITEM_SCHEMA,
    name: "all",
    type: "registry:item",
    title: "All Components",
    description: "All StackTrace UI components.",
    registryDependencies,
    files: [],
  }
}

function compactObject(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (Array.isArray(entry)) {
        return entry.length > 0
      }

      return entry !== undefined && entry !== null
    }),
  )
}

function namespaced(name, namespace) {
  return namespace ? `${namespace}/${name}` : name
}

function sortValues(values) {
  return Array.from(values).sort((left, right) => left.localeCompare(right))
}

function toKebabCase(value) {
  return value
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
}

function toTitle(value) {
  return value
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
}

function toPosix(value) {
  return value.split(path.sep).join("/")
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`)
}

function printSummary({ options, outputDir, componentItems, items, warnings }) {
  const fileCount = items.reduce((count, item) => count + (item.files?.length ?? 0), 0)

  console.log(`Generated ${items.length} registry items from ${componentItems.length} components.`)
  console.log(`Wrote ${fileCount} files into ${path.relative(process.cwd(), outputDir) || "."}.`)
  console.log(`Namespace: ${options.namespace || "(none)"}`)

  if (warnings.length > 0) {
    console.log("")
    console.log("Warnings:")
    for (const warning of warnings) {
      console.log(`- ${warning}`)
    }
  }
}
