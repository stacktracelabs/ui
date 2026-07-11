<template>
  <DocsLayout>
    <Head title="Resizable" />
    <DocsPage title="Resizable" description="Builds adjustable horizontal or vertical application layouts with keyboard support.">
      <h2 id="installation">Installation</h2>
      <p>Add Resizable from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Place panels and handles as direct siblings inside a
        <code>ResizablePanelGroup</code>. Its required <code>direction</code>
        controls both layout and resize behavior. Give the group a measurable
        height when using vertical direction.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="vertical-layout">Vertical layout</h2>
      <p>
        Vertical groups work well for editor previews, consoles, and other
        stacked workspaces. The visible grip is optional; set
        <code>with-handle</code> only when the stronger affordance helps users
        discover the divider.
      </p>
      <ComponentPreview title="Vertical" :source="verticalExampleSource">
        <VerticalExample />
      </ComponentPreview>

      <h2 id="panel-constraints">Panel constraints</h2>
      <p>
        Use <code>default-size</code> to establish the initial proportions and
        <code>min-size</code>/<code>max-size</code> to protect usable content.
        Panels also support collapsible layouts with
        <code>collapsible</code> and <code>collapsed-size</code>. Values use
        percentages by default; <code>size-unit="px"</code> is available when a
        fixed boundary is truly required.
      </p>
      <p>
        For conditionally rendered panels, provide stable ids and explicit
        order. The group can persist a layout with <code>auto-save-id</code>, or
        the parent can observe the <code>layout</code> event and own persistence.
      </p>

      <h2 id="responsive-behavior">Responsive behavior</h2>
      <p>
        Resizing is not a substitute for responsive design. On small screens,
        consider switching direction, hiding a secondary panel behind
        navigation, or rendering a single active pane. Keep minimum sizes large
        enough for focusable controls and translated labels.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        The Reka splitter handle supports pointer and keyboard resizing and
        receives focus styles. Do not remove the handle from the tab order
        unless the layout is genuinely fixed. Give each pane its own heading or
        landmark so users can understand the regions independently of size.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Resizable for tool-like workspaces where users benefit from allocating space.</li>
        <li>Avoid it for ordinary page columns or cards that should follow responsive CSS automatically.</li>
        <li>Use Scroll Area inside a pane only when that pane also has an intentional bounded height.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Resizable/Default.vue'
import exampleSource from '@/Docs/Examples/Resizable/Default.vue?raw'
import VerticalExample from '@/Docs/Examples/Resizable/Vertical.vue'
import verticalExampleSource from '@/Docs/Examples/Resizable/Vertical.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/resizable'
</script>
