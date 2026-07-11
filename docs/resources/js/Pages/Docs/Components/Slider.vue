<template>
  <DocsLayout>
    <Head title="Slider" />
    <DocsPage
      title="Slider"
      description="Selects one or more numeric values by moving thumbs along a bounded track."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Slider from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Slider for quick relative adjustment within a known range. Its
        model is always a <code>number[]</code>, including a single-thumb
        slider. The local component renders one thumb for every model entry.
      </p>
      <ComponentPreview title="Volume" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="range-and-steps">Range and steps</h2>
      <p>
        Set <code>min</code>, <code>max</code>, and <code>step</code> to match the
        domain. Defaults are 0, 100, and 1. For multiple thumbs, initialize the
        model with multiple sorted values and use
        <code>min-steps-between-thumbs</code> to enforce separation. The
        separation is measured in step units.
      </p>
      <CodeBlock :code="rangeCode" language="vue" />

      <h2 id="controlled-and-committed-values">Controlled and committed values</h2>
      <p>
        Bind <code>v-model</code> when surrounding UI displays the current value
        and use <code>default-value</code> for uncontrolled initial state. The
        model updates continuously while dragging. Listen to
        <code>value-commit</code> for work that should run only after an
        interaction finishes, such as an expensive request or persisted
        preference.
      </p>

      <h2 id="orientation-and-direction">Orientation and direction</h2>
      <p>
        Horizontal is the default. For <code>orientation="vertical"</code>, give
        the containing layout an intentional height; the local styles provide
        a minimum but the final size still belongs to the page. Use
        <code>inverted</code> only when increasing in the opposite visual
        direction matches the domain, and let <code>dir</code> follow the
        surrounding reading direction.
      </p>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        Slider thumbs expose slider semantics and support arrow keys, Page Up,
        Page Down, Home, and End. Provide a visible label and a textual current
        value, because track position alone is not precise enough for every
        user. Multiple thumbs receive generated minimum/maximum labels; keep
        the range meaning obvious in nearby text.
      </p>

      <h2 id="validation-and-choice">Validation and choosing a control</h2>
      <p>
        Set <code>name</code> when the slider participates in a form and disable
        it only when adjustment is unavailable. Validate the numeric array in
        application state, especially when one thumb depends on another. Avoid
        Slider for values users must enter exactly or compare digit by digit.
      </p>
      <DocsComponentRecommendation
        title="Use Number Field for exact entry"
        component-href="/docs/components/number-field"
        component-name="Number Field"
      >
        Number Field supports typing, localized formatting, and explicit
        increment and decrement buttons for precise values.
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
import DefaultExample from '@/Docs/Examples/Slider/Default.vue'
import exampleSource from '@/Docs/Examples/Slider/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/slider'
const rangeCode = [
  '<Slider',
  '  v-model="priceRange"',
  '  :min="0"',
  '  :max="500"',
  '  :step="10"',
  '  :min-steps-between-thumbs="2"',
  '/>',
  '',
  '<script setup lang="ts">',
  "import { ref } from 'vue'",
  'const priceRange = ref([100, 300])',
  '</' + 'script>',
].join('\n')
</script>
