<template>
  <DocsLayout>
    <Head title="Command" />
    <DocsPage
      title="Command"
      description="A searchable command list for quickly finding and running actions."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Command component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Command when users know what they want but the available actions or
        destinations are too numerous for a small menu. Give every
        <code>CommandItem</code> a stable, searchable <code>value</code>, group
        related results, and include <code>CommandEmpty</code> inside the list.
        Prefer a Select for choosing one value from a known form field and a
        Dropdown Menu for a short set of contextual actions.
      </p>
      <ComponentPreview title="Command list" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="filtering-and-selection">Filtering and selection</h2>
      <p>
        <code>CommandInput</code> filters item text and values without
        case-sensitive matching. Write values that include useful search terms,
        but keep visible labels concise. Selecting an item clears the current
        query; handle the item's <code>select</code> event to run an action,
        navigate, or update application state.
      </p>
      <CodeBlock :code="selectionCode" language="vue" />
      <p>
        Keep disabled results visible only when explaining why an action is
        unavailable helps the user. Otherwise omit them so search results stay
        relevant. Shortcut text in <code>CommandShortcut</code> is a hint, not a
        keyboard binding; register the actual shortcut separately.
      </p>

      <h2 id="dialog">Command dialog</h2>
      <p>
        Use <code>CommandDialog</code> for a global command palette. Control it
        with <code>v-model:open</code>, supply a specific <code>title</code> and
        <code>description</code> for assistive technology, and let the dialog
        restore focus to the invoking control when it closes.
      </p>
      <ComponentPreview title="Command dialog" :source="dialogExampleSource">
        <DialogExample />
      </ComponentPreview>
      <p>
        Choose a shortcut that does not override browser or operating-system
        behavior. Display both macOS and non-macOS forms when the application
        serves both, and always provide a visible button or menu entry as an
        alternative.
      </p>

      <h2 id="state-and-data">State and data</h2>
      <p>
        The root forwards listbox value state, so use <code>v-model</code> when
        the selected value must be observed. Load remote results before rendering
        items or manage that request outside Command; the built-in filter only
        filters mounted items. Announce remote loading or failure near the list
        instead of presenting a misleading empty result.
      </p>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        <code>CommandInput</code> receives focus automatically. Arrow keys move
        through results, Enter selects the highlighted item, and Escape closes a
        surrounding dialog. Do not nest buttons or links inside an item; handle
        selection on the item so it remains one keyboard target.
      </p>
      <p>
        If a custom item uses <code>as-child</code>, preserve the listbox
        semantics, forwarded events, and focus behavior described in the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Command/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Command/Default.vue?raw'
import DialogExample from '@/Docs/Examples/Command/Dialog.vue'
import dialogExampleSource from '@/Docs/Examples/Command/Dialog.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/command'
const selectionCode = [
  '<CommandItem',
  '  value="Open project settings"',
  '  @select="openProjectSettings"',
  '>',
  '  Project settings',
  '</CommandItem>',
].join('\n')
</script>
