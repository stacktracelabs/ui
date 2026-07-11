<template>
  <DocsLayout>
    <Head title="Scroll Area" />
    <DocsPage title="Scroll Area" description="Keeps native scrolling behavior while applying consistent scrollbar styling.">
      <h2 id="installation">Installation</h2>
      <p>Add Scroll Area from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Give <code>ScrollArea</code> an explicit height, width, or maximum size
        so overflow can occur. It includes a vertical scrollbar by default and
        leaves the slotted content in the native scrolling viewport.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="horizontal-scrolling">Horizontal scrolling</h2>
      <p>
        Add <code>ScrollBar orientation="horizontal"</code> when content has an
        intentional inline width. Preserve the content's width with
        <code>w-max</code> or equivalent layout rules; otherwise it may shrink
        instead of overflowing.
      </p>
      <ComponentPreview title="Horizontal" :source="horizontalExampleSource">
        <HorizontalExample />
      </ComponentPreview>

      <h2 id="visibility-and-direction">Visibility and direction</h2>
      <p>
        The root forwards Reka Scroll Area props. Its <code>type</code> can be
        <code>hover</code>, <code>scroll</code>, <code>auto</code>,
        <code>always</code>, or <code>glimpse</code>; hover is the local default.
        <code>scroll-hide-delay</code> controls delayed hiding for applicable
        types, and <code>dir</code> sets reading direction when it is not inherited.
      </p>

      <h2 id="responsive-layout">Responsive layout</h2>
      <p>
        Avoid nested scrolling regions on small screens, especially when both
        parent and child scroll in the same direction. Prefer natural document
        flow for long page content. Use a bounded area for dense sidebars,
        menus, logs, or media strips whose surrounding layout must remain fixed.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Keyboard, wheel, touch, and assistive-technology scrolling remain tied
        to the native viewport. Keep focusable content in a logical order and
        do not hide critical actions beyond an undiscoverable horizontal scroll.
        Add a visible label or landmark around the region when its purpose is
        not obvious from nearby context.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Scroll Area when a deliberately bounded region needs themed scrollbars.</li>
        <li>Use ordinary overflow utilities when custom scrollbar behavior adds no value.</li>
        <li>Do not use it merely to shorten content that should remain visible in page flow.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/ScrollArea/Default.vue'
import exampleSource from '@/Docs/Examples/ScrollArea/Default.vue?raw'
import HorizontalExample from '@/Docs/Examples/ScrollArea/Horizontal.vue'
import horizontalExampleSource from '@/Docs/Examples/ScrollArea/Horizontal.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/scroll-area'
</script>
