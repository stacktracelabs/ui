<template>
  <DocsLayout>
    <Head title="Kbd" />
    <DocsPage title="Kbd" description="Displays keyboard keys and shortcut sequences in instructional text.">
      <h2 id="installation">Installation</h2>
      <p>Add Kbd from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Wrap one key in <code>Kbd</code>, or place several keys in
        <code>KbdGroup</code> for a shortcut. The components describe keyboard
        input; they do not register, dispatch, or validate shortcuts.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="labels-and-platforms">Labels and platforms</h2>
      <p>
        Use the label users see on their keyboard, such as <code>Esc</code>,
        <code>Enter</code>, or an arrow symbol. Platform-specific modifiers may
        differ: show <code>⌘</code> on macOS and <code>Ctrl</code> where that is
        the real binding. If the application detects a platform, keep that
        logic outside Kbd and pass the resulting label into the slot.
      </p>

      <h2 id="composition">Composition</h2>
      <p>
        Kbd works inside prose, buttons, tooltips, and input adornments. Keep a
        visible action label when a shortcut alone would be ambiguous. A
        shortcut in a tooltip should reinforce an already discoverable control,
        not hide the control's only accessible name.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        The native <code>kbd</code> element conveys user input semantically, but
        visual key caps do not guarantee that a feature is keyboard accessible.
        Implement and test the real interaction separately, avoid overriding
        common browser or assistive-technology shortcuts, and document multi-key
        sequences in the order they are pressed.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Kbd in help text, command menus, and discoverable shortcut hints.</li>
        <li>Avoid it for decorative badges or non-keyboard tokens.</li>
        <li>Prefer ordinary text when the instruction is a gesture, pointer action, or voice command.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Kbd/Default.vue'
import exampleSource from '@/Docs/Examples/Kbd/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/kbd'
</script>
