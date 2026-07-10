<template>
  <DocsLayout>
    <Head title="Aspect Ratio" />
    <DocsPage
      title="Aspect Ratio"
      description="Displays content within a chosen aspect ratio."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Aspect Ratio component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
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
import DefaultExample from '@/Docs/Examples/AspectRatio/Default.vue'
import defaultExampleSource from '@/Docs/Examples/AspectRatio/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/aspect-ratio'
</script>
