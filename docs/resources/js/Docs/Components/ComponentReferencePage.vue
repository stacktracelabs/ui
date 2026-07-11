<template>
  <DocsLayout>
    <Head :title="title" />
    <DocsPage :title="title" :description="description">
      <h2 id="installation">Installation</h2>
      <p>Add the component from the configured StackTrace registry.</p>
      <CodeBlock :code="`npx shadcn-vue@latest add @stacktrace/${registryName}`" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="source">
        <component :is="example" />
      </ComponentPreview>

      <h2 id="guidance">Guidance</h2>
      <p>{{ guidance }}</p>

      <template v-if="features.length">
        <h2 id="features">Features</h2>
        <ul>
          <li v-for="feature in features" :key="feature">{{ feature }}</li>
        </ul>
      </template>

      <h2 id="api-reference">API Reference</h2>
      <p>{{ api }}</p>

      <p v-if="sourceUrl">
        This page is adapted to StackTrace UI from the
        <a :href="sourceUrl" target="_blank" rel="noreferrer">upstream shadcn-vue documentation</a>.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

withDefaults(defineProps<{
  title: string
  description: string
  registryName: string
  example: Component
  source: string
  guidance: string
  features?: string[]
  api: string
  sourceUrl?: string
}>(), {
  features: () => [],
  sourceUrl: undefined,
})
</script>
