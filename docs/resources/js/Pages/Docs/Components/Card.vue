<template>
  <DocsLayout>
    <Head title="Card" />
    <DocsPage
      title="Card"
      description="Displays content in a container with optional header, body, action, and footer regions."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Card component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="examples">Examples</h2>
      <h3 id="notifications">Notifications</h3>
      <ComponentPreview
        title="Notifications"
        :source="notificationsExampleSource"
      >
        <NotificationsExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Card/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Card/Default.vue?raw'
import NotificationsExample from '@/Docs/Examples/Card/Notifications.vue'
import notificationsExampleSource from '@/Docs/Examples/Card/Notifications.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/card'
</script>
