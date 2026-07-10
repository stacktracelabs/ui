<template>
  <DocsLayout>
    <Head title="Select" />
    <DocsPage
      title="Select"
      description="Displays a list of options for the user to choose from, triggered by a button."
    >
      <div class="space-y-10">
        <ComponentPreview :source="selectSource">
          <SelectExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add Select from the component registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="usageSource" language="vue" filename="SelectExample.vue" />
        </section>

        <section class="space-y-6">
          <h2 id="examples">
            Examples
          </h2>

          <div class="space-y-4">
            <h3 id="options-array">
              Options array
            </h3>
            <p>Render Select items from an array when options come from application data.</p>
            <ComponentPreview :source="selectOptionsSource">
              <SelectOptionsExample />
            </ComponentPreview>
          </div>
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
import SelectExample from '@/Docs/Examples/Select/SelectExample.vue'
import selectSource from '@/Docs/Examples/Select/SelectExample.vue?raw'
import SelectOptionsExample from '@/Docs/Examples/Select/SelectOptionsExample.vue'
import selectOptionsSource from '@/Docs/Examples/Select/SelectOptionsExample.vue?raw'

const usageSource = selectSource.replaceAll('@/Components/Base/', '@/Components/')
</script>
