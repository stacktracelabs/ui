<template>
  <DocsLayout>
    <Head title="Radio Group" />
    <DocsPage
      title="Radio Group"
      description="Shows a set of mutually exclusive choices where one value can be selected."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Radio Group from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Radio Group when users should compare a small set of choices and
        select one. Give every <code>RadioGroupItem</code> a unique value and a
        visible Label associated through matching <code>for</code> and
        <code>id</code> values.
      </p>
      <ComponentPreview title="Controlled radio group" :source="radioGroupSource">
        <RadioGroupExample />
      </ComponentPreview>

      <h2 id="controlled-selection">Controlled selection</h2>
      <p>
        Bind <code>v-model</code> when other interface state needs the selected
        value. Use <code>default-value</code> only for an initial uncontrolled
        choice. Add <code>name</code> when the group participates in native form
        submission and <code>required</code> when one choice must be made.
      </p>
      <p>
        Do not preselect an option when a deliberate, unbiased choice is
        required. When a safe or common default exists, selecting it can reduce
        effort as long as the user can clearly change it.
      </p>

      <h2 id="orientation-and-keyboard">Orientation and keyboard behavior</h2>
      <p>
        Set <code>orientation="vertical"</code> for stacked options and
        <code>horizontal</code> only when labels remain short and the available
        width is stable. Reka manages focus and arrow-key navigation between
        items. The <code>loop</code> prop controls whether navigation wraps at
        the ends; avoid adding separate tab stops inside option labels.
      </p>

      <h2 id="states-and-validation">States and validation</h2>
      <p>
        Disable the root when no choice can be changed, or disable individual
        unavailable items while leaving the rest usable. Put
        <code>aria-invalid</code> on the relevant item or group behavior as
        appropriate, render an error message nearby, and retain the visible
        group question.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Wrap a related set in <code>FieldSet</code> with
        <code>FieldLegend</code> so the question is announced with the options.
        Keep each option label clickable and avoid relying on visual position,
        color, or icons to distinguish choices.
      </p>

      <h2 id="choosing-a-control">Choosing a control</h2>
      <DocsComponentRecommendation
        title="Use Checkbox for independent choices"
        component-href="/docs/components/checkbox"
        component-name="Checkbox"
      >
        If users may choose several options—or turn one independent option on
        and off—use Checkbox rather than Radio Group.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Select when space is constrained"
        component-href="/docs/components/select"
        component-name="Select"
      >
        For a longer list or a compact layout where comparing every option is
        less important, place the choices in Select.
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
import RadioGroupExample from '@/Docs/Examples/RadioGroup/RadioGroupExample.vue'
import radioGroupSource from '@/Docs/Examples/RadioGroup/RadioGroupExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/radio-group'
</script>
