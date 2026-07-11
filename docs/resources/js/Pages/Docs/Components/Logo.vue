<template>
  <DocsLayout>
    <Head title="Logo" />
    <DocsPage title="Logo" description="Renders the StackTrace mark as a small, current-color SVG.">
      <h2 id="installation">Installation</h2>
      <p>Add Logo from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Size the mark with width and height utilities and set its color through
        the surrounding text color. The SVG uses a <code>24 × 24</code> view box,
        has no fixed dimensions, and inherits <code>currentColor</code> for its stroke.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="accessible-name">Accessible name</h2>
      <p>
        When adjacent visible text already says StackTrace, treat the mark as
        decorative with <code>aria-hidden="true"</code>. When it is the only
        product identifier, add <code>role="img"</code> and an
        <code>aria-label</code>. Standard SVG attributes fall through to the
        root element.
      </p>
      <CodeBlock :code="accessibilityCode" language="vue" />

      <h2 id="layout-and-color">Layout and color</h2>
      <p>
        Keep the aspect ratio square, avoid stretching one axis independently,
        and leave enough surrounding space for the mark to remain legible.
        Because it inherits text color, the same component works in light,
        dark, muted, and inverted surfaces without separate image assets.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Logo for StackTrace product identity in headers, navigation, and attribution.</li>
        <li>Do not use it as a generic application icon or status symbol.</li>
        <li>Pair it with text when the audience may not recognize the mark alone.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Logo/Default.vue'
import exampleSource from '@/Docs/Examples/Logo/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/logo'
const accessibilityCode = [
  '<Logo class="size-8" aria-hidden="true" />',
  '<Logo class="size-8" role="img" aria-label="StackTrace" />',
].join('\n')
</script>
