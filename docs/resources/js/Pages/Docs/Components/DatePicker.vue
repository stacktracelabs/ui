<template>
  <DocsLayout>
    <Head title="Date Picker" />
    <DocsPage
      title="Date Picker"
      description="Opens a calendar from a compact trigger and returns an ISO date string."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Date Picker from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use the packaged Date Picker when users should select one day from a
        popover and form state prefers a date-only string. Bind
        <code>v-model</code> to <code>string | undefined</code> and set
        <code>placeholder</code> for the empty trigger label.
      </p>
      <ComponentPreview title="Date picker" :source="datePickerSource">
        <DatePickerExample />
      </ComponentPreview>

      <h2 id="value-type">Value type</h2>
      <p>
        The model is an ISO calendar date such as <code>2026-07-11</code>.
        Internally it is parsed with <code>parseDate</code>; localized strings,
        JavaScript <code>Date</code> objects, and date-time strings are not
        accepted. An empty model becomes <code>undefined</code>. This makes the
        value convenient for date-only form fields without silently attaching
        a time zone.
      </p>

      <h2 id="formatting-and-time-zone">Formatting and time zone</h2>
      <p>
        The local component displays the selected value with a fixed
        <code>en-US</code> long-date formatter. It uses the browser's local
        time zone only while converting the date value for display; the ISO
        model remains a zone-free calendar day. The wrapper does not expose a
        locale or time-zone prop. Compose Calendar, Popover, and Button
        directly when the product must control those policies.
      </p>

      <h2 id="portal-and-layout">Portal and layout</h2>
      <p>
        Pass <code>to</code> as a selector or element to change where Popover
        content is portalled. Width classes apply to the trigger through the
        component's <code>class</code> attribute. The packaged calendar uses a
        single month and focuses the calendar when it opens.
      </p>

      <h2 id="accessibility-and-validation">Accessibility and validation</h2>
      <p>
        Pair the trigger with a visible field label and keep the empty label
        descriptive. The packaged wrapper does not expose an id or accessible
        name prop for its internal trigger; compose Popover, Button, and
        Calendar directly when explicit label association is required. Reka
        provides popover focus handling and calendar keyboard navigation;
        avoid closing the popover on every internal key event. Validate the ISO
        model in surrounding form state and render an adjacent error. For
        selectable bounds or unavailable dates, use a custom Calendar
        composition because this wrapper does not expose those rules.
      </p>

      <h2 id="choosing-a-date-control">Choosing a date control</h2>
      <DocsComponentRecommendation
        title="Use Date Input when typing matters"
        component-href="/docs/components/date-input"
        component-name="Date Input"
      >
        Date Input keeps the ISO string model but adds editable date segments
        for keyboard-heavy workflows.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Calendar for policy and localization"
        component-href="/docs/components/calendar"
        component-name="Calendar"
      >
        Compose Calendar directly when you need locale control, multiple
        selection, disabled dates, bounds, or a permanently visible grid.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Date Range Picker for two endpoints"
        component-href="/docs/components/date-range-picker"
        component-name="Date Range Picker"
      >
        Use Date Range Picker when the value is an inclusive start and end
        date rather than one day.
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
import DatePickerExample from '@/Docs/Examples/DatePicker/DatePickerExample.vue'
import datePickerSource from '@/Docs/Examples/DatePicker/DatePickerExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/date-picker'
</script>
