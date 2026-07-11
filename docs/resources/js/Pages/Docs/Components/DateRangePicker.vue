<template>
  <DocsLayout>
    <Head title="Date Range Picker" />
    <DocsPage
      title="Date Range Picker"
      description="Selects an inclusive start and end date from a two-month popover."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Date Range Picker from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Date Range Picker is a StackTrace component for a compact, date-only
        interval. Bind the endpoints separately with
        <code>v-model:from</code> and <code>v-model:until</code>. Both models are
        ISO date strings or <code>undefined</code>.
      </p>
      <ComponentPreview title="Date range picker" :source="dateRangePickerSource">
        <DateRangePickerExample />
      </ComponentPreview>

      <h2 id="range-model">Range model</h2>
      <p>
        The component parses each endpoint with <code>parseDate</code> and
        emits changes independently. A first click can therefore set
        <code>from</code> before <code>until</code> exists. Treat the endpoints as
        an inclusive calendar range, and decide explicitly whether the form
        may submit an incomplete range. Do not pass localized display strings,
        JavaScript <code>Date</code> objects, or date-time values.
      </p>

      <h2 id="display-and-time-zone">Display and time zone</h2>
      <p>
        The trigger shows a range only after both endpoints are present. The
        local wrapper uses a fixed <code>en-US</code> medium-date formatter and
        the browser's local time zone for display conversion. The stored ISO
        endpoints remain zone-free calendar dates. Locale and time-zone
        configuration are not exposed by this wrapper.
      </p>

      <h2 id="layout-and-portal">Layout and portal</h2>
      <p>
        The popover always renders two months. Verify that the layout fits at
        narrow breakpoints. Pass <code>to</code> as a selector or element when
        the content needs a different portal root; width classes on the
        component style the trigger.
      </p>

      <h2 id="validation-and-accessibility">Validation and accessibility</h2>
      <p>
        Use a visible field label that describes the interval, such as “Stay
        dates,” rather than labeling each endpoint separately when the picker
        acts as one control. The packaged wrapper does not expose an id or
        accessible name prop for its internal trigger; compose the lower-level
        parts when explicit label association is required. Validate that both
        values exist, that <code>from</code> is not after <code>until</code>, and
        that the inclusive duration satisfies product rules. Reka supplies
        range-calendar grid navigation and popover focus behavior; do not
        replace it with pointer-only handlers.
      </p>
      <p>
        The packaged wrapper does not expose minimum, maximum, unavailable
        dates, maximum range length, or non-contiguous range settings. Compose
        Range Calendar directly when users must be prevented from choosing
        those invalid ranges.
      </p>

      <h2 id="choosing-a-range-control">Choosing a range control</h2>
      <DocsComponentRecommendation
        title="Use Range Calendar for full control"
        component-href="/docs/components/range-calendar"
        component-name="Range Calendar"
      >
        Use Range Calendar when the grid should remain visible or the product
        needs bounds, unavailable dates, locale control, or range-length rules.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Date Picker for one day"
        component-href="/docs/components/date-picker"
        component-name="Date Picker"
      >
        If the workflow needs only one date, Date Picker avoids the partial
        state and wider two-month overlay.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DateRangePickerExample from '@/Docs/Examples/DateRangePicker/DateRangePickerExample.vue'
import dateRangePickerSource from '@/Docs/Examples/DateRangePicker/DateRangePickerExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/date-range-picker'
</script>
