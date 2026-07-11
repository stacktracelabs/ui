<template>
  <DocsLayout>
    <Head title="Tags Input" />
    <DocsPage
      title="Tags Input"
      description="Collects multiple short values as keyboard-navigable, removable tags."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Tags Input from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Tags Input for a small set of user-created values such as keywords,
        recipients, or skills. Bind <code>v-model</code> to an array, render one
        <code>TagsInputItem</code> per value, and place
        <code>TagsInputInput</code> after the items.
      </p>
      <ComponentPreview title="Technology tags" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="creating-tags">Creating tags</h2>
      <p>
        Enter and the configured <code>delimiter</code> add the current text.
        Comma is the default delimiter. Enable <code>add-on-paste</code> to
        split pasted text by that delimiter, <code>add-on-tab</code> to commit
        before focus moves, or <code>add-on-blur</code> to commit when the field
        loses focus. Enable these shortcuts only when users will understand
        that unfinished text becomes a value.
      </p>

      <h2 id="duplicates-limits-and-events">Duplicates, limits, and events</h2>
      <p>
        Duplicate tags are rejected by default. Set <code>duplicate</code> only
        when repeated values have a real meaning, and set <code>max</code> to
        cap the number of tags. The root emits <code>add-tag</code>,
        <code>remove-tag</code>, and <code>invalid</code>; use
        <code>invalid</code> to explain a duplicate or limit failure without
        discarding the existing model.
      </p>

      <h2 id="object-values">Object values</h2>
      <p>
        String arrays are simplest for free-form tags. Object values require
        <code>convert-value</code> to turn typed text into the model type and
        <code>display-value</code> to render a readable label. Prefer stable ids
        with a searchable selection component when users choose from a large
        canonical dataset rather than inventing new values.
      </p>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        Give the root an <code>id</code> and pair it with a visible label; that
        id is applied to the internal text input. At an empty input, Backspace
        selects the last tag and a second deletion removes it. Arrow keys,
        Home, and End move through tags. Keep the provided item text and delete
        primitives so selection and removal remain perceivable, and do not
        encode essential meaning by color alone.
      </p>

      <h2 id="forms-and-validation">Forms and validation</h2>
      <p>
        Set <code>name</code> and <code>required</code> on the root for form
        participation. Validate each item and the complete array in surrounding
        form state—for example, allowed character sets, length, and maximum
        count. Use <code>disabled</code> for the entire control or disable only
        an item that must not be removed.
      </p>

      <h2 id="choosing-a-multi-value-control">Choosing a multi-value control</h2>
      <DocsComponentRecommendation
        title="Use Combobox for a searchable option set"
        component-href="/docs/components/combobox"
        component-name="Combobox"
      >
        When values must come from an existing list, use a multiple Combobox
        rather than accepting arbitrary tags.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Input for one short value"
        component-href="/docs/components/input"
        component-name="Input"
      >
        If only one value is accepted, a labeled Input is simpler and avoids
        tag creation and removal behavior.
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
import DefaultExample from '@/Docs/Examples/TagsInput/Default.vue'
import exampleSource from '@/Docs/Examples/TagsInput/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/tags-input'
</script>
