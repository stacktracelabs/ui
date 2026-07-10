<template>
  <DocsLayout>
    <Head title="Alert" />
    <DocsPage
      title="Alert"
      description="Displays a callout that draws the user's attention."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Alert component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="examples">Examples</h2>
      <h3 id="positive">Positive</h3>
      <ComponentPreview
        title="Positive"
        :source="positiveExampleSource"
      >
        <PositiveExample />
      </ComponentPreview>

      <h3 id="destructive">Destructive</h3>
      <ComponentPreview
        title="Destructive"
        :source="destructiveExampleSource"
      >
        <DestructiveExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Alert/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Alert/Default.vue?raw'
import DestructiveExample from '@/Docs/Examples/Alert/Destructive.vue'
import destructiveExampleSource from '@/Docs/Examples/Alert/Destructive.vue?raw'
import PositiveExample from '@/Docs/Examples/Alert/Positive.vue'
import positiveExampleSource from '@/Docs/Examples/Alert/Positive.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/alert'
</script>
