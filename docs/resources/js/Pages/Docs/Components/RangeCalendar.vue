<template>
  <DocsLayout>
    <Head title="Range Calendar" />
    <DocsPage
      title="Range Calendar"
      description="Lets users choose an inclusive start and end date from a visible calendar grid."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Range Calendar from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Range Calendar when selecting an interval is the primary task and
        the grid should remain visible. Bind <code>v-model</code> to a Reka
        <code>DateRange</code> with <code>start</code> and <code>end</code>
        <code>DateValue</code> properties.
      </p>
      <ComponentPreview title="Range calendar" :source="rangeCalendarSource">
        <RangeCalendarExample />
      </ComponentPreview>

      <h2 id="model-and-visible-month">Model and visible month</h2>
      <p>
        The range may temporarily contain only a start while the user chooses
        an end. Bind <code>v-model:placeholder</code> only when application
        state needs to control the visible month; selection and navigation are
        separate state. <code>default-value</code> and
        <code>default-placeholder</code> initialize uncontrolled versions.
      </p>
      <p>
        These values come from <code>@internationalized/date</code>, not native
        JavaScript dates. A <code>CalendarDate</code> is a zone-free calendar
        day. Keep time-zone conversion outside the selection control and apply
        it only when the domain needs an instant.
      </p>

      <h2 id="range-rules">Range rules and unavailable dates</h2>
      <p>
        Use <code>min-value</code> and <code>max-value</code> for outer bounds,
        <code>maximum-days</code> for range length, and
        <code>is-date-disabled</code> for dates that cannot be selected.
        <code>is-date-unavailable</code> marks unavailable dates. By default a
        range cannot cross them; set <code>allow-non-contiguous-ranges</code>
        only when that discontinuous meaning is valid and clearly explained.
      </p>
      <p>
        Use <code>fixed-date="start"</code> or <code>fixed-date="end"</code>
        when one endpoint must remain anchored. <code>prevent-deselect</code>
        keeps an existing selection from being cleared without a replacement.
      </p>

      <h2 id="locale-and-layout">Locale, calendar system, and layout</h2>
      <p>
        Set <code>locale</code>, <code>week-starts-on</code>, and
        <code>weekday-format</code> for presentation. Use a placeholder in the
        desired calendar system when selecting non-Gregorian dates, and set
        <code>dir="rtl"</code> where appropriate. Use
        <code>number-of-months</code> for wider intervals and
        <code>paged-navigation</code> to move by the complete visible span.
      </p>

      <h2 id="keyboard-accessibility-and-validation">Keyboard, accessibility, and validation</h2>
      <p>
        Reka supplies grid semantics, directional navigation, and highlighted
        range behavior. Set a contextual <code>calendar-label</code>, use
        <code>initial-focus</code> when opening inside an overlay, and explain
        unavailable dates without relying on color alone. Validate the final
        model as an inclusive range and decide whether a start-only value may
        leave the current step.
      </p>

      <h2 id="choosing-a-date-control">Choosing a date control</h2>
      <DocsComponentRecommendation
        title="Use Date Range Picker for a compact field"
        component-href="/docs/components/date-range-picker"
        component-name="Date Range Picker"
      >
        Use the packaged picker when two ISO string endpoints and a fixed
        two-month popover satisfy the workflow.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Calendar for one selected date"
        component-href="/docs/components/calendar"
        component-name="Calendar"
      >
        If the task chooses one day rather than an interval, Calendar has a
        simpler model and interaction.
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
import RangeCalendarExample from '@/Docs/Examples/RangeCalendar/RangeCalendarExample.vue'
import rangeCalendarSource from '@/Docs/Examples/RangeCalendar/RangeCalendarExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/range-calendar'
</script>
