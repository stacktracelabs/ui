<template>
  <DocsLayout>
    <Head title="Popover" />
    <DocsPage
      title="Popover"
      description="Displays rich content in a positioned portal, opened by a control."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Popover component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Popover for a small, contextual interaction such as editing a few
        settings, choosing a value, or showing details on demand. The trigger
        should make the purpose clear before the popover opens, and the content
        should stay short enough to understand without becoming a separate
        screen.
      </p>
      <ComponentPreview :source="popoverSource">
        <PopoverExample />
      </ComponentPreview>

      <h2 id="state-and-focus">State and focus</h2>
      <p>
        The popover owns its state by default and closes on Escape or an outside
        interaction. Use <code>default-open</code> only for an initial
        uncontrolled state, and bind <code>v-model:open</code> when an external
        event or completed action must close it. Set <code>modal</code> only when
        outside interaction really must be unavailable while the popover is
        open.
      </p>
      <p>
        Keep keyboard focus order logical inside interactive content. A popover
        should not contain a large form or a decision whose consequence needs a
        modal confirmation.
      </p>

      <h2 id="positioning">Positioning and portals</h2>
      <p>
        <code>PopoverContent</code> forwards positioning props such as
        <code>side</code>, <code>align</code>, offsets, and collision behavior.
        StackTrace defaults to centered alignment with a four-pixel side
        offset. Use <code>PopoverAnchor</code> when positioning should follow a
        different element than the trigger, and use the content
        <code>to</code> prop only when the portal needs a custom destination.
      </p>

      <h2 id="composition">Composition</h2>
      <p>
        Use <code>PopoverTrigger as-child</code> to preserve an existing button
        as the trigger. The child must stay focusable and forward merged
        attributes and events as described in the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>
      <DocsComponentRecommendation
        title="Use Tooltip for a short explanation"
        component-href="/docs/components/tooltip"
        component-name="Tooltip"
      >
        Tooltip is lighter-weight when the content is a brief, non-interactive
        label or hint. Popover is for content the user deliberately opens and
        may interact with.
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
import PopoverExample from '@/Docs/Examples/Popover/PopoverExample.vue'
import popoverSource from '@/Docs/Examples/Popover/PopoverExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/popover'
</script>
