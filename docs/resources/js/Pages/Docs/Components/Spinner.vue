<template>
  <DocsLayout>
    <Head title="Spinner" />
    <DocsPage title="Spinner" description="An indicator used to communicate a loading or processing state.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/spinner" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="customization">Customization</h2>
      <p>Spinner inherits the current text color and accepts size utilities, making it suitable inside buttons, badges, fields, and empty states.</p>

      <h2 id="accessibility">Accessibility</h2>
      <p>Provide an accessible label for a standalone spinner. When it accompanies visible loading text, the text supplies the context.</p>

      <h2 id="api-reference">API Reference</h2>
      <p><code>Spinner</code> accepts SVG attributes and additional classes.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Spinner/Default.vue'
import exampleSource from '@/Docs/Examples/Spinner/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
