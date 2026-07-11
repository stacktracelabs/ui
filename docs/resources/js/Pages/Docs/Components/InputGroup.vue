<template>
  <DocsLayout>
    <Head title="Input Group" />
    <DocsPage
      title="Input Group"
      description="Places icons, text, and compact actions inside an input or textarea boundary."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Input Group component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use <code>InputGroup</code> when a prefix, suffix, icon, counter, or
        compact action is part of the control itself. Use
        <code>InputGroupInput</code> or <code>InputGroupTextarea</code> inside the
        group so the child control shares the group's focus and invalid styles.
      </p>
      <ComponentPreview title="Inline addons" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="addons">Addon alignment</h2>
      <p>
        <code>InputGroupAddon</code> defaults to
        <code>inline-start</code>. Use <code>inline-end</code> for a suffix or
        trailing action. Reserve <code>block-start</code> and
        <code>block-end</code> for content above or below a multiline control.
        Alignment changes visual order, so keep the addon after the control in
        the template for predictable focus navigation.
      </p>
      <p>
        Clicking a non-button inline addon focuses the nested input. Keep
        decorative icons unfocusable and give every icon-only
        <code>InputGroupButton</code> an <code>aria-label</code>.
      </p>

      <h3 id="textarea">Textarea composition</h3>
      <p>
        Pair <code>InputGroupTextarea</code> with a block addon for counters,
        formatting hints, or a tightly related action. Keep longer help and
        validation messages outside the group in a <code>Field</code>.
      </p>
      <ComponentPreview title="Textarea with footer" :source="textareaSource">
        <TextareaExample />
      </ComponentPreview>

      <h2 id="buttons-and-text">Buttons and text</h2>
      <p>
        <code>InputGroupText</code> applies consistent typography to
        non-interactive prefixes and suffixes. <code>InputGroupButton</code>
        defaults to the low-emphasis <code>ghost</code> variant and
        <code>xs</code> size. It also supports <code>sm</code>,
        <code>icon-xs</code>, and <code>icon-sm</code>; reserve icon sizes for
        actions with an accessible name.
      </p>

      <h2 id="controlled-values-and-states">Values and states</h2>
      <p>
        Bind <code>v-model</code> directly to the nested input or textarea, not
        to <code>InputGroup</code>. Put <code>disabled</code>,
        <code>readonly</code>, and <code>aria-invalid</code> on that control as
        well. The group detects focus and invalid state from descendants and
        draws the shared border and ring.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Input Group does not provide a field label. Wrap the complete group in
        <code>Field</code> and associate <code>FieldLabel</code> with the nested
        control id. Do not put essential instructions only in a prefix or
        placeholder, and avoid several adjacent actions when a toolbar or menu
        would be easier to navigate.
      </p>

      <h2 id="recommendations">Recommendations</h2>
      <DocsComponentRecommendation
        title="Use Input for an unadorned value"
        component-href="/docs/components/input"
        component-name="Input"
      >
        If there is no meaningful content inside the control boundary, use a
        regular Input. Input Group should clarify or enable the value, not add
        decoration to every field.
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
import DefaultExample from '@/Docs/Examples/InputGroup/Default.vue'
import exampleSource from '@/Docs/Examples/InputGroup/Default.vue?raw'
import TextareaExample from '@/Docs/Examples/InputGroup/Textarea.vue'
import textareaSource from '@/Docs/Examples/InputGroup/Textarea.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/input-group'
</script>
