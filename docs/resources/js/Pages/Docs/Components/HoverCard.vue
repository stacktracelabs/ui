<template>
  <DocsLayout>
    <Head title="Hover Card" />
    <DocsPage
      title="Hover Card"
      description="Shows a supplementary preview for the content behind a link or trigger."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Hover Card component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Hover Card to preview supplementary information behind a familiar
        link, such as a profile or referenced resource. The trigger and its
        destination must make sense without the preview; hover content is an
        enhancement, not the only source of essential information or actions.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="interaction">Interaction and delays</h2>
      <p>
        The card opens from pointer hover or keyboard focus and remains
        available while the pointer moves into its content. Use
        <code>open-delay</code> and <code>close-delay</code> only when the
        defaults feel unsuitable in repeated use; extremely short delays cause
        accidental popups. Touch interaction is ignored by default and can be
        enabled explicitly with <code>enable-touch</code>, but important content
        should still have a direct destination on touch devices.
      </p>

      <h2 id="controlled-state">Controlled state and positioning</h2>
      <p>
        Bind <code>v-model:open</code> only when another interface element needs
        to observe or control the preview. <code>HoverCardContent</code> forwards
        positioning props such as <code>side</code>, <code>align</code>, and
        collision behavior, with a local default <code>side-offset</code> of
        four pixels.
      </p>

      <h2 id="composition">Composition</h2>
      <p>
        Use <code>HoverCardTrigger as-child</code> around the original link or
        control to avoid a wrapper. The child must forward attributes and
        events as described in the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>
      <DocsComponentRecommendation
        title="Use Popover for interactive content"
        component-href="/docs/components/popover"
        component-name="Popover"
      >
        Popover opens deliberately and is the better choice for controls,
        forms, or information that the user must be able to reach reliably.
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
import DefaultExample from '@/Docs/Examples/HoverCard/Default.vue'
import exampleSource from '@/Docs/Examples/HoverCard/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/hover-card'
</script>
