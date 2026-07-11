<template>
  <DocsLayout>
    <Head title="Chart" />
    <DocsPage title="Chart" description="Beautiful charts built with Unovis and the StackTrace design tokens.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/chart" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="chart-config">Chart config</h2>
      <p>Pass a <code>ChartConfig</code> object to map each data series to a label, icon, and semantic chart color.</p>

      <h2 id="tooltips-and-legends">Tooltips and legends</h2>
      <p>Compose Unovis primitives with <code>ChartTooltip</code>, <code>ChartTooltipContent</code>, and <code>ChartLegendContent</code> when the visualization needs richer context.</p>

      <h2 id="api-reference">API Reference</h2>
      <p><code>ChartContainer</code> supplies chart configuration and responsive sizing. The package also exports tooltip, crosshair, legend, and serialization helpers.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Chart/Default.vue'
import exampleSource from '@/Docs/Examples/Chart/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
