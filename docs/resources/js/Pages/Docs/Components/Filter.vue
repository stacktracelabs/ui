<template>
  <DocsLayout>
    <Head title="Filter" />
    <DocsPage
      title="Filter"
      description="Provides compact frontend controls for narrowing a collection or search result."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Filter components from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose only the controls that match the collection's useful facets,
        then bind each one to frontend state. Keep filters together in a
        wrapping toolbar, use domain-specific titles, and show the current
        selections close to their triggers.
      </p>
      <ComponentPreview title="Filter toolbar" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="controls">Available controls</h2>
      <h3 id="search">Search</h3>
      <p>
        <code>FilterSearchInput</code> binds a string or number model and uses
        the local Input's 300 ms debounce. Add an accessible label that names
        the searched collection; the built-in “Search…” placeholder is not a
        replacement for a label.
      </p>
      <CodeBlock :code="searchCode" language="vue" />

      <h3 id="checkbox">Boolean filter</h3>
      <p>
        <code>FilterCheckbox</code> toggles its model when the compact outline
        button is activated. Use it only for an independent boolean facet such
        as “Active only.” Its required <code>title</code> is the visible label;
        write the title as a condition rather than an ambiguous command.
      </p>

      <h3 id="multiple-selection">Multiple selection</h3>
      <p>
        <code>FilterMultiSelect</code> receives <code>options</code> with
        <code>label</code> and <code>value</code> fields and binds a
        <code>string[]</code>. Option values are normalized to strings. The
        trigger shows up to two selected labels on large screens and switches
        to a count for larger selections; the popover provides filtering and a
        clear action.
      </p>
      <CodeBlock :code="multiSelectCode" language="vue" />

      <h3 id="date-range">Date range</h3>
      <p>
        Bind <code>v-model:from</code> and <code>v-model:until</code> to calendar
        date strings. The control emits each boundary separately and its Clear
        action returns both to <code>undefined</code>. The current implementation
        displays two months and uses Slovak calendar and formatting locales;
        treat that as a local constraint until locale props are added.
      </p>
      <CodeBlock :code="dateRangeCode" language="vue" />

      <h3 id="number">Numeric operators</h3>
      <p>
        <code>FilterNumberInput</code> binds a string or <code>null</code>. It
        encodes one-value comparisons as <code>operator:value</code>, for
        example <code>gte:10</code>, and ranges as
        <code>be:10:20</code> or <code>nbe:10:20</code>. Supported one-value
        operators are <code>lt</code>, <code>lte</code>, <code>eq</code>,
        <code>gte</code>, and <code>gt</code>. Invalid or incomplete input emits
        <code>null</code> when the popover closes.
      </p>

      <h3 id="reset">Reset</h3>
      <p>
        <code>FilterResetButton</code> accepts the frontend filter object. It is
        rendered only while <code>filter.applied</code> is true and calls
        <code>filter.reset()</code> when activated. Place it after the facet
        controls so clearing the complete filter state is easy to find.
      </p>

      <h2 id="controlled-state">Controlled values</h2>
      <p>
        These controls edit local values; they do not decide how a collection
        loads or how state is serialized outside the component. Keep one source
        of truth, pass updated external values back into the controls, and use
        the encoded numeric and date formats exactly as documented above.
        Reset all related values together so the toolbar and displayed results
        cannot disagree.
      </p>

      <h2 id="guidance">Design and accessibility guidance</h2>
      <p>
        Use filters for optional narrowing, not for required form answers.
        Preserve a visible result count or summary when a filter materially
        changes what is shown. Filter triggers must have specific visible
        titles, and icon-only clear actions need accessible names. After a
        filter changes results, keep focus on the control unless the user
        explicitly asked to move elsewhere.
      </p>
      <DocsComponentRecommendation
        title="Use form controls for submitted data"
        component-href="/docs/components/field"
        component-name="Field"
      >
        For required values, validation, descriptions, and errors that belong
        to a form submission, compose regular controls inside Field instead of
        using the compact Filter toolbar controls.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Filter/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Filter/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/filter'
const searchCode = '<FilterSearchInput v-model="search" aria-label="Search projects" />'
const multiSelectCode = [
  '<FilterMultiSelect',
  '  v-model="statuses"',
  '  title="Status"',
  '  :options="[',
  "    { label: 'Draft', value: 'draft' },",
  "    { label: 'Published', value: 'published' },",
  '  ]"',
  '/>',
].join('\n')
const dateRangeCode = [
  '<FilterDateRange',
  '  v-model:from="createdFrom"',
  '  v-model:until="createdUntil"',
  '  title="Created"',
  '/>',
].join('\n')
</script>
