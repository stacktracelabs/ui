<template>
  <DocsLayout>
    <Head title="Date Time Input" />
    <DocsPage
      title="Date Time Input"
      description="Edits a date and optional time as keyboard-friendly segments."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Date Time Input from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Date Time Input is a StackTrace wrapper around Reka Date Field. It
        renders editable segments without a calendar popover. Bind
        <code>v-model</code> to an <code>@internationalized/date</code>
        <code>DateValue</code>, choosing the value class according to the
        domain meaning.
      </p>

      <h3 id="date-only">Date only</h3>
      <p>
        Use <code>CalendarDate</code> for a day that has no time or time zone,
        such as a birthday or due date. With a date-only value, day is the
        natural granularity.
      </p>
      <ComponentPreview title="Date only" :source="dateOnlySource">
        <DateOnlyExample />
      </ComponentPreview>

      <h3 id="date-with-time">Date with time</h3>
      <p>
        Use <code>CalendarDateTime</code> for a wall-clock date and time whose
        zone is handled elsewhere. Set <code>granularity</code> to
        <code>hour</code>, <code>minute</code>, or <code>second</code> according
        to the precision users can meaningfully provide.
      </p>
      <ComponentPreview title="Date with time" :source="dateWithTimeSource">
        <DateWithTimeExample />
      </ComponentPreview>

      <h2 id="zoned-values">Zoned values and display options</h2>
      <p>
        Use a <code>ZonedDateTime</code> when the zone is part of the value.
        Reka can display its time-zone segment; set <code>hide-time-zone</code>
        only when the zone remains unambiguous elsewhere. The fallthrough API
        also supports <code>locale</code>, <code>hour-cycle</code>,
        <code>step</code>, and <code>step-snapping</code>. Locale changes the
        segment presentation, not the meaning of the stored value.
      </p>

      <h2 id="constraints-and-states">Constraints and states</h2>
      <p>
        Pass <code>min-value</code>, <code>max-value</code>, or
        <code>is-date-unavailable</code> to constrain entry. Use
        <code>disabled</code> when the field cannot be interacted with and
        <code>readonly</code> when its value should remain focusable but cannot
        be edited. Keep every bound value and constraint in a compatible
        calendar and time representation.
      </p>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        Reka gives each segment spinbutton-like editing, segment navigation,
        and localized literals. Associate the root <code>id</code> with a
        visible label, and do not override arrow keys or character entry.
        Explain granularity in the label or description when seconds or a time
        zone are required. Use <code>aria-invalid</code> and an associated error
        message only after validation has run.
      </p>

      <h2 id="choosing-a-date-control">Choosing a date control</h2>
      <DocsComponentRecommendation
        title="Use Date Input for typing plus a calendar"
        component-href="/docs/components/date-input"
        component-name="Date Input"
      >
        For date-only ISO string state that also needs visual calendar
        selection, use Date Input.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Date Picker for simple selection"
        component-href="/docs/components/date-picker"
        component-name="Date Picker"
      >
        If users only need to choose a date from a popover, Date Picker avoids
        the additional segment-editing interaction.
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
import DateOnlyExample from '@/Docs/Examples/DateTimeInput/DateOnlyExample.vue'
import dateOnlySource from '@/Docs/Examples/DateTimeInput/DateOnlyExample.vue?raw'
import DateWithTimeExample from '@/Docs/Examples/DateTimeInput/DateWithTimeExample.vue'
import dateWithTimeSource from '@/Docs/Examples/DateTimeInput/DateWithTimeExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/date-time-input'
</script>
