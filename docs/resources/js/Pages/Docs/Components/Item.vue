<template>
  <DocsLayout>
    <Head title="Item" />
    <DocsPage title="Item" description="A versatile row or card primitive for displaying structured content and actions.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/item" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="variants">Variants and sizes</h2>
      <p>Choose default, outline, or muted variants and default or small sizing. Use <code>as-child</code> when the complete item is a link.</p>

      <h2 id="api-reference">API Reference</h2>
      <p>Compose media, content, title, description, actions, header, and footer inside <code>Item</code> or <code>ItemGroup</code>.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Item/Default.vue'
import exampleSource from '@/Docs/Examples/Item/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
