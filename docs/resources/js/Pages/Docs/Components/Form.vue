<template>
  <DocsLayout>
    <Head title="Form" />
    <DocsPage
      title="Form"
      description="Baked controls for building consistent application forms with less repetitive composition."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Form helpers from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Prefer the <code>Form*</code> controls for most application forms. They
        provide the standard label, help, validation, and control composition
        without repeating its markup for every field. Form does not own
        submission or a validation schema; your application and the native
        <code>form</code> element still own that behavior.
      </p>
      <ComponentPreview title="Form control" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="form-control">Form control</h2>
      <p>
        <code>FormControl</code> is the standard wrapper for a labeled control.
        It is built from the lower-level Field primitives while exposing a
        concise API. Its
        <code>label</code>, <code>help</code>, <code>error</code>,
        <code>required</code>, and <code>for</code> props arrange the content
        around its default slot. Match <code>for</code> to the control id. The
        required marker is visual, so also put <code>required</code> on the
        actual control when native constraint validation should apply.
      </p>

      <h3 id="layouts">Vertical and horizontal layouts</h3>
      <p>
        The default <code>vertical</code> variant stacks every part. Use
        <code>variant="horizontal"</code> when a form has enough room for label
        and help text beside the control. The Field composition responds to its
        container, stacking in narrow spaces and aligning horizontally when
        space is available.
      </p>
      <CodeBlock :code="horizontalCode" language="vue" />

      <h2 id="selection-helpers">Selection helpers</h2>
      <p>
        <code>FormSelect</code> renders StackTrace Select items from an
        <code>options</code> array. <code>FormCombobox</code> adds local search
        for longer arrays and can clear a selected option when
        <code>nullable</code> is enabled. Both expose <code>v-model</code> for
        controlled values. Place them inside <code>FormControl</code>, give the
        trigger an <code>id</code> matching the wrapper's <code>for</code>, and
        keep option values stable and unique.
      </p>
      <ComponentPreview title="Select and combobox helpers" :source="selectionsSource">
        <SelectionsExample />
      </ComponentPreview>

      <h2 id="validation-and-accessibility">Validation and accessibility</h2>
      <p>
        Passing <code>error</code> marks the Field composition as invalid and
        renders the error message, but it does not automatically set
        <code>aria-invalid</code> or describe the slotted control. Apply those
        attributes to the control yourself. Keep error text specific and
        actionable, and do not remove persistent help text when an error
        appears.
      </p>

      <h2 id="custom-composition">Custom composition</h2>
      <p>
        Use the Field primitives when the baked Form API cannot express the
        control: semantic fieldsets, grouped choices, arrays of validation
        errors, choice cards, or a genuinely custom layout. Compose the Field
        parts explicitly in those cases. Do not rebuild an ordinary labeled
        input from primitives when <code>FormControl</code> already provides the
        intended structure.
      </p>

      <h2 id="recommendations">Recommendations</h2>
      <DocsComponentRecommendation
        title="Compose exceptional layouts with Field"
        component-href="/docs/components/field"
        component-name="Field"
      >
        Field is the lower-level composition system behind FormControl. Reach
        for it when you need direct control over grouping, orientation,
        semantic fieldsets, or multiple validation messages; otherwise prefer
        the baked Form controls.
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
