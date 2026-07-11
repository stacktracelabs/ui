<template>
  <DocsLayout>
    <Head title="Date Input" />
    <DocsPage
      title="Date Input"
      description="Combines editable date segments with a calendar popover."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Date Input from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Date Input is a StackTrace component for cases where users may either
        type a calendar date segment by segment or choose it from a grid. Bind
        <code>v-model</code> to an ISO calendar-date string such as
        <code>2026-07-11</code>. Clearing the value emits
        <code>undefined</code>.
      </p>
      <ComponentPreview title="Date input" :source="dateInputSource">
        <DateInputExample />
      </ComponentPreview>

      <p>
        The current SFC declaration intersects this runtime string model with
        Reka's <code>DateValue</code> model type. Strict Vue template checking
        therefore rejects an ordinary <code>ref&lt;string&gt;</code> binding even
        though the local watcher and update event use strings. Treat this as a
        local component typing limitation until its public props are narrowed.
      </p>

      <h2 id="value-and-parsing">Value and parsing</h2>
      <p>
        The component converts its string model with
        <code>parseDate</code>, so the value must be a date-only ISO string.
        Do not pass a JavaScript <code>Date</code>, a localized display string,
        or a date-time string. The stored value has no time or time zone;
        decide how a day maps to an instant only when a later workflow
        actually requires that conversion.
      </p>

      <h2 id="scope-and-portal">Local API and portal target</h2>
      <p>
        Use <code>to</code> to select the portal target for the calendar
        content. The current StackTrace wrapper wires its string
        <code>modelValue</code> and <code>to</code> behavior; it does not pass
        calendar constraints, locale configuration, or date granularity
        through to the internal picker. Compose the lower-level primitives
        when those controls are required.
      </p>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        Each editable segment uses Reka Date Picker keyboard behavior, while
        the calendar provides grid navigation. Place Date Input next to a
        visible field label and persistent instructions when the expected
        format is important. The wrapper does not expose an id for its internal
        trigger, so compose the Reka parts directly when the label must target
        that control explicitly. Do not intercept arrow keys: they edit
        segments and move within the calendar. Ensure the popover is not
        clipped by an overflow container; use <code>to</code> when a different
        portal root is needed.
      </p>

      <h2 id="validation">Validation</h2>
      <p>
        Validate the ISO string in surrounding form state and render a nearby
        error that explains the accepted date. Treat missing required values
        separately from impossible or out-of-policy dates. Because this
        wrapper does not expose minimum, maximum, or unavailable-date rules,
        enforce such policy before submission or use a lower-level calendar
        composition that prevents invalid selection.
      </p>

      <h2 id="choosing-a-date-control">Choosing a date control</h2>
      <DocsComponentRecommendation
        title="Use Date Picker for selection only"
        component-href="/docs/components/date-picker"
        component-name="Date Picker"
      >
        If typing is unnecessary, Date Picker offers a simpler compact trigger
        and calendar workflow with the same ISO string model.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Date Time Input for time segments"
        component-href="/docs/components/date-time-input"
        component-name="Date Time Input"
      >
        Use Date Time Input when the value needs hour, minute, second, or time
        zone segments and application state can hold a DateValue object.
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
import DateInputExample from '@/Docs/Examples/DateInput/DateInputExample.vue'
import dateInputSource from '@/Docs/Examples/DateInput/DateInputExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/date-input'
</script>
