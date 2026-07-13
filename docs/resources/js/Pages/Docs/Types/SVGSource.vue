<template>
    <DocsLayout>
        <Head title="SVGSource" />
        <DocsPage
            title="SVGSource"
            description="A serialized SVG contract accepted anywhere the frontend package supports server-provided icons."
        >
            <h2 id="usage">Usage</h2>
            <p>
                Use <code>SVGSource</code> for trusted SVG markup delivered as application
                data. Prefer ordinary Vue icon components when the icon is known at build
                time. The package's Icon renderer parses the source and renders its SVG
                attributes and children.
            </p>
            <CodeBlock :code="usage" language="typescript" />

            <h2 id="security">Security</h2>
            <p>
                Treat serialized SVG as executable markup. Only render sources produced by
                the application or another trusted system; do not pass arbitrary user input.
            </p>

            <TypeApiReference
                name="SVGSource"
                description="Wraps serialized SVG markup so it can be distinguished from a Vue component icon."
                :definition="definition"
                :properties="properties"
            />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import TypeApiReference from '@/Docs/Components/TypeApiReference.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const usage = `import type { SVGSource } from '@stacktrace/ui'

const icon: SVGSource = {
  src: '<svg viewBox="0 0 24 24">...</svg>',
}`

const definition = `interface SVGSource {
  src: string
}`

const properties = [
    { name: 'src', type: 'string', description: 'Contains a complete serialized SVG element.', required: true },
]
</script>
