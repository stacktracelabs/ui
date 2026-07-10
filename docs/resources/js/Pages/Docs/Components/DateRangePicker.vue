<template>
  <DocsLayout>
    <Head title="Date Range Picker" />

    <DocsPage
      title="Date Range Picker"
      description="Lets the user select a range of dates."
    >
      <div class="space-y-10">
        <ComponentPreview :source="dateRangePickerSource">
          <DateRangePickerExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>date-range-picker</code> item from the registry by following the
            <Link href="/docs/installation" class="font-medium text-foreground underline underline-offset-4">
              installation guide
            </Link>.
          </p>
          <p class="text-muted-foreground">
            The registry item installs
            <a
              href="https://react-spectrum.adobe.com/internationalized/date/index.html"
              target="_blank"
              rel="noreferrer"
              class="font-medium text-foreground underline underline-offset-4"
            >
              @internationalized/date
            </a>, which provides date and time primitives designed to handle localization and
            time-zone concerns.
          </p>
        </section>

        <section aria-labelledby="usage" class="space-y-4">
          <h2 id="usage" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Usage
          </h2>
          <p class="text-muted-foreground">
            Bind the inclusive endpoints separately with <code>v-model:from</code> and
            <code>v-model:until</code>. Both values are ISO date strings.
          </p>
        </section>
      </div>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import DateRangePickerExample from '@/Docs/Examples/DateRangePicker/DateRangePickerExample.vue'
import dateRangePickerSource from '@/Docs/Examples/DateRangePicker/DateRangePickerExample.vue?raw'
</script>
