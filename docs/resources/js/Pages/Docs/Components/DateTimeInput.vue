<template>
  <DocsLayout>
    <Head title="Date Time Input" />

    <DocsPage
      title="Date Time Input"
      description="Lets the user enter a specific date and, optionally, a time."
    >
      <div class="space-y-10">
        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>date-time-input</code> item from the registry by following the
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

        <section aria-labelledby="usage" class="space-y-6">
          <h2 id="usage" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Usage
          </h2>

          <div class="space-y-4">
            <h3 id="date-only" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Date only
            </h3>
            <p class="text-muted-foreground">
              Without a granularity prop, the control displays date segments.
            </p>
            <ComponentPreview title="Date only" :source="dateOnlySource">
              <DateOnlyExample />
            </ComponentPreview>
          </div>

          <div class="space-y-4">
            <h3 id="date-with-time" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Date with time
            </h3>
            <p class="text-muted-foreground">
              Set <code>granularity="second"</code> to include hour, minute, and second segments.
            </p>
            <ComponentPreview title="Date with time" :source="dateWithTimeSource">
              <DateWithTimeExample />
            </ComponentPreview>
          </div>
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
import DateOnlyExample from '@/Docs/Examples/DateTimeInput/DateOnlyExample.vue'
import dateOnlySource from '@/Docs/Examples/DateTimeInput/DateOnlyExample.vue?raw'
import DateWithTimeExample from '@/Docs/Examples/DateTimeInput/DateWithTimeExample.vue'
import dateWithTimeSource from '@/Docs/Examples/DateTimeInput/DateWithTimeExample.vue?raw'
</script>
