<template>
  <DocsLayout>
    <Head title="Card" />
    <DocsPage title="Card" description="Groups related content and actions on a distinct surface.">
      <h2 id="installation">Installation</h2>
      <p>Add Card from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose only the regions the content needs. <code>CardHeader</code>
        arranges the title, description, and optional action;
        <code>CardContent</code> owns the main body; and <code>CardFooter</code>
        is for concluding actions or metadata.
      </p>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="header-actions">Header actions</h2>
      <p>
        Place a compact, secondary action in <code>CardAction</code>. It occupies
        a dedicated header column, so keep its label short and avoid putting a
        full action toolbar there. On narrow cards, verify that the title and
        action can coexist without squeezing important text.
      </p>
      <ComponentPreview title="Header action" :source="actionExampleSource">
        <ActionExample />
      </ComponentPreview>

      <h2 id="content-patterns">Content patterns</h2>
      <p>
        Cards may contain forms, summaries, or compact collections, but the
        card itself does not own their state. Keep validation with form
        controls and keep fetched data, loading, and mutation state in the
        parent feature.
      </p>
      <ComponentPreview title="Notifications" :source="notificationsExampleSource">
        <NotificationsExample />
      </ComponentPreview>

      <h2 id="semantics-and-layout">Semantics and layout</h2>
      <p>
        <code>CardTitle</code> renders an <code>h3</code>. Ensure that level fits
        the surrounding page outline; if it does not, use an appropriate
        heading outside the card and treat the card title as supporting text.
        Card regions are visual <code>div</code> containers, so add a semantic
        element around the card when it represents an article, section, or form.
      </p>
      <p>
        Let the parent grid decide card width. Equal-height cards are useful in
        comparison grids, but do not force equal heights when content length is
        unpredictable. Footer borders and header borders receive matching
        spacing when a <code>border-t</code> or <code>border-b</code> class is added.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Card for a self-contained summary, setting group, or focused workflow.</li>
        <li>Avoid wrapping every page section in a card; spacing and headings are often enough.</li>
        <li>Use Item for repeated compact rows and Panel for read-only name-value details.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import ActionExample from '@/Docs/Examples/Card/Action.vue'
import actionExampleSource from '@/Docs/Examples/Card/Action.vue?raw'
import DefaultExample from '@/Docs/Examples/Card/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Card/Default.vue?raw'
import NotificationsExample from '@/Docs/Examples/Card/Notifications.vue'
import notificationsExampleSource from '@/Docs/Examples/Card/Notifications.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/card'
</script>
