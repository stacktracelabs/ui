<template>
  <DocsLayout>
    <Head title="Textarea" />
    <DocsPage
      title="Textarea"
      description="A multiline text control for messages, notes, and longer free-form values."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Textarea from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Textarea when line breaks are meaningful or the expected value is
        too long for a single-line Input. Give it a visible label and a
        concrete placeholder only when an example helps users understand the
        expected content.
      </p>
      <ComponentPreview title="Textarea" :source="textareaSource">
        <TextareaExample />
      </ComponentPreview>

      <h2 id="controlled-values">Controlled and initial values</h2>
      <p>
        Bind <code>v-model</code> when other interface state needs the current
        text, such as a preview or character counter. Use
        <code>default-value</code> for initial content that does not need an
        external source of truth. Textarea forwards native attributes including
        <code>name</code>, <code>maxlength</code>, <code>required</code>, and
        <code>autocomplete</code>.
      </p>
      <ComponentPreview title="Controlled value" :source="controlledSource">
        <ControlledExample />
      </ComponentPreview>

      <h2 id="sizing">Sizing</h2>
      <p>
        The component starts with a minimum height and uses content-based field
        sizing. Let it grow for most free-form content, or set a purposeful
        height or row count when the available space is constrained. Avoid a
        one-line textarea; use Input when multiline entry is not intended.
      </p>

      <h2 id="states">States</h2>
      <p>
        Use <code>disabled</code> only when the value is unavailable and should
        not be submitted. Prefer <code>readonly</code> when users should still
        focus, select, or copy the content. Disabled styling alone is not an
        explanation, so keep the reason visible when it is not obvious.
      </p>
      <ComponentPreview title="Disabled" :source="textareaDisabledSource">
        <TextareaDisabledExample />
      </ComponentPreview>

      <h2 id="validation-and-accessibility">Validation and accessibility</h2>
      <p>
        Put <code>aria-invalid</code> on Textarea after validation fails and
        render the error in a nearby <code>FieldError</code>. Use
        <code>aria-describedby</code> for persistent constraints such as a
        required format or character limit. Do not rely on a counter alone to
        explain what content is expected.
      </p>

      <h2 id="choosing-a-control">Choosing a control</h2>
      <DocsComponentRecommendation
        title="Use Input for short single-line values"
        component-href="/docs/components/input"
        component-name="Input"
      >
        Names, email addresses, search terms, and similar short values belong
        in Input unless line breaks are a valid part of the answer.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Input Group for an inline counter or action"
        component-href="/docs/components/input-group"
        component-name="Input Group"
      >
        When a compact counter or action belongs inside the textarea boundary,
        compose Input Group Textarea with a block addon.
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
import ControlledExample from '@/Docs/Examples/Textarea/ControlledExample.vue'
import controlledSource from '@/Docs/Examples/Textarea/ControlledExample.vue?raw'
import TextareaDisabledExample from '@/Docs/Examples/Textarea/TextareaDisabledExample.vue'
import textareaDisabledSource from '@/Docs/Examples/Textarea/TextareaDisabledExample.vue?raw'
import TextareaExample from '@/Docs/Examples/Textarea/TextareaExample.vue'
import textareaSource from '@/Docs/Examples/Textarea/TextareaExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/textarea'
</script>
