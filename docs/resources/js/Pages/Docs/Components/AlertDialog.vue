<template>
  <DocsLayout>
    <Head title="Alert Dialog" />
    <DocsPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Alert Dialog component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use an alert dialog only when a decision must be resolved before the
        current task can continue—for example, before deleting data or
        discarding unsaved work. Name the consequence in the description and
        label the action with the operation itself, such as
        <em>Delete account</em>, rather than a vague <em>Continue</em>. Alert
        dialogs use the elevated surface and lighter blurred backdrop by
        default.
      </p>
      <ComponentPreview :source="defaultExampleSource">
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

      <h2 id="structure">Structure and focus</h2>
      <p>
        Include one <code>AlertDialogTitle</code>, a concise
        <code>AlertDialogDescription</code>, a safe
        <code>AlertDialogCancel</code>, and the final
        <code>AlertDialogAction</code>. The modal primitive moves focus into the
        dialog, keeps keyboard interaction inside it while open, and returns
        focus after it closes. Keep the cancel action available unless the user
        truly has no choice.
      </p>
      <p>
        <code>AlertDialogTrigger</code> supports <code>as-child</code> so an
        existing button can open the dialog without an extra wrapper. The child
        must remain focusable and must forward the merged attributes described
        in the <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>

      <h2 id="controlled-state">Controlled state</h2>
      <p>
        Bind <code>v-model:open</code> for normal Vue-controlled state, or pass
        a StackTrace <code>useToggle()</code> controller to the
        <code>control</code> prop. Prefer the declarative trigger for ordinary
        local interactions; use controlled state when an external event needs
        to open or close the dialog.
      </p>

      <h2 id="when-to-use">When to use something else</h2>
      <p>
        Do not interrupt people for routine information or reversible actions.
        Use an inline message or toast for status, and use Dialog for forms or
        focused content that is not a high-consequence decision.
      </p>
      <DocsComponentRecommendation
        title="Centralize application-wide confirmations"
        component-href="/docs/components/confirmation-dialog"
        component-name="Confirmation Dialog"
      >
        When many unrelated features need to request the same kind of
        programmatic confirmation, Confirmation Dialog provides the
        StackTrace-specific composable API and processing behavior.
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
import ClassicExample from '@/Docs/Examples/AlertDialog/Classic.vue'
import classicExampleSource from '@/Docs/Examples/AlertDialog/Classic.vue?raw'
import DefaultExample from '@/Docs/Examples/AlertDialog/Default.vue'
import defaultExampleSource from '@/Docs/Examples/AlertDialog/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/alert-dialog'
</script>
