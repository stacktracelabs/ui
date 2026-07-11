<template>
  <DocsLayout>
    <Head title="Empty" />
    <DocsPage title="Empty" description="Explains an empty result or first-use state and offers a sensible next step.">
      <h2 id="installation">Installation</h2>
      <p>Add Empty from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Build the message from <code>EmptyHeader</code>, optional
        <code>EmptyMedia</code>, <code>EmptyTitle</code>,
        <code>EmptyDescription</code>, and <code>EmptyContent</code>. Explain why
        content is absent before presenting the most useful next action.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="state-types">Choose the right empty state</h2>
      <ul>
        <li><strong>First use:</strong> explain what will appear and offer creation or import.</li>
        <li><strong>No results:</strong> preserve filter context and offer to clear or broaden it.</li>
        <li><strong>No access:</strong> explain the permission boundary instead of implying there is no data.</li>
        <li><strong>Loading or failure:</strong> use loading or error feedback; absence has not been established.</li>
      </ul>

      <h2 id="media-and-actions">Media and actions</h2>
      <p>
        Use <code>EmptyMedia variant="icon"</code> for a small framed icon; the
        default variant accepts an avatar, illustration, or other unframed
        content. Media should reinforce the message, not replace it. Keep one
        primary action and at most one clear alternative.
      </p>
      <p>
        Add <code>border</code>, background, or gradient utilities to the root
        when the state needs a distinct surface. The built-in padding becomes
        larger from the <code>md</code> breakpoint, while content remains
        centered and width-constrained.
      </p>

      <h2 id="data-boundary">Data and presentation boundary</h2>
      <p>
        Empty does not decide whether a collection is empty. Render it only
        after the parent has resolved loading, error, permissions, and filters.
        Keep retry behavior, filter state, and create/import mutations in that
        parent feature.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Use a concise title and plain description. If the state appears after
        an action or asynchronous update, move focus intentionally or announce
        the change with an appropriate live region in the owning feature. Do
        not turn the whole empty state into one large interactive target.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Empty/Default.vue'
import exampleSource from '@/Docs/Examples/Empty/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/empty'
</script>
