<template>
  <DocsLayout>
    <Head title="Combobox" />
    <DocsPage
      title="Combobox"
      description="A searchable listbox that lets users filter and select an option."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Combobox component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <p>
        Compose the trigger, search input, viewport, groups, and items to match
        the interaction your form needs.
      </p>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="advanced-usage">Advanced usage</h2>
      <p>
        For a button-triggered search menu inside a popover or dropdown,
        compose <Link href="/docs/components/command">Command</Link> with the
        relevant overlay component.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Combobox/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Combobox/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/combobox'
</script>
