<template>
    <DocsLayout>
        <Head title="Introduction" />
        <DocsPage
            title="Introduction"
            description="A Laravel-focused component system built on Vue, Inertia, Reka UI, and the shadcn-vue approach."
        >
            <p>
                StackTrace UI provides application-ready Vue components for teams building Laravel and Inertia applications. It follows the shadcn model: components are installed as source code that becomes part of your application, rather than hidden behind a runtime UI package.
            </p>
            <p>
                The library includes familiar shadcn-vue primitives alongside components and patterns developed for common Laravel application workflows. You can inspect every implementation, adjust its styling, and evolve it with the rest of your codebase.
            </p>

            <h2 id="registry-first">Registry-first distribution</h2>
            <p>
                Components are published through the StackTrace registry and installed with the shadcn-vue CLI. The registry records each component's files, package dependencies, and other StackTrace components it requires.
            </p>
            <CodeBlock :code="installCommand" language="shell" />

            <h2 id="single-source">One source, from preview to project</h2>
            <p>
                The same component source powers this documentation, the interactive examples, and the generated registry. That makes the docs a real consumer of the library and keeps examples aligned with what the CLI installs.
            </p>

            <h2 id="next-steps">Next steps</h2>
            <ul>
                <li><Link href="/docs/installation">Configure the registry and install your first component.</Link></li>
                <li><Link href="/docs/components/button">Explore the Button component and its examples.</Link></li>
                <li><a :href="documentation.githubUrl" target="_blank" rel="noreferrer">View the source repository on GitHub.</a></li>
            </ul>
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import type { AppPageProps } from '@/Types'
import { Head, Link, usePage } from '@inertiajs/vue3'

const { documentation } = usePage<AppPageProps>().props
const installCommand = 'npx shadcn-vue@latest add @stacktrace/button'
</script>
