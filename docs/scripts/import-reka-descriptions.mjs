import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const sourceRoot = process.argv[2]

if (!sourceRoot) {
  throw new Error('Pass the path to a cloned unovue/reka-ui repository.')
}

const componentDocs = resolve(sourceRoot, 'docs/content/docs/components')
const output = resolve('resources/js/Docs/Api/reka-descriptions.json')
const descriptions = {}

for (const filename of readdirSync(componentDocs).filter(file => file.endsWith('.md')).sort()) {
  const markdown = readFileSync(join(componentDocs, filename), 'utf8')
  const lines = markdown.split(/\r?\n/)
  let heading = ''
  let prose = []

  for (const line of lines) {
    const headingMatch = line.match(/^###\s+(.+)$/)

    if (headingMatch) {
      heading = headingMatch[1].trim()
      prose = []
      continue
    }

    const includeMatch = line.match(/@\/meta\/([A-Za-z0-9]+)\.md/)

    if (heading && includeMatch) {
      const description = cleanDescription(prose.join('\n'))

      if (description) {
        descriptions[includeMatch[1]] = description
      }

      continue
    }

    if (heading) {
      prose.push(line)
    }
  }
}

const commit = execFileSync('git', ['rev-parse', 'HEAD'], {
  cwd: sourceRoot,
  encoding: 'utf8',
}).trim()

const payload = {
  source: {
    repository: 'https://github.com/unovue/reka-ui',
    commit,
  },
  descriptions: Object.fromEntries(Object.entries(descriptions).sort(([a], [b]) => a.localeCompare(b))),
}

mkdirSync(resolve(output, '..'), { recursive: true })
writeFileSync(output, `${JSON.stringify(payload, null, 2)}\n`)

console.log(`Imported ${Object.keys(descriptions).length} Reka UI component descriptions from ${basename(sourceRoot)} at ${commit.slice(0, 8)}.`)

function cleanDescription(value) {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<!--.*?-->/gs, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}
