<template>
  <DocsLayout>
    <Head title="Select" />
    <DocsPage
      title="Select"
      description="Opens a custom list of options from a trigger and returns the selected value."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Select from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Select for a compact choice from a list that remains easy to scan
        without search. Compose the trigger and value separately from the
        portalled content and items. Keep the placeholder instructional, then
        show the selected item's text in <code>SelectValue</code>.
      </p>
      <ComponentPreview title="Grouped select" :source="selectSource">
        <SelectExample />
      </ComponentPreview>

      <h2 id="controlled-selection">Controlled selection</h2>
      <p>
        Bind <code>v-model</code> when application state needs the selected
        value. Use <code>default-value</code> for an initial uncontrolled value.
        Bind <code>v-model:open</code> only when external logic must coordinate
        the popup; otherwise let Select manage it. Set <code>name</code> and
        <code>required</code> on the root when it participates in a form.
      </p>
      <ComponentPreview title="Options from data" :source="selectOptionsSource">
        <SelectOptionsExample />
      </ComponentPreview>

      <h2 id="multiple-selection">Multiple selection</h2>
      <p>
        Select supports <code>multiple</code> with an array model. Use it only
        when the trigger can communicate all selected values and users can
        understand how to remove them. For many selected items, a dedicated
        multi-value control is often clearer than compressing the state into a
        single trigger.
      </p>

      <h2 id="groups-sizes-and-states">Groups, sizes, and states</h2>
      <p>
        Use <code>SelectGroup</code> with <code>SelectLabel</code> for meaningful
        categories, and <code>SelectSeparator</code> only when it clarifies
        those categories. <code>SelectTrigger</code> supports
        <code>size="default"</code> and <code>size="sm"</code>. Disable
        individual unavailable items instead of the root when other choices
        remain, and put <code>aria-invalid</code> on the trigger when validation
        fails.
      </p>

      <h2 id="composition">Composition and accessibility</h2>
      <p>
        Select forwards Reka primitive behavior, including composition props
        on the applicable parts. When using <code>as-child</code>, keep one
        focusable child and preserve the trigger's role, keyboard handling,
        disabled state, and accessible name. Read the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before introducing a custom trigger.
      </p>
      <p>
        Associate the trigger with a visible field label. Select provides
        keyboard navigation and typeahead; keep item text concise and do not
        place buttons, links, or form controls inside an item.
      </p>

      <h2 id="choosing-a-picker">Choosing a picker</h2>
      <DocsComponentRecommendation
        title="Use Native Select for platform behavior"
        component-href="/docs/components/native-select"
        component-name="Native Select"
      >
        Prefer Native Select when native mobile pickers, autofill, performance,
        and ordinary HTML form behavior matter more than a custom popup.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Combobox when search is necessary"
        component-href="/docs/components/combobox"
        component-name="Combobox"
      >
        If users would struggle to scan the list, use Combobox so they can
        filter before selecting.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Radio Group for visible comparison"
        component-href="/docs/components/radio-group"
        component-name="Radio Group"
      >
        For a few important mutually exclusive choices, Radio Group keeps every
        option visible and easier to compare.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import SelectExample from '@/Docs/Examples/Select/SelectExample.vue'
import selectSource from '@/Docs/Examples/Select/SelectExample.vue?raw'
import SelectOptionsExample from '@/Docs/Examples/Select/SelectOptionsExample.vue'
import selectOptionsSource from '@/Docs/Examples/Select/SelectOptionsExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/select'
</script>
