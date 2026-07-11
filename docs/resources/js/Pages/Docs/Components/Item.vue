<template>
  <DocsLayout>
    <Head title="Item" />
    <DocsPage title="Item" description="Composes compact rows or cards from media, content, metadata, and actions.">
      <h2 id="installation">Installation</h2>
      <p>Add Item from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use <code>ItemContent</code> for the flexible text column,
        <code>ItemMedia</code> for a leading icon or image, and
        <code>ItemActions</code> for controls that operate on that item. Header
        and footer regions span the full row when secondary metadata needs its
        own line.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="variants-and-size">Variants and size</h2>
      <p>
        The <code>default</code> variant blends into its container,
        <code>outline</code> draws an individual boundary, and
        <code>muted</code> provides a quiet filled surface. Use the
        <code>sm</code> size for dense lists and the default size when media,
        descriptions, or actions need more breathing room.
      </p>
      <p>
        <code>ItemMedia</code> separately supports <code>default</code>,
        <code>icon</code>, and <code>image</code> presentation. Always keep image
        alternative text and do not rely on media alone to identify the row.
      </p>

      <h2 id="groups-and-separators">Groups and separators</h2>
      <p>
        <code>ItemGroup</code> provides <code>role="list"</code>. Give each Item
        <code>role="listitem"</code> when using that grouping, or use native list
        markup when document semantics are more important than polymorphic
        composition. <code>ItemSeparator</code> adds a horizontal separator
        between adjacent items; avoid both outlines and separators when one
        boundary is enough.
      </p>

      <h2 id="interactive-items">Interactive items</h2>
      <p>
        Use <code>as-child</code> when the entire item is one link so hover and
        focus styles land on the real anchor. Do not make the complete row a
        link when it also contains independent buttons, menus, checkboxes, or
        nested links. Read the <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before forwarding Item behavior through a custom component.
      </p>

      <h2 id="responsive-layout">Responsive layout</h2>
      <p>
        Items wrap when space is tight, while content keeps a zero minimum
        width so long text can clamp and wrap. Test rows with long translated
        titles and multiple actions. Move secondary controls into a menu or a
        full-width footer when they crowd the primary content.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Item for repeated resources, notifications, settings, or activity rows.</li>
        <li>Use Card for a larger self-contained region with header, body, and footer.</li>
        <li>Use Table when aligned columns and column headers are essential to comparison.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Item/Default.vue'
import exampleSource from '@/Docs/Examples/Item/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/item'
</script>
