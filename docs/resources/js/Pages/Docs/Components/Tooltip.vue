<template>
  <DocsLayout>
    <Head title="Tooltip" />
    <DocsPage
      title="Tooltip"
      description="Displays brief contextual information when a control receives focus or is hovered."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Tooltip component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Tooltip for a short label or explanation that supplements a
        control. It must not contain interactive content, and it must not be the
        only place to communicate essential instructions, validation, or the
        result of an action.
      </p>
      <ComponentPreview :source="tooltipSource">
        <TooltipExample />
      </ComponentPreview>

      <h2 id="provider">Provider and delays</h2>
      <p>
        Place one <code>TooltipProvider</code> around a group of tooltips or near
        the application root. The StackTrace provider defaults
        <code>delay-duration</code> to zero, so tooltips open immediately. Set a
        modest provider delay when a dense interface would otherwise show
        tooltips during incidental pointer movement; a Tooltip can override the
        delay for one trigger.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        The trigger must be reachable by keyboard so the same content appears
        on focus as on hover. Give icon-only buttons an <code>aria-label</code>
        even when they also have a tooltip: the tooltip supplements the
        accessible name rather than replacing it. A native disabled control
        cannot receive focus, so do not rely on its tooltip to explain why an
        action is unavailable; place that explanation in visible content or on
        an appropriate focusable wrapper.
      </p>
      <p>
        Use <code>TooltipTrigger as-child</code> to preserve the original
        control. The child must forward merged attributes and events as
        described in the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>

      <h2 id="state-and-positioning">State and positioning</h2>
      <p>
        Tooltips normally manage their own open state. Bind
        <code>v-model:open</code> only when another interaction genuinely needs
        to coordinate it. <code>TooltipContent</code> forwards positioning props
        such as <code>side</code>, <code>align</code>, and collision behavior, and
        defaults to a four-pixel side offset.
      </p>

      <DocsComponentRecommendation
        title="Use Hover Card for a rich preview"
        component-href="/docs/components/hover-card"
        component-name="Hover Card"
      >
        Hover Card supports a larger supplementary preview behind a link.
        Tooltip should stay brief and non-interactive.
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
import TooltipExample from '@/Docs/Examples/Tooltip/TooltipExample.vue'
import tooltipSource from '@/Docs/Examples/Tooltip/TooltipExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/tooltip'
</script>
