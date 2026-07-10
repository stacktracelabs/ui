<template>
  <DocsLayout>
    <Head title="Command" />
    <DocsPage
      title="Command"
      description="A fast, composable command menu with built-in filtering."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Command component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="examples">Examples</h2>
      <h3 id="dialog">Dialog</h3>
      <p>
        Use <code>CommandDialog</code> to present the command menu in a modal.
        The example supports both the button and the platform keyboard
        shortcut.
      </p>
      <ComponentPreview
        title="Dialog"
        :source="dialogExampleSource"
      >
        <DialogExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Command/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Command/Default.vue?raw'
import DialogExample from '@/Docs/Examples/Command/Dialog.vue'
import dialogExampleSource from '@/Docs/Examples/Command/Dialog.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/command'
</script>
