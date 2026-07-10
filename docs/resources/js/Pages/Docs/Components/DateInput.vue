<template>
  <DocsLayout>
    <Head title="Date Input" />

    <DocsPage
      title="Date Input"
      description="Lets the user type a date or select one from a calendar."
    >
      <div class="space-y-10">
        <ComponentPreview :source="dateInputSource">
          <DateInputExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>date-input</code> item from the registry by following the
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
            The input combines editable date segments with a calendar popover.
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
import DateInputExample from '@/Docs/Examples/DateInput/DateInputExample.vue'
import dateInputSource from '@/Docs/Examples/DateInput/DateInputExample.vue?raw'
</script>
