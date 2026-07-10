<template>
  <DocsLayout>
    <Head title="Checkbox" />
    <DocsPage
      title="Checkbox"
      description="A control that lets the user toggle between checked and unchecked states."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Checkbox component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="basicExampleSource">
        <BasicExample />
      </ComponentPreview>

      <h2 id="examples">Examples</h2>
      <h3 id="with-label">With label</h3>
      <ComponentPreview
        title="With label"
        :source="defaultExampleSource"
      >
        <DefaultExample />
      </ComponentPreview>

      <h3 id="control">Control</h3>
      <p>
        <code>CheckboxControl</code> provides a generated id and associated
        label around the checkbox.
      </p>
      <ComponentPreview
        title="Control"
        :source="controlExampleSource"
      >
        <ControlExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import BasicExample from '@/Docs/Examples/Checkbox/Basic.vue'
import basicExampleSource from '@/Docs/Examples/Checkbox/Basic.vue?raw'
import ControlExample from '@/Docs/Examples/Checkbox/Control.vue'
import controlExampleSource from '@/Docs/Examples/Checkbox/Control.vue?raw'
import DefaultExample from '@/Docs/Examples/Checkbox/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Checkbox/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/checkbox'
</script>
