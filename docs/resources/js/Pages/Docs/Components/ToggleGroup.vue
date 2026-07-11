<template>
  <DocsLayout>
    <Head title="Toggle Group" />
    <DocsPage
      title="Toggle Group"
      description="Coordinates related toggles as a single- or multiple-selection control."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Toggle Group from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose <code>ToggleGroupItem</code> components with unique
        <code>value</code> props inside <code>ToggleGroup</code>. Name the group
        with <code>aria-label</code> or <code>aria-labelledby</code>, and give
        every icon-only item its own accessible label.
      </p>
      <ComponentPreview title="Toggle group" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="selection-types">Single and multiple selection</h2>
      <h3 id="single">Single</h3>
      <p>
        Set <code>type="single"</code> and bind one value when the options are
        mutually exclusive, such as text alignment. A toggle group may allow
        the active item to be turned off; when one answer must always remain
        selected, use Radio Group instead.
      </p>

      <h3 id="multiple">Multiple</h3>
      <p>
        Set <code>type="multiple"</code> and bind an array when options may be
        combined, such as bold and italic formatting. Do not use multiple mode
        for choices that conflict with each other.
      </p>
      <CodeBlock :code="multipleCode" language="vue" />

      <h2 id="controlled-values">Controlled values</h2>
      <p>
        Use <code>v-model</code> when the selection affects other interface
        state. A single group binds one item value; a multiple group binds an
        array. Keep item values stable and do not reuse a display label as an
        identifier when that label may be translated or renamed.
      </p>
      <CodeBlock :code="modelCode" language="ts" />

      <h2 id="variants-and-sizes">Variants, sizes, and disabled state</h2>
      <p>
        Set <code>variant</code> and <code>size</code> on the group to apply one
        consistent context to its items. Supported variants are default and
        outline; sizes are <code>sm</code>, <code>default</code>, and
        <code>lg</code>. Disable the group when every option is unavailable, or
        one item when only that choice is unavailable.
      </p>

      <h2 id="keyboard-and-orientation">Keyboard and orientation</h2>
      <p>
        Roving focus is enabled by default, with arrow keys moving among items
        and looping at the ends. Set <code>orientation</code> to match the
        visual layout so horizontal groups use left and right arrows and
        vertical groups use up and down arrows. Keep normal Tab order focused
        on the group rather than requiring a tab stop for every item.
      </p>

      <h2 id="choosing-a-control">Choosing a selection control</h2>
      <p>
        Toggle Group performs actions and exposes pressed state. It is not a
        passive status display, segmented navigation, or a substitute for a
        form field with long answer labels.
      </p>
      <DocsComponentRecommendation
        title="Use Radio Group for a required form choice"
        component-href="/docs/components/radio-group"
        component-name="Radio Group"
      >
        Radio Group is clearer when users must choose exactly one submitted
        answer and each option benefits from a visible label or description.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Tabs for switching views"
        component-href="/docs/components/tabs"
        component-name="Tabs"
      >
        Tabs provide tab and panel semantics for switching visible sections.
        Use Toggle Group for modes and settings that remain applied to the
        current content.
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
import DefaultExample from '@/Docs/Examples/ToggleGroup/Default.vue'
import defaultExampleSource from '@/Docs/Examples/ToggleGroup/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/toggle-group'
const multipleCode = [
  '<ToggleGroup v-model="formatting" type="multiple" aria-label="Text formatting">',
  '  <ToggleGroupItem value="bold" aria-label="Toggle bold">',
  '    <BoldIcon />',
  '  </ToggleGroupItem>',
  '  <ToggleGroupItem value="italic" aria-label="Toggle italic">',
  '    <ItalicIcon />',
  '  </ToggleGroupItem>',
  '</ToggleGroup>',
].join('\n')
const modelCode = [
  "const alignment = ref('left') // type=\"single\"",
  "const formatting = ref<string[]>(['bold']) // type=\"multiple\"",
].join('\n')
</script>
