<template>
  <DocsLayout>
    <Head title="Checkbox" />
    <DocsPage
      title="Checkbox"
      description="Lets a user turn an independent option on or off."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Checkbox component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use a checkbox for an independent yes-or-no choice, or for each item in
        a group where any number of items may be selected. Bind
        <code>v-model</code> when application state needs the current value;
        omit it when ordinary native form submission is sufficient.
      </p>
      <ComponentPreview title="Checkbox" :source="basicExampleSource">
        <BasicExample />
      </ComponentPreview>

      <h2 id="labels">Labels and hit area</h2>
      <p>
        Give every checkbox a visible label. Match the label's
        <code>for</code> attribute to the checkbox <code>id</code> so selecting
        the text also toggles the control. Keep the wording affirmative and
        specific, such as “Send weekly reports,” rather than “Do not disable
        reports.”
      </p>
      <ComponentPreview title="With label" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h3 id="checkbox-control">Generated label association</h3>
      <p>
        <code>CheckboxControl</code> is a convenience wrapper that generates
        an id, associates its label, and forwards <code>v-model</code>,
        <code>value</code>, and <code>indeterminate</code>. Use the separate
        <code>Checkbox</code> and <code>Label</code> components when the layout
        needs description or error content.
      </p>
      <ComponentPreview title="Checkbox control" :source="controlExampleSource">
        <ControlExample />
      </ComponentPreview>

      <h2 id="controlled-values">Controlled values</h2>
      <p>
        A single checkbox normally binds to a boolean. When several
        checkboxes share an array model, give each one a distinct
        <code>value</code>; Vue adds and removes those values using native
        checkbox semantics. Do not use one shared boolean for a multi-item
        group.
      </p>
      <CodeBlock :code="arrayModelCode" language="vue" />

      <h3 id="indeterminate">Indeterminate state</h3>
      <p>
        Set <code>indeterminate</code> when a parent checkbox represents a
        partially selected set. It is a visual state, not a third submitted
        value: keep the actual checked model in sync and clear the mixed state
        when the user makes an explicit choice.
      </p>
      <ComponentPreview title="Indeterminate checkbox" :source="indeterminateExampleSource">
        <IndeterminateExample />
      </ComponentPreview>

      <h2 id="validation-and-accessibility">Validation and accessibility</h2>
      <p>
        Use <code>required</code> only when the user truly must opt in, and do
        not preselect consent. For validation, place the checkbox in a
        <code>Field</code>, set <code>data-invalid</code> on that field and
        <code>aria-invalid</code> on the checkbox, then render the explanation
        with <code>FieldError</code>. Group related checkboxes in a semantic
        <code>FieldSet</code> with a <code>FieldLegend</code>.
      </p>

      <h2 id="choosing-a-control">Choosing a control</h2>
      <DocsComponentRecommendation
        title="Use Radio Group for one choice"
        component-href="/docs/components/radio-group"
        component-name="Radio Group"
      >
        When users must choose exactly one option from a visible set, use a
        Radio Group instead of making several checkboxes mutually exclusive.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Switch for an immediate setting"
        component-href="/docs/components/switch"
        component-name="Switch"
      >
        Use Switch when toggling the control applies a setting immediately.
        Prefer Checkbox when the choice is submitted with the rest of a form.
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
import BasicExample from '@/Docs/Examples/Checkbox/Basic.vue'
import basicExampleSource from '@/Docs/Examples/Checkbox/Basic.vue?raw'
import ControlExample from '@/Docs/Examples/Checkbox/Control.vue'
import controlExampleSource from '@/Docs/Examples/Checkbox/Control.vue?raw'
import DefaultExample from '@/Docs/Examples/Checkbox/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Checkbox/Default.vue?raw'
import IndeterminateExample from '@/Docs/Examples/Checkbox/Indeterminate.vue'
import indeterminateExampleSource from '@/Docs/Examples/Checkbox/Indeterminate.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/checkbox'
const arrayModelCode = [
  '<Checkbox v-model="channels" value="email" id="email" />',
  '<Checkbox v-model="channels" value="sms" id="sms" />',
  '',
  '<script setup lang="ts">',
  "import { Checkbox } from '@/Components/Base/Checkbox'",
  "import { ref } from 'vue'",
  '',
  "const channels = ref<string[]>(['email'])",
  '</' + 'script>',
].join('\n')
</script>
