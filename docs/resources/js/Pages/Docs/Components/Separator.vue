<template>
  <DocsLayout>
    <Head title="Separator" />
    <DocsPage title="Separator" description="Adds a visual or semantic boundary between related content.">
      <h2 id="installation">Installation</h2>
      <p>Add Separator from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Separator is horizontal and decorative by default. Set
        <code>orientation="vertical"</code> inside a container with a defined
        height when dividing inline actions or metadata.
      </p>
      <ComponentPreview :source="separatorSource">
        <SeparatorExample />
      </ComponentPreview>

      <h2 id="decorative-or-semantic">Decorative or semantic</h2>
      <p>
        Keep <code>decorative</code> enabled when nearby headings, grouping, or
        layout already communicates the structure. Set
        <code>:decorative="false"</code> only when the divider itself carries a
        meaningful boundary; Reka then exposes separator semantics and its
        orientation to assistive technology.
      </p>
      <p>
        A separator should not replace a heading, list, landmark, or adequate
        whitespace. It has no label slot and does not create collapsible or
        resizable behavior.
      </p>

      <h2 id="responsive-layout">Responsive layout</h2>
      <p>
        Horizontal separators fill the available width. Vertical separators
        fill the parent's height, so place them in a row with an intentional
        height. When controls wrap on narrow screens, switch or remove a
        vertical divider rather than leaving a stray rule between rows.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Separator for a subtle boundary between neighboring regions of equal hierarchy.</li>
        <li>Use Marker's separator variant when a conversation or timeline needs a visible text label between rules.</li>
        <li>Use Resizable Handle when the boundary also changes panel size.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import SeparatorExample from '@/Docs/Examples/Separator/SeparatorExample.vue'
import separatorSource from '@/Docs/Examples/Separator/SeparatorExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/separator'
</script>
