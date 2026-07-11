<template>
  <DocsLayout>
    <Head title="Stepper" />
    <DocsPage
      title="Stepper"
      description="Organizes a multi-step task and exposes the user's current position."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Stepper components from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Stepper for a task with a small, ordered sequence whose steps are
        meaningful to the user. Give every <code>StepperItem</code> a unique
        numeric <code>step</code>, then compose its indicator, title, and
        optional description inside <code>StepperTrigger</code>. Render a
        separator only between adjacent items.
      </p>
      <ComponentPreview title="Stepper" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="controlled-step">Controlled step</h2>
      <p>
        Bind <code>v-model</code> to a number when the displayed step must stay
        aligned with form validation, navigation, or saved draft state. Use
        <code>default-value</code> only when the Stepper may own its initial
        state. The root slot also exposes navigation helpers and state, but
        application rules should remain the source of truth for whether a step
        can be entered.
      </p>
      <CodeBlock :code="controlledCode" language="vue" />

      <h2 id="linear-and-completed">Linear, completed, and disabled steps</h2>
      <p>
        The local Stepper is linear by default, preventing users from jumping
        more than one step ahead. Set <code>:linear="false"</code> only when
        steps may be visited freely. Use a step item's <code>completed</code>
        prop only when completion is known from real application state, and
        <code>disabled</code> when a step cannot currently be selected. Do not
        mark every earlier step complete merely because the user navigated
        forward if its data is still invalid.
      </p>
      <CodeBlock :code="statesCode" language="vue" />

      <h2 id="content-and-actions">Content and actions</h2>
      <p>
        Stepper describes and changes the current position; it does not render
        each step's form content or provide Next and Back actions. Keep the
        active panel close to the step list, label the navigation Buttons by
        outcome, validate before advancing, and preserve entered values when
        moving backward.
      </p>

      <h2 id="orientation-and-keyboard">Orientation and keyboard behavior</h2>
      <p>
        The root forwards <code>orientation</code> to Reka so arrow-key behavior
        matches a horizontal or vertical sequence. The local styling is
        horizontal by default; a vertical Stepper also needs explicit layout
        classes for the root, items, and separators. Do not set a vertical
        orientation while leaving the visual arrangement horizontal.
      </p>
      <p>
        Step titles should remain visible and concise. Indicators alone are not
        enough: numbers and icons need the associated title and description to
        explain the step. Disabled steps must not be the only place users can
        learn why progress is blocked.
      </p>
      <p>
        The root exposes the group with the accessible label “progress” and
        includes a polite live status announcing “Step n of total” when the
        model changes. Avoid adding another live announcement for the same step
        transition, and ensure validation errors are announced independently
        beside the active content.
      </p>

      <h2 id="alternatives">Choosing a sequence component</h2>
      <DocsComponentRecommendation
        title="Use Progress for non-interactive completion"
        component-href="/docs/components/progress"
        component-name="Progress"
      >
        When users only need to see how much background work remains, use
        Progress rather than presenting completion as a set of selectable steps.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Tabs for peer views"
        component-href="/docs/components/tabs"
        component-name="Tabs"
      >
        Use Tabs when sections are peers and may be visited in any order. A
        Stepper implies sequence, progress, and a current stage in one task.
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
import DefaultExample from '@/Docs/Examples/Stepper/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Stepper/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/stepper'
const controlledCode = [
  '<Stepper v-model="currentStep" linear>',
  '  <!-- StepperItem components -->',
  '</Stepper>',
  '',
  '<script setup lang="ts">',
  "import { ref } from 'vue'",
  '',
  'const currentStep = ref(1)',
  '</' + 'script>',
].join('\n')
const statesCode = [
  '<StepperItem',
  '  :step="2"',
  '  :completed="billingIsValid"',
  '  :disabled="!accountIsValid"',
  '>',
  '  <!-- Trigger, indicator, title, and description -->',
  '</StepperItem>',
].join('\n')
</script>
