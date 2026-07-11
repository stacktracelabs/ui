<template>
  <DocsLayout>
    <Head title="Number Field" />
    <DocsPage
      title="Number Field"
      description="Edits a number with localized formatting and increment and decrement controls."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Number Field from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Number Field when users may type a number or adjust it in known
        increments. Bind <code>v-model</code> to a number and place the input
        plus optional stepper buttons inside <code>NumberFieldContent</code>.
      </p>
      <ComponentPreview title="Quantity" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="bounds-and-steps">Bounds and steps</h2>
      <p>
        Set <code>min</code>, <code>max</code>, and <code>step</code> on the root.
        Increment, decrement, typed input, and keyboard changes are clamped to
        the bounds. Step snapping is enabled by default; set
        <code>step-snapping="false"</code> only when off-grid values are valid.
        The model remains a number regardless of its displayed formatting.
      </p>

      <h2 id="formatting">Decimal, percentage, and currency formatting</h2>
      <p>
        Pass <code>locale</code> and standard
        <code>Intl.NumberFormatOptions</code> through
        <code>format-options</code>. Formatting also determines which typed
        characters can be parsed. A percent formatter normally stores the
        fractional numeric value, while currency formatting stores only the
        amount; currency codes and units belong in separate domain state when
        they can vary.
      </p>
      <CodeBlock :code="formattingCode" language="vue" />

      <h2 id="states-and-wheel-input">States and wheel input</h2>
      <p>
        Use <code>disabled</code> when the field cannot be changed and
        <code>readonly</code> when its value should remain focusable. Mouse-wheel
        stepping applies only while the input is focused; set
        <code>disable-wheel-change</code> where scrolling the page could cause
        costly accidental changes. The stepper buttons disable automatically
        when another step cannot move within the configured bounds.
      </p>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        Give the root an <code>id</code> and associate it with a visible label.
        The input exposes spinbutton semantics. Arrow Up and Arrow Down move by
        one step, Page Up and Page Down by ten steps, and Home and End move to
        configured minimum and maximum values. Keep a textual unit in the label
        or description when formatting alone may be ambiguous.
      </p>

      <h2 id="forms-and-validation">Forms and validation</h2>
      <p>
        Set <code>name</code> and <code>required</code> on the root for form
        participation. Validate the numeric model rather than the localized
        display text. Put <code>aria-invalid</code> on
        <code>NumberFieldInput</code> and render a nearby error for domain rules
        that go beyond minimum, maximum, and step. Avoid silently coercing an
        empty required field to zero.
      </p>

      <h2 id="choosing-an-input">Choosing an input</h2>
      <DocsComponentRecommendation
        title="Use Slider for approximate adjustment"
        component-href="/docs/components/slider"
        component-name="Slider"
      >
        Use Slider when relative position and quick adjustment matter more than
        typing or reading an exact value. Keep Number Field for precise entry.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Input for numeric identifiers"
        component-href="/docs/components/input"
        component-name="Input"
      >
        Phone numbers, postal codes, card fragments, and other digit strings
        are identifiers rather than quantities; keep them as text in Input.
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
import DefaultExample from '@/Docs/Examples/NumberField/Default.vue'
import exampleSource from '@/Docs/Examples/NumberField/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/number-field'
const formattingCode = [
  '<NumberField',
  '  v-model="price"',
  '  locale="en-US"',
  '  :min="0"',
  '  :step="0.01"',
  "  :format-options=\"{ style: 'currency', currency: 'USD' }\"",
  '>',
  '  <!-- NumberFieldContent and controls -->',
  '</NumberField>',
].join('\n')
</script>
