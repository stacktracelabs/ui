<template>
  <DocsLayout>
    <Head title="Breadcrumb" />
    <DocsPage
      title="Breadcrumb"
      description="Displays the path to the current resource through a hierarchy of links."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Breadcrumb component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="links">Links</h2>
      <p>
        <code>BreadcrumbLink</code> renders an Inertia <code>Link</code> by
        default. Set <code>as="a"</code> when the destination should use a
        standard browser navigation.
      </p>
      <CodeBlock
        :code="externalLinkCode"
        language="vue"
      />

      <h2 id="examples">Examples</h2>
      <h3 id="collapsed">Collapsed</h3>
      <p>
        Use <code>BreadcrumbEllipsis</code> when the full path is too long to
        display.
      </p>
      <ComponentPreview
        title="Collapsed"
        :source="collapsedExampleSource"
      >
        <CollapsedExample />
      </ComponentPreview>

      <h3 id="custom-separator">Custom separator</h3>
      <p>Pass a custom icon through the separator's default slot.</p>
      <ComponentPreview
        title="Custom separator"
        :source="customSeparatorExampleSource"
      >
        <CustomSeparatorExample />
      </ComponentPreview>

      <h3 id="dropdown">Dropdown</h3>
      <p>
        Compose a breadcrumb item with a dropdown when one step represents
        several nearby destinations.
      </p>
      <ComponentPreview
        title="Dropdown"
        :source="dropdownExampleSource"
      >
        <DropdownExample />
      </ComponentPreview>

      <h3 id="responsive">Responsive</h3>
      <p>
        This example uses a dropdown on larger screens and a drawer on smaller
        screens.
      </p>
      <ComponentPreview
        title="Responsive"
        :source="responsiveExampleSource"
      >
        <ResponsiveExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
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
