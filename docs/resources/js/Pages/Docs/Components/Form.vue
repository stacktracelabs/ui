<template>
  <DocsLayout>
    <Head title="Form" />
    <DocsPage
      title="Form"
      description="StackTrace helpers for labeled controls, validation messages, selects, and searchable choices."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Form helpers from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        This is StackTrace's layout-oriented Form API. It is not upstream
        shadcn-vue's vee-validate abstraction and does not own submission or a
        validation schema. Pass labels, help, and current errors from your
        application, while the native <code>form</code> element owns submission.
      </p>
      <ComponentPreview title="Form control" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="form-control">Form control</h2>
      <p>
        <code>FormControl</code> is the high-level wrapper. Its
        <code>label</code>, <code>help</code>, <code>error</code>,
        <code>required</code>, and <code>for</code> props compose
        <code>FormLabel</code>, <code>FormDescription</code>, and
        <code>FormMessage</code> around the default slot. Match
        <code>for</code> to the control id; the required marker is visual, so
        also put <code>required</code> on the actual control when native
        constraint validation should apply.
      </p>

      <h3 id="layouts">Vertical and horizontal layouts</h3>
      <p>
        The default <code>vertical</code> variant stacks every part. Use
        <code>variant="horizontal"</code> for wide forms where labels can occupy
        two fifths of the row without becoming cramped. It falls back to a
        vertical layout on smaller screens.
      </p>
      <CodeBlock :code="horizontalCode" language="vue" />

      <h2 id="selection-helpers">Selection helpers</h2>
      <p>
        <code>FormSelect</code> renders StackTrace Select items from an
        <code>options</code> array. <code>FormCombobox</code> adds local search
        for longer arrays and can clear a selected option when
        <code>nullable</code> is enabled. Both expose <code>v-model</code> for
        controlled values; keep option values stable and unique.
      </p>
      <p>
        These two helpers do not currently forward an id to their button
        triggers. Give each one visible context with <code>FormItem</code> and
        <code>FormLabel</code>, group them with <code>aria-labelledby</code>, and
        keep a meaningful placeholder or selected label on the trigger.
      </p>
      <ComponentPreview title="Select and combobox helpers" :source="selectionsSource">
        <SelectionsExample />
      </ComponentPreview>

      <h2 id="validation-and-accessibility">Validation and accessibility</h2>
      <p>
        Passing <code>error</code> changes label styling and renders
        <code>FormMessage</code>, but it does not automatically set
        <code>aria-invalid</code> or describe the control. Apply those
        attributes to the slotted input yourself. Keep error text specific and
        actionable, and do not remove persistent help text when an error
        appears.
      </p>

      <h2 id="lower-level-primitives">Lower-level primitives</h2>
      <p>
        Use <code>FormItem</code>, <code>FormLabel</code>,
        <code>FormDescription</code>, and <code>FormMessage</code> directly only
        when <code>FormControl</code>'s layout is too restrictive. They provide
        presentation, not model registration, generated ids, or validation
        state.
      </p>

      <h2 id="recommendations">Recommendations</h2>
      <DocsComponentRecommendation
        title="Prefer Field for new compositions"
        component-href="/docs/components/field"
        component-name="Field"
      >
        Field is the framework-neutral composition for new work and has
        stronger grouping, orientation, and error-array support. Keep Form for
        existing layouts that benefit from its string-prop convenience API.
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
import DefaultExample from '@/Docs/Examples/Form/Default.vue'
import exampleSource from '@/Docs/Examples/Form/Default.vue?raw'
import SelectionsExample from '@/Docs/Examples/Form/Selections.vue'
import selectionsSource from '@/Docs/Examples/Form/Selections.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/form'
const horizontalCode = [
  '<FormControl',
  '  for="display-name"',
  '  label="Display name"',
  '  help="Shown to other team members."',
  '  variant="horizontal"',
  '>',
  '  <Input id="display-name" v-model="displayName" />',
  '</FormControl>',
].join('\n')
</script>
