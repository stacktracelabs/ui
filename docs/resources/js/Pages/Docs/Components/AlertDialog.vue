<template>
  <DocsLayout>
    <Head title="Alert Dialog" />
    <DocsPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Alert Dialog component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <p>
        Use an alert dialog for decisions that should block the current task,
        such as confirming a destructive action.
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
import DefaultExample from '@/Docs/Examples/AlertDialog/Default.vue'
import defaultExampleSource from '@/Docs/Examples/AlertDialog/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/alert-dialog'
</script>
