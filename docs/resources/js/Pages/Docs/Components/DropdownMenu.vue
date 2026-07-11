<template>
  <DocsLayout>
    <Head title="Dropdown Menu" />
    <DocsPage
      title="Dropdown Menu"
      description="Displays a compact list of actions or choices from a visible trigger."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Dropdown Menu component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use a dropdown for secondary actions or settings associated with a
        visible trigger. Put the trigger next to the object or section it
        affects, give icon-only triggers an accessible name, and keep the menu
        short enough to scan. Use visible buttons for frequent or primary
        actions, and Select for a form field whose chosen value is submitted.
      </p>
      <ComponentPreview title="Dropdown menu" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="items-and-navigation">Actions and navigation</h2>
      <p>
        Use <code>DropdownMenuItem</code> for commands and handle its
        <code>select</code> event. Use <code>DropdownMenuLink</code> for Inertia
        navigation so the row keeps menu-item behavior while the child keeps
        link behavior. Pass Inertia link props such as <code>method</code> and
        <code>data</code> directly to the link component.
      </p>
      <CodeBlock :code="linkCode" language="vue" />
      <p>
        Use the destructive variant only for commands with a harmful or
        difficult-to-reverse result. Confirm serious consequences after the
        menu closes; do not embed a dialog or form inside menu content.
      </p>

      <h2 id="choices">Checkboxes and radio choices</h2>
      <p>
        Checkbox items represent independent boolean settings. Radio items
        belong inside one radio group and represent a single choice. Bind their
        model values when they reflect persistent application state; do not use
        checkmarks merely to decorate the currently focused item.
      </p>
      <CodeBlock :code="choicesCode" language="vue" />

      <h2 id="structure">Groups, shortcuts, and submenus</h2>
      <p>
        Group related items, add a label only when it helps users understand the
        group, and use separators between distinct sets. A displayed shortcut is
        only a hint; register the keyboard command elsewhere. Use submenus
        sparingly because they require precise pointer movement and add another
        keyboard level. A dialog is usually better for a multi-step workflow or
        settings that need explanation.
      </p>

      <h2 id="state-and-positioning">State and positioning</h2>
      <p>
        The root supports <code>v-model:open</code> for coordinated open state.
        Content is portalled and collision-aware; set <code>align</code>,
        <code>side</code>, and offsets on <code>DropdownMenuContent</code> rather
        than positioning it manually. Let selection close the menu unless the
        user must make several independent checkbox changes.
      </p>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        Enter, Space, or ArrowDown opens a focused trigger. Arrow keys move
        between items, Enter or Space selects, and Escape closes the menu and
        returns focus to its trigger. Disabled items remain unfocusable.
      </p>
      <p>
        <code>DropdownMenuTrigger as-child</code> avoids a nested button when
        reusing an existing control. The child must forward attributes, events,
        and its ref as described in the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
        For right-click actions without a visible trigger, use Context Menu.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/DropdownMenu/Default.vue'
import exampleSource from '@/Docs/Examples/DropdownMenu/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const defaultExampleSource = exampleSource
const installationCode = 'npx shadcn-vue@latest add @stacktrace/dropdown-menu'
const linkCode = [
  '<DropdownMenuLink href="/account/settings">',
  '  Account settings',
  '</DropdownMenuLink>',
].join('\n')
const choicesCode = [
  '<DropdownMenuCheckboxItem v-model="showToolbar">',
  '  Show toolbar',
  '</DropdownMenuCheckboxItem>',
  '<DropdownMenuRadioGroup v-model="density">',
  '  <DropdownMenuRadioItem value="compact">Compact</DropdownMenuRadioItem>',
  '  <DropdownMenuRadioItem value="comfortable">Comfortable</DropdownMenuRadioItem>',
  '</DropdownMenuRadioGroup>',
].join('\n')
</script>
