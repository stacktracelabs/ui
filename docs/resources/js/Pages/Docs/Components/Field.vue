<template>
  <DocsLayout>
    <Head title="Field" />
    <DocsPage
      title="Field"
      description="Combines labels, controls, descriptions, and errors into consistent form fields."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Field component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Field is the lower-level composition API. Prefer the baked
        <code>Form*</code> controls for ordinary application forms, and use
        <code>Field</code> when their structure is not flexible enough. It acts
        as the layout and state boundary for one custom-composed control. Use
        <code>FieldGroup</code> to space related fields and a semantic
        <code>FieldSet</code> with <code>FieldLegend</code> when several controls
        answer one question.
      </p>
      <ComponentPreview title="Profile fields" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="anatomy">Anatomy</h2>
      <p>
        Pair <code>FieldLabel</code> with the control's id. Put persistent help
        in <code>FieldDescription</code> and validation feedback in
        <code>FieldError</code>. <code>FieldContent</code> keeps a title,
        description, and error aligned when a checkbox, radio, or switch sits
        beside them. Use <code>FieldTitle</code> only for non-label text inside
        that content; it does not replace an associated label.
      </p>
      <CodeBlock :code="anatomyCode" language="vue" />

      <h2 id="orientation">Orientation</h2>
      <p>
        The default <code>vertical</code> orientation is the safest choice for
        forms and narrow containers. Use <code>horizontal</code> for compact
        controls whose label remains readable beside the control. The
        <code>responsive</code> orientation switches at the field group's
        container breakpoint, so keep it inside <code>FieldGroup</code> rather
        than relying on the page width.
      </p>

      <h2 id="validation">Validation and errors</h2>
      <p>
        Put <code>data-invalid</code> on <code>Field</code> to style the whole
        composition, and <code>aria-invalid</code> on the actual input, select,
        or textarea so assistive technology receives the state. Render the
        message with <code>FieldError</code> next to the affected control.
      </p>
      <p>
        Pass one or more strings or <code>{ message }</code> objects to the
        <code>errors</code> prop when errors are already in an array.
        <code>FieldError</code> removes duplicate messages and renders multiple
        messages as a list. Its default slot takes precedence when custom
        markup is required.
      </p>
      <CodeBlock :code="validationCode" language="vue" />

      <h2 id="grouping">Grouping choices</h2>
      <p>
        Use <code>FieldSet</code> and <code>FieldLegend</code> for a checkbox or
        radio group so the question is announced with every choice. A
        <code>FieldSeparator</code> is only a visual divider; it does not create
        semantic grouping. Keep separators sparse and keep related fields in
        the same fieldset.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Field provides structure and styling but does not infer every ARIA
        relationship. Keep ids unique, preserve visible labels, and connect
        help or error text with <code>aria-describedby</code> when the control
        primitive does not do that automatically. Do not communicate required,
        disabled, or invalid state by color alone.
      </p>

      <h2 id="recommendations">Recommendations</h2>
      <DocsComponentRecommendation
        title="Prefer Form for standard application fields"
        component-href="/docs/components/form"
        component-name="Form"
      >
        FormControl bakes the common label, help, error, and control structure
        into one concise API. Start there for most forms, then move to Field
        only when the control requires custom semantics or layout.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Input Group for content inside the control boundary"
        component-href="/docs/components/input-group"
        component-name="Input Group"
      >
        Field owns the label, help, and error around a control. Use Input Group
        when an icon, prefix, suffix, or compact action belongs inside the
        input's visual border, then place that whole group inside Field.
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
import DefaultExample from '@/Docs/Examples/Field/Default.vue'
import exampleSource from '@/Docs/Examples/Field/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/field'
const anatomyCode = [
  '<Field>',
  '  <FieldLabel for="email">Email</FieldLabel>',
  '  <Input id="email" type="email" />',
  '  <FieldDescription>Used for account notices.</FieldDescription>',
  '</Field>',
].join('\n')
const validationCode = [
  '<Field data-invalid>',
  '  <FieldLabel for="email">Email</FieldLabel>',
  '  <Input id="email" type="email" aria-invalid />',
  '  <FieldError>Enter a valid email address.</FieldError>',
  '</Field>',
].join('\n')
</script>
