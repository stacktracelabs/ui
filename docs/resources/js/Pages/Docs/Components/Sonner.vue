<template>
  <DocsLayout>
    <Head title="Sonner" />
    <DocsPage
      title="Sonner"
      description="Displays transient toast feedback without interrupting the current task."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Sonner wrapper from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="mount-the-toaster">Mount the toaster</h2>
      <p>
        Render one <code>Toaster</code> near the application root so toasts can
        be triggered from any frontend component. The local wrapper imports the
        vue-sonner styles, applies theme variables, supplies status icons, and
        forwards vue-sonner's Toaster props.
      </p>
      <CodeBlock :code="toasterCode" language="vue" />

      <h2 id="usage">Usage</h2>
      <p>
        Import <code>toast</code> from <code>vue-sonner</code> and call it only
        after an outcome or state change that benefits from brief confirmation.
        Use a short title, put supporting detail in <code>description</code>, and
        avoid repeating text already visible on the page.
      </p>
      <ComponentPreview title="Toast" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="types">Types and meaning</h2>
      <p>
        Use <code>toast.success</code> for completed work,
        <code>toast.error</code> for a failed operation,
        <code>toast.warning</code> for a condition that needs caution, and
        <code>toast.info</code> for neutral information. Use
        <code>toast.loading</code> only while work is active, then replace or
        dismiss that same toast when the work settles.
      </p>
      <CodeBlock :code="typesCode" language="ts" />

      <h3 id="promises">Promise state</h3>
      <p>
        <code>toast.promise</code> keeps loading, success, and error feedback in
        one toast. Use it when those messages all refer to the same operation;
        keep inline form errors near their fields even if a summary toast is
        also shown.
      </p>
      <CodeBlock :code="promiseCode" language="ts" />

      <h2 id="actions-and-duration">Actions and duration</h2>
      <p>
        A toast may include a concise optional action such as Undo. Do not put a
        required decision, destructive confirmation, or the only recovery path
        in content that disappears automatically. Use <code>close-button</code>
        when users should be able to dismiss persistent or longer messages,
        and keep the close button's accessible label meaningful for the current
        language.
      </p>

      <h2 id="accessibility">Accessibility and live regions</h2>
      <p>
        vue-sonner exposes the toast area as a polite live region. Write text
        that makes sense when announced without visual context, and avoid
        triggering several toasts for one operation. Do not move keyboard focus
        to a toast just because it appeared.
      </p>
      <DocsComponentRecommendation
        title="Use Alert for persistent or critical feedback"
        component-href="/docs/components/alert"
        component-name="Alert"
      >
        Validation errors, blocking failures, and messages the user must read
        or act on belong in the page. Use Alert or field-level feedback instead
        of relying on a transient toast.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Sonner/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Sonner/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/sonner'
const toasterCode = [
  '<template>',
  '  <AppShell>',
  '    <slot />',
  '    <Toaster position="bottom-right" />',
  '  </AppShell>',
  '</template>',
  '',
  '<script setup lang="ts">',
  "import { Toaster } from '@/Components/Base/Sonner'",
  '</' + 'script>',
].join('\n')
const typesCode = [
  "toast.success('Project published')",
  "toast.error('Project could not be published', {",
  "  description: 'Check your connection and try again.',",
  '})',
].join('\n')
const promiseCode = [
  'toast.promise(publishProject(), {',
  "  loading: 'Publishing project…',",
  "  success: 'Project published',",
  "  error: 'Project could not be published',",
  '})',
].join('\n')
</script>
