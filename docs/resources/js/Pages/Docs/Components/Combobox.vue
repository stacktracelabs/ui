<template>
  <DocsLayout>
    <Head title="Combobox" />
    <DocsPage
      title="Combobox"
      description="A searchable listbox for finding and selecting from a long set of options."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Combobox component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Combobox when users know roughly what they want but scanning the
        complete option list would be slow. Compose its trigger, search input,
        filtered viewport, groups, and items; bind <code>v-model</code> to the
        selected value.
      </p>
      <ComponentPreview title="Searchable selection" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="anatomy">Anatomy</h2>
      <p>
        <code>Combobox</code> owns selection and open state.
        <code>ComboboxAnchor</code> positions the list,
        <code>ComboboxTrigger</code> opens it, and
        <code>ComboboxList</code> portals the popup. Inside the list, place
        <code>ComboboxInput</code> before <code>ComboboxViewport</code>, then
        render groups and items. Use <code>ComboboxEmpty</code> to explain an
        empty result instead of leaving a blank popup.
      </p>
      <p>
        The trigger in the example uses <code>as-child</code> so Reka behavior
        is merged onto the Button without an extra wrapper. Preserve a single
        interactive child and read the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before wrapping trigger behavior in another component.
      </p>

      <h2 id="controlled-behavior">Controlled behavior</h2>
      <p>
        Use <code>v-model</code> when the selected value affects other UI. Use
        <code>default-value</code> only for an initial uncontrolled selection.
        Bind <code>v-model:open</code> only when application logic must open or
        close the list; otherwise let the component manage the popup.
      </p>
      <p>
        Set <code>multiple</code> with an array model for a true multi-select.
        For object values, pass <code>by</code> so items compare by a stable key.
        Keep primitive ids in form state when that is sufficient—it makes
        serialization and equality easier to reason about.
      </p>

      <h2 id="filtering-and-states">Filtering and states</h2>
      <p>
        The root filters registered items from the search term by default. Use
        <code>ignore-filter</code> only when the displayed results are already
        filtered by application logic. Disable unavailable items individually
        and disable the root only when no selection can be made. Keep the
        empty message distinct from a loading message.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Give the trigger an accessible name and show the selected label, not
        only an icon. The composed primitives provide listbox keyboard
        navigation, highlighting, and selection behavior; avoid replacing
        items with arbitrary clickable elements. Use a visible field label
        and description when the choice belongs to a form.
      </p>

      <h2 id="choosing-a-picker">Choosing a picker</h2>
      <DocsComponentRecommendation
        title="Use Select for a short custom list"
        component-href="/docs/components/select"
        component-name="Select"
      >
        If the list is short enough to scan without search, Select is simpler
        and keeps the same custom popup interaction.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Native Select for browser-native behavior"
        component-href="/docs/components/native-select"
        component-name="Native Select"
      >
        Prefer Native Select for straightforward choices where platform-native
        mobile pickers, autofill, and ordinary form behavior matter most.
      </DocsComponentRecommendation>
      <DocsComponentRecommendation
        title="Use Command for actions"
        component-href="/docs/components/command"
        component-name="Command"
      >
        If filtering launches actions or navigation rather than selecting a
        form value, compose Command with the appropriate overlay instead.
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
import DefaultExample from '@/Docs/Examples/Combobox/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Combobox/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/combobox'
</script>
