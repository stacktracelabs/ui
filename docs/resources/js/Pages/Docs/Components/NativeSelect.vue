<template>
  <DocsLayout>
    <Head title="Native Select" />
    <DocsPage
      title="Native Select"
      description="A styled native select that preserves browser and platform selection behavior."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Native Select from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Native Select for a straightforward single choice when native
        mobile pickers, keyboard behavior, autofill, and ordinary form
        submission are valuable. Render <code>NativeSelectOption</code> and
        optional <code>NativeSelectOptGroup</code> children directly inside it.
      </p>
      <ComponentPreview title="Grouped options" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="controlled-values">Controlled values</h2>
      <p>
        Bind <code>v-model</code> when the chosen value affects application
        state. Without a bound model, Native Select keeps its own value and can
        submit it by <code>name</code> with a native form. The local model
        accepts a scalar or array, but use a scalar for the normal single-select
        case and add the native <code>multiple</code> attribute only when the
        browser's multi-select interaction is genuinely appropriate.
      </p>

      <h2 id="options-and-groups">Options and groups</h2>
      <p>
        Give each option a stable value and use an optgroup label to name a
        meaningful category. A placeholder option usually uses an empty value;
        mark it disabled when users must not return to the empty state. Disable
        individual unavailable options rather than the whole select when other
        valid choices remain.
      </p>

      <h2 id="validation">Validation</h2>
      <p>
        Native Select forwards attributes to the underlying
        <code>select</code>. Use <code>required</code> for native constraints,
        <code>aria-invalid</code> after validation fails, and a nearby message
        that explains how to recover. The wrapper detects the disabled state,
        while the select itself owns focus and invalid styling.
      </p>
      <ComponentPreview title="Controlled invalid state" :source="validationSource">
        <ValidationExample />
      </ComponentPreview>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Preserve a visible label linked to the select id. Native options and
        optgroups already expose platform semantics, so avoid placing arbitrary
        interactive content inside them. The decorative chevron is hidden from
        assistive technology.
      </p>

      <h2 id="choosing-a-picker">Choosing a picker</h2>
      <DocsComponentRecommendation
        title="Use Select for a custom popup"
        component-href="/docs/components/select"
        component-name="Select"
      >
        Use Select when the interface needs consistent custom popup styling,
        grouped separators, or richer option presentation and the list remains
        easy to scan.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Combobox for a searchable list"
        component-href="/docs/components/combobox"
        component-name="Combobox"
      >
        When the option set is long or users benefit from typing to filter it,
        use Combobox instead of forcing them to scan a native picker.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Radio Group for a small visible set"
        component-href="/docs/components/radio-group"
        component-name="Radio Group"
      >
        If there are only a few important choices and comparison matters, show
        them all with Radio Group rather than hiding them in a menu.
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
import DefaultExample from '@/Docs/Examples/NativeSelect/Default.vue'
import exampleSource from '@/Docs/Examples/NativeSelect/Default.vue?raw'
import ValidationExample from '@/Docs/Examples/NativeSelect/Validation.vue'
import validationSource from '@/Docs/Examples/NativeSelect/Validation.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/native-select'
</script>
