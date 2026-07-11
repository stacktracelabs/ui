<template>
  <DocsLayout>
    <Head title="Breadcrumb" />
    <DocsPage
      title="Breadcrumb"
      description="Displays the current page's location within a hierarchy of links."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Breadcrumb component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use breadcrumbs for a stable hierarchy with more than one level. They
        supplement the page heading and primary navigation; they do not replace
        either. Keep the current page last, render it with
        <code>BreadcrumbPage</code>, and do not make it a link to itself.
      </p>
      <ComponentPreview title="Breadcrumb" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>
      <p>
        <code>BreadcrumbLink</code> renders an Inertia <code>Link</code> by
        default. Set <code>as="a"</code> for an external destination or any
        navigation that must perform a full browser visit.
      </p>
      <CodeBlock :code="externalLinkCode" language="vue" />

      <h2 id="long-paths">Long paths</h2>
      <p>
        Keep the first meaningful ancestor and the current page visible. Collapse
        intermediate levels only when the path no longer fits; never remove them
        from the navigation without providing another way to reach them.
      </p>

      <h3 id="collapsed">Collapsed</h3>
      <p>
        <code>BreadcrumbEllipsis</code> is a visual placeholder. When omitted
        levels remain useful, place it inside a labeled menu trigger so keyboard
        and screen-reader users can open the same destinations.
      </p>
      <ComponentPreview title="Collapsed" :source="collapsedExampleSource">
        <CollapsedExample />
      </ComponentPreview>

      <h3 id="dropdown">Dropdown</h3>
      <p>
        Use a dropdown for a short list of hidden sibling or ancestor pages. Use
        navigation links inside its items; plain menu items are appropriate only
        when they perform actions rather than navigation.
      </p>
      <ComponentPreview title="Dropdown" :source="dropdownExampleSource">
        <DropdownExample />
      </ComponentPreview>

      <h3 id="responsive">Responsive</h3>
      <p>
        A compact drawer can make long labels and larger touch targets easier to
        use on small screens. Keep the destinations and their order equivalent
        across breakpoints, and return focus to the disclosure trigger when it
        closes.
      </p>
      <ComponentPreview title="Responsive" :source="responsiveExampleSource">
        <ResponsiveExample />
      </ComponentPreview>

      <h2 id="presentation">Presentation</h2>
      <h3 id="custom-separator">Custom separator</h3>
      <p>
        Pass an icon through <code>BreadcrumbSeparator</code>'s default slot.
        Separators are decorative and hidden from assistive technology, so do not
        rely on the symbol alone to communicate hierarchy.
      </p>
      <ComponentPreview title="Custom separator" :source="customSeparatorExampleSource">
        <CustomSeparatorExample />
      </ComponentPreview>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        <code>Breadcrumb</code> supplies the navigation landmark and an accessible
        label, while <code>BreadcrumbPage</code> marks the current location. Use
        real links for navigable ancestors so standard link keyboard behavior,
        context menus, and open-in-new-tab actions remain available.
      </p>
      <p>
        Use <code>as</code> or <code>as-child</code> only when the composed child
        preserves link semantics and forwards attributes. See the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
        For a set of unrelated top-level destinations, use Navigation Menu or
        Sidebar instead of presenting it as a breadcrumb trail.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import CollapsedExample from '@/Docs/Examples/Breadcrumb/Collapsed.vue'
import collapsedExampleSource from '@/Docs/Examples/Breadcrumb/Collapsed.vue?raw'
import CustomSeparatorExample from '@/Docs/Examples/Breadcrumb/CustomSeparator.vue'
import customSeparatorExampleSource from '@/Docs/Examples/Breadcrumb/CustomSeparator.vue?raw'
import DefaultExample from '@/Docs/Examples/Breadcrumb/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Breadcrumb/Default.vue?raw'
import DropdownExample from '@/Docs/Examples/Breadcrumb/Dropdown.vue'
import dropdownExampleSource from '@/Docs/Examples/Breadcrumb/Dropdown.vue?raw'
import ResponsiveExample from '@/Docs/Examples/Breadcrumb/Responsive.vue'
import responsiveExampleSource from '@/Docs/Examples/Breadcrumb/Responsive.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/breadcrumb'
const externalLinkCode = '<BreadcrumbLink as="a" href="https://example.com">External site</BreadcrumbLink>'
</script>
