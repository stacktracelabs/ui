<template>
  <DocsLayout>
    <Head title="Calendar" />
    <DocsPage
      title="Calendar"
      description="A date component that lets users select a day from a calendar."
    >
      <h2 id="about">About</h2>
      <p>
        Calendar is built on the
        <a
          href="https://reka-ui.com/docs/components/calendar"
          target="_blank"
          rel="noreferrer"
        >Reka UI Calendar primitive</a>
        and uses
        <a
          href="https://react-spectrum.adobe.com/internationalized/date/"
          target="_blank"
          rel="noreferrer"
        ><code>@internationalized/date</code></a>
        for date values.
      </p>
      <p>
        For a date interval, use the
        <Link href="/docs/components/range-calendar">Range Calendar</Link>.
      </p>

      <h2 id="installation">Installation</h2>
      <p>
        Add the Calendar component from the configured StackTrace registry.
        The registry item installs its date dependency.
      </p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="date-picker">Date picker</h2>
      <p>
        Compose Calendar with Popover and Button to build a date picker. See
        the <Link href="/docs/components/date-picker">Date Picker</Link> page
        for the packaged component.
      </p>

      <h2 id="examples">Examples</h2>
      <h3 id="form">Form</h3>
      <ComponentPreview
        title="Form"
        :source="formExampleSource"
      >
        <FormExample />
      </ComponentPreview>

      <h2 id="advanced-customization">Advanced customization</h2>
      <h3 id="month-and-year-selects">Month and year selects</h3>
      <p>
        Compose the exported calendar pieces when the heading needs custom
        controls.
      </p>
      <ComponentPreview
        title="Month and year selects"
        :source="monthYearExampleSource"
      >
        <MonthYearExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
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
