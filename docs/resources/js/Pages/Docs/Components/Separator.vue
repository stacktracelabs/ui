<template>
  <DocsLayout>
    <Head title="Separator" />
    <DocsPage title="Separator" description="Visually or semantically separates content.">
      <div class="space-y-10">
        <ComponentPreview :source="separatorSource">
          <SeparatorExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add Separator from the component registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="usageSource" language="vue" filename="SeparatorExample.vue" />
        </section>
      </div>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import SeparatorExample from '@/Docs/Examples/Separator/SeparatorExample.vue'
import separatorSource from '@/Docs/Examples/Separator/SeparatorExample.vue?raw'

const usageSource = separatorSource.replaceAll('@/Components/Base/', '@/Components/')
</script>
