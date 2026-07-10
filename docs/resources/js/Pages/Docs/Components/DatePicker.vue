<template>
  <DocsLayout>
    <Head title="Date Picker" />

    <DocsPage title="Date Picker" description="Lets the user select a date from a calendar.">
      <div class="space-y-10">
        <ComponentPreview :source="datePickerSource">
          <DatePickerExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>date-picker</code> item from the registry by following the
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
            Bind <code>v-model</code> to an ISO date string and optionally customize the empty
            state with the <code>placeholder</code> prop.
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
import DatePickerExample from '@/Docs/Examples/DatePicker/DatePickerExample.vue'
import datePickerSource from '@/Docs/Examples/DatePicker/DatePickerExample.vue?raw'
</script>
