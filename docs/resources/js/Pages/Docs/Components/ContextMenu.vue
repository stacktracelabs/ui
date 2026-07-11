<template>
  <DocsLayout>
    <Head title="Context Menu" />
    <DocsPage
      title="Context Menu"
      description="Displays actions and choices for a specific region when its context menu is opened."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Context Menu component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Wrap the relevant region with <code>ContextMenuTrigger</code> and place
        its commands in <code>ContextMenuContent</code>. Use a context menu only
        for actions that apply to that region or selected object. Never make it
        the only way to discover an important action: pointer users may not
        right-click, and touch users may not know to long-press.
      </p>
      <ComponentPreview title="Context menu" :source="contextMenuSource">
        <ContextMenuExample />
      </ComponentPreview>

      <h2 id="items-and-choices">Items and choices</h2>
      <p>
        Use regular items for commands, checkbox items for independent boolean
        settings, and a radio group for one choice among several. Bind checkbox
        state with <code>v-model</code> and radio state with
        <code>v-model</code> on <code>ContextMenuRadioGroup</code> when the menu
        reflects application state.
      </p>
      <CodeBlock :code="choiceCode" language="vue" />
      <p>
        Group related commands and separate groups with
        <code>ContextMenuSeparator</code>. Labels describe the following group;
        they are not interactive. A shortcut component only displays a hint, so
        the application must register and document the actual shortcut.
      </p>

      <h2 id="submenus-and-destructive-actions">Submenus and destructive actions</h2>
      <p>
        Use a submenu for a genuinely nested set of secondary commands, not to
        conceal a long unstructured list. Keep labels short enough that the
        pointer can travel into the submenu without crossing unrelated items.
        Disable unavailable commands when their presence explains the current
        state; otherwise omit them.
      </p>
      <p>
        Destructive actions should use the destructive item variant and state
        their result plainly. If an accidental activation would have a serious
        consequence, confirm it after the menu closes rather than putting
        interactive confirmation controls inside the menu.
      </p>
      <DocsComponentRecommendation
        title="Confirm significant destructive actions"
        component-href="/docs/components/confirmation-dialog"
        component-name="Confirmation Dialog"
      >
        Open a confirmation dialog after the menu selection when the action is
        difficult to reverse. Keep routine, undoable commands immediate.
      </DocsComponentRecommendation>

      <h2 id="open-state-and-positioning">Open state and positioning</h2>
      <p>
        Use <code>v-model:open</code> on <code>ContextMenu</code> only when a
        parent needs to coordinate the open state. Content is portalled and
        positioned from the invocation point; use alignment and collision props
        on the content rather than absolute positioning it yourself.
      </p>

      <h2 id="accessibility">Accessibility and focus</h2>
      <p>
        The trigger preserves the browser context-menu gesture, Shift+F10 and
        the Context Menu key open the menu, arrow keys move between items, and
        Escape closes it. Focus returns to the trigger after dismissal. Make the
        trigger itself focusable when it is not already an interactive element.
      </p>
      <p>
        Use <code>as-child</code> when the trigger or an item must reuse another
        element without adding a wrapper, and preserve the attributes and event
        handlers described in the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
        For a visible button-triggered action list, use Dropdown Menu instead.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import ContextMenuExample from '@/Docs/Examples/ContextMenu/ContextMenuExample.vue'
import contextMenuSource from '@/Docs/Examples/ContextMenu/ContextMenuExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/context-menu'
const choiceCode = [
  '<ContextMenuCheckboxItem v-model="showDetails">',
  '  Show details',
  '</ContextMenuCheckboxItem>',
  '<ContextMenuRadioGroup v-model="density">',
  '  <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>',
  '  <ContextMenuRadioItem value="comfortable">Comfortable</ContextMenuRadioItem>',
  '</ContextMenuRadioGroup>',
].join('\n')
</script>
