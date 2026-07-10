<template>
  <DocsLayout>
    <Head title="Avatar" />
    <DocsPage
      title="Avatar"
      description="An image element with a fallback for representing a user."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Avatar component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <p>
        The fallback is shown while the image is loading or when it cannot be
        displayed.
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
import DefaultExample from '@/Docs/Examples/Avatar/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Avatar/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/avatar'
</script>
