<template>
  <DocsLayout>
    <Head title="Input" />
    <DocsPage
      title="Input"
      description="A styled native input for short text and browser-supported input types."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Input component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Input for a short, single-line value. Set a meaningful native
        <code>type</code>, <code>name</code>, and <code>autocomplete</code> where
        applicable so browsers can provide the correct keyboard, validation,
        and autofill behavior. A placeholder is an example, not a replacement
        for a visible label.
      </p>
      <ComponentPreview title="Email input" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="controlled-values">Controlled and initial values</h2>
      <p>
        Bind <code>v-model</code> when other interface state depends on the
        current value. Use <code>default-value</code> for an initial value that
        can remain uncontrolled. The model supports strings and numbers, but
        native attributes such as <code>type="number"</code> still determine
        the browser interaction; normalize domain values at the boundary where
        your application needs stricter types.
      </p>

      <h2 id="types-and-states">Types and states</h2>
      <p>
        Input forwards native attributes, so it supports types such as
        <code>email</code>, <code>password</code>, <code>search</code>, and
        <code>file</code>. Disable only values that cannot currently be edited.
        Read-only content should remain focusable with <code>readonly</code>.
        For invalid fields, set <code>aria-invalid</code> on Input and render a
        nearby explanation.
      </p>
      <ComponentPreview title="Native types and states" :source="statesSource">
        <StatesExample />
      </ComponentPreview>

      <h2 id="debounced-input">Debounced input</h2>
      <p>
        <code>DebouncedInput</code> delays <code>update:modelValue</code> while
        the user is typing. Use its <code>debounce</code> prop for search,
        filtering, or other non-critical work triggered by keystrokes, and
        <code>max-wait</code> to guarantee an eventual update during continuous
        typing. Clearing the field emits immediately. Do not debounce the
        local value of ordinary form fields or validation that users need as
        they type.
      </p>
      <ComponentPreview title="Debounced search" :source="debouncedSource">
        <DebouncedExample />
      </ComponentPreview>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Associate a visible label through matching <code>for</code> and
        <code>id</code> values. Keep instructions persistent when users need
        them to complete the field. Connect descriptions and errors with
        <code>aria-describedby</code>, and use <code>aria-invalid</code> only
        after the value has actually been evaluated.
      </p>

      <h2 id="choosing-an-input">Choosing an input</h2>
      <DocsComponentRecommendation
        title="Use Textarea for multiline content"
        component-href="/docs/components/textarea"
        component-name="Textarea"
      >
        Use Textarea for messages, notes, descriptions, and other values where
        line breaks are meaningful. Input remains the right choice for short
        single-line values.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Input Group for prefixes, icons, or inline actions"
        component-href="/docs/components/input-group"
        component-name="Input Group"
      >
        When supporting content belongs inside the input boundary, use the
        provided Input Group composition instead of absolutely positioning it
        over Input.
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
import DebouncedExample from '@/Docs/Examples/Input/Debounced.vue'
import debouncedSource from '@/Docs/Examples/Input/Debounced.vue?raw'
import DefaultExample from '@/Docs/Examples/Input/Default.vue'
import exampleSource from '@/Docs/Examples/Input/Default.vue?raw'
import StatesExample from '@/Docs/Examples/Input/States.vue'
import statesSource from '@/Docs/Examples/Input/States.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/input'
</script>
