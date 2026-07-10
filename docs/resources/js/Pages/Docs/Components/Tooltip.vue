<template>
  <DocsLayout>
    <Head title="Tooltip" />
    <DocsPage
      title="Tooltip"
      description="Displays contextual information when an element receives focus or is hovered."
    >
      <div class="space-y-10">
        <ComponentPreview :source="tooltipSource">
          <TooltipExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add Tooltip from the component registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="usageSource" language="vue" filename="TooltipExample.vue" />
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
import TooltipExample from '@/Docs/Examples/Tooltip/TooltipExample.vue'
import tooltipSource from '@/Docs/Examples/Tooltip/TooltipExample.vue?raw'

const usageSource = tooltipSource.replaceAll('@/Components/Base/', '@/Components/')
</script>
