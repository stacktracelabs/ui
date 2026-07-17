<template>
  <DocsLayout>
    <Head title="Dialog" />
    <DocsPage
      title="Dialog"
      description="A modal window layered over the page for focused content and actions."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Dialog component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Dialog for a short, focused workflow that needs context from the
        current screen, such as editing a record or reviewing details. Avoid
        moving a full page or a long multi-step task into a modal. Dialogs use
        the elevated surface and lighter blurred backdrop by default.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="classic">Classic</h2>
      <p>
        Use <code>variant=&quot;default&quot;</code> for the original flat surface with a
        darker, non-blurred backdrop.
      </p>
      <ComponentPreview :source="classicExampleSource">
        <ClassicExample />
      </ComponentPreview>

      <h2 id="structure">Structure and accessibility</h2>
      <p>
        Every dialog needs a <code>DialogTitle</code>. Add
        <code>DialogDescription</code> when the title does not fully explain the
        task or its consequence. The modal primitive traps focus while open,
        supports Escape dismissal, and restores focus when it closes. Put
        explicit actions in <code>DialogFooter</code>, and wrap cancel or done
        controls with <code>DialogClose</code> when they should close without
        changing root state manually.
      </p>
      <p>
        <code>DialogTrigger</code> and <code>DialogClose</code> support
        <code>as-child</code>. Use a focusable child and follow the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        so the primitive's attributes and events reach it.
      </p>

      <h2 id="controlled-state">Controlled state</h2>
      <p>
        Use <code>default-open</code> for an initially open uncontrolled dialog,
        bind <code>v-model:open</code> for standard Vue state, or pass a
        StackTrace <code>useToggle()</code> controller to <code>control</code>.
        Controlled state is useful when saving, navigation, or another external
        event determines when the dialog closes.
      </p>

      <h2 id="scrollable-content">Scrollable content</h2>
      <p>
        Use <code>DialogScrollContent</code> when content can exceed the
        viewport. It places the modal in a scrollable overlay so the title and
        actions remain reachable. If long content is the normal case rather
        than an exception, prefer a dedicated page.
      </p>
      <ComponentPreview :source="scrollExampleSource">
        <DialogScrollExample />
      </ComponentPreview>

      <DocsComponentRecommendation
        title="Use Alert Dialog for consequential decisions"
        component-href="/docs/components/alert-dialog"
        component-name="Alert Dialog"
      >
        Alert Dialog requires an explicit response and better communicates a
        destructive or otherwise high-consequence decision. Dialog is for
        focused content and workflows.
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
import ClassicExample from '@/Docs/Examples/Dialog/Classic.vue'
import classicExampleSource from '@/Docs/Examples/Dialog/Classic.vue?raw'
import DefaultExample from '@/Docs/Examples/Dialog/Default.vue'
import exampleSource from '@/Docs/Examples/Dialog/Default.vue?raw'
import DialogScrollExample from '@/Docs/Examples/Dialog/DialogScrollExample.vue'
import scrollExampleSource from '@/Docs/Examples/Dialog/DialogScrollExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/dialog'
</script>
