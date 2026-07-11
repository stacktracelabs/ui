<template>
  <DocsLayout>
    <Head title="Calendar" />
    <DocsPage
      title="Calendar"
      description="Lets users choose one or more dates from an inline calendar grid."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Calendar from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Calendar when the date grid should remain visible. Bind
        <code>v-model</code> to an <code>@internationalized/date</code>
        <code>DateValue</code>; the component does not emit a JavaScript
        <code>Date</code> or an ISO string.
      </p>
      <ComponentPreview title="Calendar" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="values-and-visible-month">Values and the visible month</h2>
      <p>
        The selected value and the visible month are separate. Bind
        <code>v-model</code> for selection and
        <code>v-model:placeholder</code> when application state must control
        the displayed month. Use <code>default-value</code> or
        <code>default-placeholder</code> for uncontrolled initial state.
        With <code>multiple</code>, the model is an array of
        <code>DateValue</code> objects.
      </p>
      <p>
        A <code>CalendarDate</code> represents a calendar day without a time
        zone. Functions such as <code>today(getLocalTimeZone())</code> use a
        zone only to decide which day is “today.” Convert to a JavaScript date
        only at a boundary that has an explicit time-zone policy.
      </p>

      <h2 id="locale-and-calendar-system">Locale and calendar system</h2>
      <p>
        Set <code>locale</code>, <code>week-starts-on</code>, and
        <code>weekday-format</code> to control presentation. A locale does not
        by itself change the stored calendar system. For Persian, Japanese,
        or another supported system, provide a placeholder created in that
        system with <code>toCalendar</code>; selected values then retain the
        corresponding calendar identifier. Set <code>dir="rtl"</code> when the
        surrounding interface is right-to-left.
      </p>

      <h2 id="constraints-and-layout">Constraints and layout</h2>
      <p>
        Use <code>min-value</code> and <code>max-value</code> for hard bounds,
        <code>is-date-disabled</code> for dates that cannot be selected, and
        <code>is-date-unavailable</code> to communicate unavailable dates.
        <code>disabled</code> blocks the whole calendar; <code>readonly</code>
        preserves navigation without allowing selection. Use
        <code>number-of-months</code> for a wider view and
        <code>paged-navigation</code> when the previous and next buttons should
        move by that full number of months.
      </p>
      <p>
        <code>fixed-weeks</code> keeps the grid at six rows, while
        <code>prevent-deselect</code> ensures an existing selection cannot be
        cleared without choosing another date. Keep the visible range compact
        enough for small screens.
      </p>

      <h2 id="forms-and-popovers">Forms and popovers</h2>
      <p>
        Calendar owns a date value, not a native form string. Serialize the
        value where your form state requires it. When Calendar opens in a
        Popover, set <code>initial-focus</code>, give it a specific
        <code>calendar-label</code>, and keep the trigger label synchronized
        with the selected date.
      </p>
      <ComponentPreview title="Date of birth" :source="formExampleSource">
        <FormExample />
      </ComponentPreview>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        The Reka calendar primitive supplies grid semantics, arrow-key day
        navigation, and month navigation controls. Do not replace day cells
        with unrelated click handlers. Distinguish disabled dates from
        unavailable dates in both behavior and supporting text, and avoid
        relying on color alone to explain why a date cannot be chosen.
      </p>

      <h2 id="custom-heading">Custom month and year controls</h2>
      <p>
        The default <code>Calendar</code> renders the complete grid. For custom
        heading controls, compose the exported Calendar parts around Reka's
        <code>CalendarRoot</code>. Keep the placeholder synchronized because it
        determines the visible month.
      </p>
      <ComponentPreview title="Month and year selects" :source="monthYearExampleSource">
        <MonthYearExample />
      </ComponentPreview>

      <h2 id="choosing-a-date-control">Choosing a date control</h2>
      <DocsComponentRecommendation
        title="Use Date Picker for a compact field"
        component-href="/docs/components/date-picker"
        component-name="Date Picker"
      >
        When the grid should open only on demand and an ISO date string fits
        the form state, use the packaged Date Picker.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Range Calendar for an interval"
        component-href="/docs/components/range-calendar"
        component-name="Range Calendar"
      >
        Use Range Calendar when users must choose a start and end date from a
        visible grid.
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
import DefaultExample from '@/Docs/Examples/Calendar/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Calendar/Default.vue?raw'
import FormExample from '@/Docs/Examples/Calendar/Form.vue'
import formExampleSource from '@/Docs/Examples/Calendar/Form.vue?raw'
import MonthYearExample from '@/Docs/Examples/Calendar/MonthYearSelects.vue'
import monthYearExampleSource from '@/Docs/Examples/Calendar/MonthYearSelects.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/calendar'
</script>
