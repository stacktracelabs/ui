<template>
  <DocsLayout>
    <Head title="Drawer" />
    <DocsPage
      title="Drawer"
      description="A touch-friendly panel that slides from an edge of the viewport."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Drawer component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Drawer for a compact, touch-first workflow that should remain tied
        to the current screen. The default bottom direction provides a visible
        drag handle; other directions can be selected on the root when the
        surrounding layout makes another edge more natural.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="structure">Structure and actions</h2>
      <p>
        Include a <code>DrawerTitle</code> and use
        <code>DrawerDescription</code> when more context is needed. Place the
        primary and cancel actions in <code>DrawerFooter</code>. Wrap actions
        that should dismiss the panel with <code>DrawerClose</code>; do not rely
        on the swipe gesture as the only way to leave.
      </p>
      <p>
        <code>DrawerTrigger</code> and <code>DrawerClose</code> accept
        <code>as-child</code>. Preserve the focusability and merged attributes
        described in the <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>

      <h2 id="state-and-direction">State and direction</h2>
      <p>
        Bind <code>v-model:open</code> when an external event must control the
        drawer. The underlying drawer root also forwards interaction options
        such as <code>direction</code> and snapping behavior. Keep drag behavior
        predictable, and test scrollable content on a touch device so scrolling
        does not feel like an accidental dismissal.
      </p>

      <h2 id="responsive-use">Responsive use</h2>
      <p>
        A drawer is not automatically responsive; choose it deliberately at the
        breakpoint where touch-oriented bottom-sheet behavior is preferable.
        When rendering Dialog on larger screens and Drawer on smaller screens,
        keep the title, description, fields, and actions equivalent so changing
        viewport size does not change the task.
      </p>
      <DocsComponentRecommendation
        title="Use Dialog for compact desktop workflows"
        component-href="/docs/components/dialog"
        component-name="Dialog"
      >
        Dialog is usually the clearer choice when the workflow is centered,
        keyboard-focused, and does not benefit from dragging or an edge-based
        mobile presentation.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Drawer/Default.vue'
import exampleSource from '@/Docs/Examples/Drawer/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/drawer'
</script>
