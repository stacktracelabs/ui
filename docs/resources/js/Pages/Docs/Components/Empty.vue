<template>
  <DocsLayout>
    <Head title="Empty" />
    <DocsPage title="Empty" description="Displays a clear empty state when a collection or workflow has no content yet.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/empty" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="composition">Composition</h2>
      <p>Combine <code>EmptyHeader</code>, <code>EmptyMedia</code>, <code>EmptyTitle</code>, <code>EmptyDescription</code>, and <code>EmptyContent</code> around a focused next action.</p>

      <h2 id="api-reference">API Reference</h2>
      <p><code>EmptyMedia</code> supports default and icon variants. All other parts accept regular HTML attributes and additional classes.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Empty/Default.vue'
import exampleSource from '@/Docs/Examples/Empty/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
