<template>
  <DocsLayout>
    <Head title="Collapsible" />
    <DocsPage
      title="Collapsible"
      description="An interactive component that expands and collapses a panel."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Collapsible component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Collapsible for one optional region whose details can be hidden
        without losing the surrounding context. Place the control in
        <code>CollapsibleTrigger</code> and the conditional region in
        <code>CollapsibleContent</code>.
      </p>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="controlled-state">Controlled state</h2>
      <p>
        Use <code>default-open</code> when the component can own its initial
        state. Bind <code>v-model:open</code> when the parent needs to observe or
        change the panel state. The root slot also exposes <code>open</code>,
        which is useful for changing a label or icon without duplicating the
        state.
      </p>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        The trigger primitive communicates its expanded state and relationship
        to the content. Give icon-only triggers an accessible name, and keep the
        trigger next to a visible label that explains what will be revealed.
        Content hidden in a collapsed panel should be optional rather than the
        only indication of an error or required next step.
      </p>
      <p>
        <code>CollapsibleTrigger</code> accepts <code>as-child</code>. Its child
        must stay focusable and forward the attributes and events described in
        the <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>

      <DocsComponentRecommendation
        title="Use Accordion for several related sections"
        component-href="/docs/components/accordion"
        component-name="Accordion"
      >
        Accordion supplies the heading and selection structure needed for a
        coordinated set of expandable sections. Collapsible is best for one
        independent region.
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
import DefaultExample from '@/Docs/Examples/Collapsible/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Collapsible/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/collapsible'
</script>
