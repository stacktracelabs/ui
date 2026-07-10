<template>
  <DocsLayout>
    <Head title="Range Calendar" />
    <DocsPage
      title="Range Calendar"
      description="A calendar control for selecting a contiguous range of dates."
    >
      <div class="space-y-10">
        <ComponentPreview :source="rangeCalendarSource">
          <RangeCalendarExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add Range Calendar from the component registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="usageSource" language="vue" filename="RangeCalendarExample.vue" />
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
import RangeCalendarExample from '@/Docs/Examples/RangeCalendar/RangeCalendarExample.vue'
import rangeCalendarSource from '@/Docs/Examples/RangeCalendar/RangeCalendarExample.vue?raw'

const usageSource = rangeCalendarSource.replaceAll('@/Components/Base/', '@/Components/')
</script>
