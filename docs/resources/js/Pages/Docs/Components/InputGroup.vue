<template>
  <DocsLayout>
    <Head title="Input Group" />
    <DocsPage title="Input Group" description="Adds icons, text, and actions to an input or textarea without breaking its field layout.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/input-group" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="addons">Addons</h2>
      <p>Place addons at inline-start, inline-end, block-start, or block-end. Use the provided input and textarea components inside the group.</p>

      <h2 id="api-reference">API Reference</h2>
      <p>The group exports <code>InputGroupAddon</code>, <code>InputGroupButton</code>, <code>InputGroupInput</code>, <code>InputGroupText</code>, and <code>InputGroupTextarea</code>.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/InputGroup/Default.vue'
import exampleSource from '@/Docs/Examples/InputGroup/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
