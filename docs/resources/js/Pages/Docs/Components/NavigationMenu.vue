<template>
  <DocsLayout>
    <Head title="Navigation Menu" />
    <DocsPage
      title="Navigation Menu"
      description="Organizes important site destinations into links and expandable navigation panels."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Navigation Menu component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Navigation Menu for a small set of site-level destinations where
        some categories benefit from a preview panel. Keep direct destinations
        as links and use triggers only for items that open content. Prefer plain
        links for a simple header and Sidebar for persistent application
        navigation with many destinations.
      </p>
      <ComponentPreview title="Navigation menu" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="links-and-active-state">Links and active state</h2>
      <p>
        The local <code>NavigationMenuLink</code> renders an Inertia
        <code>Link</code>. Pass <code>href</code> directly and set
        <code>:active="true"</code> for the current destination. Active styling
        is not inferred from the URL by this component.
      </p>
      <CodeBlock :code="activeLinkCode" language="vue" />
      <p>
        A trigger is not a substitute for a link. If its label names a page that
        users must be able to visit, include that destination as a link inside
        the panel or make it a direct navigation item.
      </p>

      <h2 id="content-and-viewport">Content and viewport</h2>
      <p>
        Use <code>NavigationMenuContent</code> for a curated set of related
        destinations with brief descriptions. Avoid placing forms, destructive
        actions, or multi-step workflows in the panel. The root renders a shared
        viewport by default; set <code>:viewport="false"</code> only when each
        content panel must position itself independently.
      </p>
      <p>
        Keep panel widths predictable so opening adjacent items does not cause
        large layout shifts. The indicator and viewport are optional presentation
        primitives; links and triggers must remain understandable without them.
      </p>

      <h2 id="state">State</h2>
      <p>
        The root forwards the current open item through <code>v-model</code>.
        Control it only when another part of the interface must coordinate which
        panel is open. Do not force a panel open to represent the current page;
        use the link's active state for that purpose.
      </p>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        Tab enters and leaves the navigation, arrow keys move among items, and
        Enter or Space opens a trigger. Escape closes a panel and returns focus.
        Keep labels unique and order items consistently with the visual layout.
      </p>
      <p>
        When applying <code>navigationMenuTriggerStyle()</code> to a direct link,
        keep it a real link rather than nesting it in a button. Read the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before substituting custom trigger children. Use Dropdown Menu or Menubar
        for commands; this component is for navigation.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/NavigationMenu/Default.vue'
import defaultExampleSource from '@/Docs/Examples/NavigationMenu/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/navigation-menu'
const activeLinkCode = [
  '<NavigationMenuLink',
  '  href="/docs/components/button"',
  '  :active="$page.url.startsWith(\'/docs/components\')"',
  '  :class="navigationMenuTriggerStyle()"',
  '>',
  '  Components',
  '</NavigationMenuLink>',
].join('\n')
</script>
