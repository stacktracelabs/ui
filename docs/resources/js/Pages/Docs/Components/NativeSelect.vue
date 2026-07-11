<template>
  <DocsLayout>
    <Head title="Native Select" />
    <DocsPage title="Native Select" description="A styled native select with consistent design-system behavior.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/native-select" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="when-to-use">Native Select or Select</h2>
      <p>Prefer Native Select for straightforward forms and native mobile behavior. Use Select when richer custom content and interaction are required.</p>

      <h2 id="states">States</h2>
      <p>The native control supports disabled options, grouped options, and <code>aria-invalid</code> validation styling.</p>

      <h2 id="api-reference">API Reference</h2>
      <p>Use <code>NativeSelectOption</code> and <code>NativeSelectOptGroup</code> as direct children of <code>NativeSelect</code>.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/NativeSelect/Default.vue'
import exampleSource from '@/Docs/Examples/NativeSelect/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
