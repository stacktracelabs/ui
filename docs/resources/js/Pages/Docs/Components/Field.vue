<template>
  <DocsLayout>
    <Head title="Field" />
    <DocsPage title="Field" description="Combines labels, controls, help text, and errors into accessible form fields.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/field" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="validation">Validation and errors</h2>
      <p>Set <code>data-invalid</code> on <code>Field</code>, <code>aria-invalid</code> on its control, and render the message with <code>FieldError</code>.</p>

      <h2 id="layout">Layout</h2>
      <p>Use vertical, horizontal, or responsive orientation. <code>FieldGroup</code> and <code>FieldSet</code> organize related controls.</p>

      <h2 id="api-reference">API Reference</h2>
      <p>The component exports field, content, description, error, group, label, legend, separator, fieldset, and title primitives.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Field/Default.vue'
import exampleSource from '@/Docs/Examples/Field/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
