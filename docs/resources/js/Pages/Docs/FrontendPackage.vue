<template>
    <DocsLayout>
        <Head title="Frontend Package" />
        <DocsPage
            title="Frontend Package"
            description="Composable Vue and Inertia utilities shipped directly with the StackTrace UI Composer package."
        >
            <h2 id="overview">Overview</h2>
            <p>
                The Composer package includes its frontend source under
                <code>vendor/stacktrace/ui/resources/js</code>. Resolve
                <code>@stacktrace/ui</code> to that package instead of installing a separate
                npm package. Registry components use the same import for shared state,
                navigation, filtering, and frontend types.
            </p>

            <h2 id="vite-alias">Vite alias</h2>
            <p>Add an alias to the package root so Vite can read its package exports.</p>
            <CodeBlock :code="viteAlias" language="typescript" filename="vite.config.ts" />

            <h2 id="typescript-alias">TypeScript alias</h2>
            <p>Mirror the Vite resolution in the application's TypeScript configuration.</p>
            <CodeBlock :code="typescriptAlias" language="json" filename="tsconfig.json" />

            <h2 id="imports">Imports</h2>
            <p>
                Runtime helpers and type-only exports share one entry point. Use
                <code>import type</code> when an export is only needed during type checking.
            </p>
            <CodeBlock :code="imports" language="typescript" />

            <h2 id="public-api">Public API</h2>
            <ul>
                <li><strong>Composables</strong> provide filtering, flash events, navigation state, and boolean controllers.</li>
                <li><strong>Types</strong> describe filters, menu trees, selections, SVG sources, and promise-based Inertia visits.</li>
                <li><strong>Utilities</strong> support query strings, namespaced component registration, and asynchronous router calls.</li>
                <li><strong>Internal components</strong> power installed StackTrace components and usually do not need to be used directly.</li>
            </ul>

            <h2 id="ziggy-route">Ziggy route helper</h2>
            <p>
                Route-based navigation actions use Ziggy's global <code>route()</code>
                helper. Install <code>tightenco/ziggy</code>, render <code>@routes</code>
                before the Vite entry, and include the global route declaration described
                by the installation guide.
            </p>
            <p>
                Follow the <Link href="/docs/installation">installation guide</Link> before
                importing the frontend package or installing registry components that depend
                on it.
            </p>
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head, Link } from '@inertiajs/vue3'

const viteAlias = `import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@stacktrace/ui': fileURLToPath(
        new URL('./vendor/stacktrace/ui', import.meta.url),
      ),
    },
  },
})`

const typescriptAlias = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@stacktrace/ui": ["./vendor/stacktrace/ui"]
    }
  }
}`

const imports = `import { useFilter, useToggle } from '@stacktrace/ui'
import type { Filter, Menu, SelectOption, Toggle } from '@stacktrace/ui'`
</script>
