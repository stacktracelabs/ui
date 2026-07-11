<template>
  <DocsLayout>
    <Head title="Kbd" />
    <DocsPage title="Kbd" description="Displays keyboard input and shortcut combinations.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/kbd" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="groups">Groups</h2>
      <p>Use <code>KbdGroup</code> to align multiple keys while keeping each key visually distinct.</p>

      <h2 id="api-reference">API Reference</h2>
      <p><code>Kbd</code> and <code>KbdGroup</code> accept regular HTML attributes and additional classes.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Kbd/Default.vue'
import exampleSource from '@/Docs/Examples/Kbd/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
