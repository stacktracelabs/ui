<template>
  <DocsLayout>
    <Head title="Label" />
    <DocsPage
      title="Label"
      description="Renders an accessible label associated with a form control."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Label component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Give every form control a concise visible label. Match Label's
        <code>for</code> prop to a unique control <code>id</code>; this provides
        an accessible name and makes the label text part of the control's hit
        area.
      </p>
      <ComponentPreview title="Checkbox label" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="writing-labels">Writing labels</h2>
      <p>
        Name the value the user should provide, such as “Email address” or
        “Delivery method.” Put examples in supporting text rather than the
        label, and do not append a colon merely for layout. A placeholder
        disappears during entry and is not a substitute for Label.
      </p>

      <h2 id="states">States</h2>
      <p>
        Label responds to a disabled peer control and to disabled state on a
        containing group. Keep the native <code>disabled</code> attribute on
        the control itself; muted label styling alone does not prevent
        interaction or announce the state. Show required and optional status
        consistently across the form, with text when the convention could be
        ambiguous.
      </p>

      <h2 id="composition">Composition</h2>
      <p>
        Label forwards Reka <code>as</code> and <code>as-child</code> props.
        Change the rendered element only when the result preserves label
        semantics and the <code>for</code> association. Read the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before forwarding label behavior through a custom component.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Avoid using only <code>aria-label</code> when visible text can identify
        the field. Do not associate one Label with several inputs. For a set of
        checkboxes or radio buttons, give each option its own label and use a
        semantic legend for the group question.
      </p>

      <h2 id="recommendations">Recommendations</h2>
      <DocsComponentRecommendation
        title="Use Field Label inside a field composition"
        component-href="/docs/components/field"
        component-name="Field"
      >
        Field Label adds the spacing and state hooks expected by Field. Use
        standalone Label for simple associations outside that composition.
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
import DefaultExample from '@/Docs/Examples/Label/Default.vue'
import exampleSource from '@/Docs/Examples/Label/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/label'
</script>
