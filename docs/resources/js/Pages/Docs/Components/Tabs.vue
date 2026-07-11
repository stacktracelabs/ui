<template>
  <DocsLayout>
    <Head title="Tabs" />
    <DocsPage
      title="Tabs"
      description="Switches between related content panels without leaving the current view."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Tabs component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Put <code>TabsTrigger</code> components inside <code>TabsList</code> and
        match every trigger value to exactly one <code>TabsContent</code> value.
        Use tabs for a small set of peer views that share one context. Prefer
        headings on one page when users need to compare sections, and use links
        when each destination needs its own URL and navigation history.
      </p>
      <ComponentPreview title="Tabs" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="state">Selected state</h2>
      <p>
        Use <code>default-value</code> for initial uncontrolled state. Bind
        <code>v-model</code> when another control must select a panel or the
        application needs to observe the active value. Keep state that belongs
        to a panel outside Tabs if switching away must not discard it.
      </p>
      <CodeBlock :code="controlledCode" language="vue" />
      <p>
        Do not use a disabled tab to advertise content that does not exist. A
        disabled trigger is useful only when the panel will become available in
        the current workflow and the reason is clear nearby.
      </p>

      <h2 id="variants">Variants</h2>
      <p>
        The default variant places triggers on a muted track. Use
        <code>variant="ghost"</code> for lower-emphasis tabs in dense surfaces.
        Choose one variant per tab set and keep the active state visually
        distinct from hover and focus.
      </p>
      <CodeBlock :code="variantCode" language="vue" />

      <h2 id="navigation-links">URL-driven navigation</h2>
      <p>
        StackTrace's <code>TabsLinkList</code> and <code>TabsLink</code> provide
        tab-like styling for Inertia navigation. They are links rather than a
        tab widget: each activation performs navigation, and active state is
        inferred from the current URL unless the <code>active</code> prop is set
        explicitly.
      </p>
      <ComponentPreview title="Navigation links" :source="linksExampleSource">
        <LinksExample />
      </ComponentPreview>
      <p>
        Use this link composition for sibling pages such as account sections.
        Use stateful <code>Tabs</code> when panels belong to one page and should
        switch without navigation.
      </p>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        Stateful Tabs supplies tablist, tab, and tabpanel semantics. Arrow keys
        move focus between triggers according to orientation, and the active
        trigger is associated with its panel. Keep trigger labels short and
        unique, preserve visible focus, and avoid interactive elements inside a
        trigger.
      </p>
      <p>
        Link-based tab styling retains normal link keyboard behavior instead of
        tab-widget arrow navigation. When using <code>as-child</code> with a
        stateful trigger, the child must preserve roles, attributes, refs, and
        events described in the
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
import DefaultExample from '@/Docs/Examples/Tabs/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Tabs/Default.vue?raw'
import LinksExample from '@/Docs/Examples/Tabs/Links.vue'
import linksExampleSource from '@/Docs/Examples/Tabs/Links.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/tabs'
const controlledCode = [
  '<Tabs v-model="section">',
  '  <TabsList>...</TabsList>',
  '  <TabsContent value="profile">...</TabsContent>',
  '</Tabs>',
].join('\n')
const variantCode = [
  '<Tabs default-value="overview" variant="ghost">',
  '  <TabsList>...</TabsList>',
  '  <TabsContent value="overview">...</TabsContent>',
  '</Tabs>',
].join('\n')
</script>
