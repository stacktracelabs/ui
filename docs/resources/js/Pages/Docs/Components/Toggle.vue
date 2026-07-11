<template>
  <DocsLayout>
    <Head title="Toggle" />
    <DocsPage
      title="Toggle"
      description="Controls one independent two-state interface mode."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Toggle component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Toggle for a stateful button such as bold formatting, showing a
        panel, or pinning a view. The pressed appearance and semantics describe
        whether that mode is on. Bind <code>v-model</code> to a boolean when the
        surrounding interface needs to read or change the state.
      </p>
      <ComponentPreview title="Toggle" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="variants-and-sizes">Variants and sizes</h2>
      <p>
        Use the default variant in a toolbar where the surrounding context
        already makes controls visible. Use <code>outline</code> when the
        boundary needs more definition. Sizes are <code>sm</code>,
        <code>default</code>, and <code>lg</code>; keep adjacent controls at one
        size and reserve compact sizes for dense toolbars.
      </p>
      <CodeBlock :code="variantsCode" language="vue" />

      <h2 id="controlled-state">Controlled and disabled state</h2>
      <p>
        Use <code>default-value</code> for an initial uncontrolled pressed state
        or <code>v-model</code> for controlled state, not both. When a parent
        changes the model, the visual pressed state follows it. Disable a toggle
        only when the mode is unavailable, and explain why if that is not
        apparent from nearby content.
      </p>

      <h2 id="labels-and-icons">Labels and icons</h2>
      <p>
        Prefer visible text when the action could be ambiguous. An icon-only
        Toggle needs an <code>aria-label</code> that names the mode, such as
        “Toggle bold,” while the pressed state is conveyed separately. Do not
        change the accessible name between its on and off states.
      </p>
      <CodeBlock :code="iconCode" language="vue" />

      <h2 id="status-versus-action">Status versus action</h2>
      <p>
        Toggle is an action with persistent pressed state, not a status label.
        Use Badge to display state without changing it and Button for a command
        that should run each time it is activated. Do not use Toggle for a
        navigation link or a destructive confirmation.
      </p>
      <DocsComponentRecommendation
        title="Use Switch for an immediate setting"
        component-href="/docs/components/switch"
        component-name="Switch"
      >
        Use Switch for a binary application setting whose on/off state should
        be explicit. Use Toggle for a compact mode or tool within the current
        interface.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Toggle Group for related modes"
        component-href="/docs/components/toggle-group"
        component-name="Toggle Group"
      >
        When several related toggles form one single- or multiple-selection
        control, use Toggle Group so their value and keyboard behavior are
        coordinated.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Toggle/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Toggle/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/toggle'
const variantsCode = [
  '<Toggle variant="default" size="sm">Compact</Toggle>',
  '<Toggle variant="outline" size="default">Outlined</Toggle>',
].join('\n')
const iconCode = [
  '<Toggle v-model="isBold" aria-label="Toggle bold">',
  '  <BoldIcon />',
  '</Toggle>',
].join('\n')
</script>
