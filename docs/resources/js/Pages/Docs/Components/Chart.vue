<template>
  <DocsLayout>
    <Head title="Chart" />
    <DocsPage title="Chart" description="Composes Unovis charts with StackTrace colors, tooltips, and legends.">
      <h2 id="installation">Installation</h2>
      <p>
        Add Chart from the configured StackTrace registry. The frontend package
        uses the installed <code>@unovis/vue</code> dependency for chart marks,
        axes, containers, crosshairs, and tooltips.
      </p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Define plain application data and a typed <code>ChartConfig</code>, then
        compose the appropriate Unovis primitives inside
        <code>ChartContainer</code>. StackTrace does not wrap every chart type,
        so Unovis remains the source of truth for mark and axis props.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="configuration">Configuration and theming</h2>
      <p>
        Each config key represents one presented series. Give it a readable
        <code>label</code> and either a single <code>color</code> or a complete
        light/dark <code>theme</code> map. <code>ChartContainer</code> publishes
        those values as <code>--color-&lt;key&gt;</code> custom properties and
        supplies the config to descendant chart helpers.
      </p>
      <p>
        The required <code>config</code> prop describes presentation only. Keep
        raw records, aggregation, date normalization, units, and business rules
        outside the component. This keeps the same dataset usable in tables,
        exports, and accessible summaries.
      </p>

      <h2 id="tooltips-and-legends">Tooltips and legends</h2>
      <p>
        The package re-exports Unovis <code>ChartTooltip</code> and
        <code>ChartCrosshair</code>. Use <code>componentToString</code> with
        <code>ChartTooltipContent</code> when a crosshair needs StackTrace-styled
        HTML. The tooltip content supports label formatting, dot, line, and
        dashed indicators, and optional label or indicator hiding.
      </p>
      <p>
        <code>ChartLegendContent</code> reads labels, icons, and colors from the
        nearest container config. Place legends close to the visualization and
        avoid relying on color alone to distinguish series.
      </p>

      <h2 id="responsive-layout">Responsive layout</h2>
      <p>
        Chart Container fills its parent. Give it an explicit minimum height
        and let the surrounding grid control width. At small breakpoints,
        reduce the number of ticks or move the legend rather than shrinking
        labels until they are unreadable.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        A visual chart is not a complete accessible representation. Add a
        nearby heading and summary, expose units and time ranges in text, and
        provide a semantic table or equivalent detail when exact values matter.
        Tooltips are supplemental and must not be the only way to obtain data.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use a chart to reveal trend, distribution, or comparison.</li>
        <li>Use Table when readers primarily need exact values or row-by-row lookup.</li>
        <li>Avoid chart decoration that does not help answer a concrete question.</li>
      </ul>
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

const installationCode = 'npx shadcn-vue@latest add @stacktrace/chart'
</script>
