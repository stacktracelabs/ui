<template>
  <DocsLayout>
    <Head title="Collapsible" />
    <DocsPage
      title="Collapsible"
      description="An interactive component that expands and collapses a panel."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Collapsible component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <p>
        Bind <code>v-model:open</code> when the parent needs to observe or
        control the panel state.
      </p>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Collapsible/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Collapsible/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/collapsible'
</script>
