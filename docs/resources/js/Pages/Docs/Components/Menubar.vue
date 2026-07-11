<template>
  <DocsLayout>
    <Head title="Menubar" />
    <DocsPage
      title="Menubar"
      description="Presents persistent, keyboard-accessible menus for application commands."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Menubar component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use a menubar for a command-heavy application whose actions naturally
        fit stable categories such as File, Edit, View, or Help. Keep the root
        visible and preserve the menu order across screens. Do not use Menubar
        for ordinary site navigation; Navigation Menu, Sidebar, or plain links
        communicate destinations more clearly.
      </p>
      <ComponentPreview title="Menubar" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="menu-structure">Menu structure</h2>
      <p>
        Give each <code>MenubarMenu</code> a concise trigger, group related
        commands, and separate unrelated groups. Use a submenu only when its
        parent label describes a genuine command hierarchy. Too many levels make
        commands difficult to discover and operate with a pointer.
      </p>
      <p>
        Labels are non-interactive headings. Shortcut components render visual
        hints only; register the corresponding keyboard actions separately and
        avoid overriding browser or operating-system shortcuts.
      </p>

      <h2 id="choices-and-state">Choices and state</h2>
      <p>
        Use checkbox items for independent toggles and a radio group for one
        value among several. Bind their models to the same state used by the
        application so reopening a menu always reflects the current choice.
      </p>
      <CodeBlock :code="choicesCode" language="vue" />
      <p>
        The Menubar root can be controlled with <code>v-model</code> when a
        parent must observe or change which menu is open. Prefer uncontrolled
        state otherwise. Disabled items can explain a temporarily unavailable
        command, but omit irrelevant commands rather than filling the menu with
        disabled rows.
      </p>

      <h2 id="destructive-actions">Destructive actions</h2>
      <p>
        Use <code>variant="destructive"</code> for commands such as deleting a
        document, not for ordinary close or cancel actions. If activation would
        cause a significant irreversible result, open a confirmation dialog
        after selection and allow focus to move into that dialog normally.
      </p>
      <DocsComponentRecommendation
        title="Confirm significant destructive commands"
        component-href="/docs/components/confirmation-dialog"
        component-name="Confirmation Dialog"
      >
        Confirmation is appropriate when undo is unavailable and the cost of an
        accidental command is high.
      </DocsComponentRecommendation>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        ArrowLeft and ArrowRight move between top-level triggers. ArrowDown opens
        a menu, arrow keys move within it, Enter or Space selects, and Escape
        closes it. Focus remains within the menubar interaction until the user
        selects a command or moves away.
      </p>
      <p>
        Use <code>as-child</code> only when the composed element preserves menu
        roles, focus, and event forwarding. See the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
        Use Dropdown Menu when only one trigger is needed.
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
import DefaultExample from '@/Docs/Examples/Menubar/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Menubar/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/menubar'
const choicesCode = [
  '<MenubarCheckboxItem v-model="showStatusBar">',
  '  Show status bar',
  '</MenubarCheckboxItem>',
  '<MenubarRadioGroup v-model="zoom">',
  '  <MenubarRadioItem value="100">100%</MenubarRadioItem>',
  '  <MenubarRadioItem value="125">125%</MenubarRadioItem>',
  '</MenubarRadioGroup>',
].join('\n')
</script>
