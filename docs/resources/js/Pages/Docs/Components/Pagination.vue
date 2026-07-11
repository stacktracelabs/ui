<template>
  <DocsLayout>
    <Head title="Pagination" />
    <DocsPage
      title="Pagination"
      description="Splits a large collection into pages with numbered and directional controls."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Pagination component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Pass the full item count and items per page to <code>Pagination</code>,
        then render the generated page and ellipsis items from
        <code>PaginationContent</code>'s slot. Use pagination when the collection
        is too large to render or understand at once and users benefit from a
        stable position. Prefer a short list or a “load more” flow when direct
        page access and returning to a position are unimportant.
      </p>
      <ComponentPreview title="Pagination" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="page-state">Page state</h2>
      <p>
        Use <code>default-page</code> for locally owned initial state. Use
        <code>v-model:page</code> when filtering, sorting, URL state, or another
        control must coordinate the current page. Clamp or reset the page when a
        changed filter reduces the number of available pages.
      </p>
      <CodeBlock :code="controlledCode" language="vue" />
      <p>
        Keep the page value one-based throughout the interface. If an external
        data source uses zero-based offsets, convert at that boundary instead of
        exposing two numbering systems to the view.
      </p>

      <h2 id="controls">Controls and density</h2>
      <p>
        Previous and next controls are usually enough alongside page numbers.
        Add <code>PaginationFirst</code> and <code>PaginationLast</code> only for
        long collections where jumping to an endpoint is useful. The root
        disables boundary controls automatically.
      </p>
      <p>
        Render every generated item: page items become
        <code>PaginationItem</code> and non-page items become
        <code>PaginationEllipsis</code>. Mark the current page with
        <code>is-active</code> using the root's slot page so the visual state and
        pagination state cannot drift apart.
      </p>

      <h2 id="content-changes">Content changes and focus</h2>
      <p>
        After a page changes, update the collection without moving focus
        unexpectedly. If the new content begins outside the viewport, move focus
        to a useful heading or announce the update through an existing live
        status. Preserve filters and sorting so a page change does not silently
        alter the collection.
      </p>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        Pagination renders navigation semantics and accessible directional
        labels. The active page exposes its current state. Keep page numbers as
        keyboard-operable controls, retain visible focus styles, and do not use
        an ellipsis as a clickable page unless you also give it a clear action
        and accessible name.
      </p>
      <p>
        When composing custom controls with <code>as</code> or
        <code>as-child</code>, preserve their labels, disabled state, and event
        forwarding. See the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Pagination/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Pagination/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/pagination'
const controlledCode = [
  '<Pagination',
  '  v-model:page="page"',
  '  :items-per-page="25"',
  '  :total="filteredItems.length"',
  '>',
  '  ...',
  '</Pagination>',
].join('\n')
</script>
