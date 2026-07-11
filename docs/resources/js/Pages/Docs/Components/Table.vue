<template>
  <DocsLayout>
    <Head title="Table" />
    <DocsPage title="Table" description="Presents related records in responsive, semantic rows and columns.">
      <h2 id="installation">Installation</h2>
      <p>Add Table from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose the same structure as native table markup:
        <code>TableHeader</code> and <code>TableBody</code> contain
        <code>TableRow</code> elements, while <code>TableHead</code> and
        <code>TableCell</code> represent column headings and data cells.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="semantic-structure">Semantic structure</h2>
      <p>
        <code>Table</code> renders a native <code>table</code> inside a responsive
        overflow container. Use <code>TableCaption</code> to identify the dataset,
        keep header labels concise, and put totals or summaries in
        <code>TableFooter</code>. Do not reproduce a table with generic grid or
        flex elements when column relationships matter.
      </p>
      <p>
        The local head and cell primitives forward classes but do not add
        custom scope or header associations. For complex multi-level headers,
        add the required native attributes or use purpose-built markup that
        preserves correct <code>th</code>/<code>td</code> relationships.
      </p>

      <h2 id="empty-state">Empty state</h2>
      <p>
        Render <code>TableEmpty</code> inside <code>TableBody</code> and set
        <code>colspan</code> to the number of visible columns. Name the reason
        for absence—such as active filters—without replacing the table's
        caption or headers.
      </p>
      <ComponentPreview title="Empty" :source="emptyExampleSource">
        <EmptyExample />
      </ComponentPreview>

      <h2 id="responsive-layout">Responsive layout</h2>
      <p>
        Wide tables scroll horizontally inside the Table container. Preserve
        the most important columns first, keep numeric columns aligned, and
        avoid hiding essential context solely to prevent scrolling. On very
        narrow screens, an Item list may communicate a small record set better
        than a table with many truncated columns.
      </p>

      <h2 id="data-boundary">Data and presentation boundary</h2>
      <p>
        These components present already prepared rows. Fetching, filtering,
        sorting, pagination, selection, permissions, formatting, and mutations
        belong to the parent feature. Keep stable row keys on repeated
        <code>TableRow</code> elements and format dates, numbers, currency, and
        statuses before or while rendering cells.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Table when readers compare values across consistent columns or need exact data.</li>
        <li>Use Chart when trend, distribution, or relative magnitude is the primary question.</li>
        <li>Use Item for responsive records that do not need aligned columns.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Table/Default.vue'
import exampleSource from '@/Docs/Examples/Table/Default.vue?raw'
import EmptyExample from '@/Docs/Examples/Table/Empty.vue'
import emptyExampleSource from '@/Docs/Examples/Table/Empty.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/table'
</script>
