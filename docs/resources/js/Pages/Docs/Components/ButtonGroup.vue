<template>
  <DocsLayout>
    <Head title="Button Group" />
    <DocsPage title="Button Group" description="Groups related buttons together with consistent borders and spacing.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/button-group" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="orientation">Orientation</h2>
      <p>Button groups are horizontal by default. Set <code>orientation="vertical"</code> to stack their children.</p>

      <h2 id="accessibility">Accessibility</h2>
      <p>Give the group an accessible label when its purpose is not clear from surrounding content.</p>

      <h2 id="api-reference">API Reference</h2>
      <p><code>ButtonGroup</code> accepts horizontal or vertical orientation. Use <code>ButtonGroupSeparator</code> and <code>ButtonGroupText</code> for non-button content.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/ButtonGroup/Default.vue'
import exampleSource from '@/Docs/Examples/ButtonGroup/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
