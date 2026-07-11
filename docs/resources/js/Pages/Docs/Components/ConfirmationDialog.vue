<template>
  <DocsLayout>
    <Head title="Confirmation Dialog" />
    <DocsPage
      title="Confirmation Dialog"
      description="Requests a confirmation or acknowledgement through a shared application dialog."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Confirmation Dialog from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="root-component">Add the root component</h2>
      <p>
        Render <code>ConfirmationDialog</code> once near the application root.
        The composable uses shared module state, so calls made elsewhere target
        this root instance. The optional <code>to</code> prop changes the portal
        destination when the dialog must render inside a specific container.
      </p>
      <CodeBlock
        :code="rootComponentCode"
        language="vue"
        filename="AppLayout.vue"
      />

      <h2 id="usage">Usage</h2>
      <p>
        Call <code>confirmDestructive</code> immediately before an irreversible
        frontend action. The callback may be synchronous or asynchronous; while
        it is pending, the selected button displays a processing state, and the
        dialog closes after the callback fulfills.
      </p>
      <ComponentPreview :source="confirmationDialogSource">
        <ConfirmationDialogExample />
      </ComponentPreview>

      <h2 id="confirmation-options">Confirmation options</h2>
      <p>
        Use <code>confirm(message, callback)</code> for the common case. Pass a
        complete object when the title, action labels, cancel callback, or
        destructive styling must be explicit. Labels should describe the real
        operation rather than repeat <em>Confirm</em> and <em>Cancel</em> without
        context.
      </p>
      <CodeBlock
        :code="confirmationOptionsCode"
        language="vue"
        filename="DeleteProjectButton.vue"
      />

      <h2 id="alerts">Acknowledgement alerts</h2>
      <p>
        <code>alert(message, callback)</code> shows a single acknowledgement
        action. Use it only when the message must be acknowledged before work
        continues; ordinary success, warning, and error status belongs inline
        or in a toast. <code>alertDestructive</code> changes the action's visual
        intent but does not add recovery behavior.
      </p>

      <h2 id="callback-guidance">Callback and concurrency guidance</h2>
      <p>
        Handle failures inside asynchronous callbacks and surface a useful
        error to the user. A rejected callback does not provide built-in error
        messaging. This component also represents one shared pending dialog;
        do not issue overlapping confirmation requests because a later call
        replaces the current request.
      </p>
      <p>
        Confirmation Dialog is frontend-only and does not authorize an action
        by itself. Keep permission checks and irreversible operation safeguards
        at the appropriate application boundary.
      </p>

      <DocsComponentRecommendation
        title="Compose local decisions with Alert Dialog"
        component-href="/docs/components/alert-dialog"
        component-name="Alert Dialog"
      >
        Use Alert Dialog when the confirmation belongs to one component and its
        trigger, description, and actions should stay declarative in the same
        template.
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
import ConfirmationDialogExample from '@/Docs/Examples/ConfirmationDialog/ConfirmationDialogExample.vue'
import confirmationDialogSource from '@/Docs/Examples/ConfirmationDialog/ConfirmationDialogExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/confirmation-dialog'
const rootComponentCode = `<template>
  <main>
    <slot />
  </main>

  <ConfirmationDialog />
</template>

<script setup lang="ts">
import { ConfirmationDialog } from '@/Components/Base/ConfirmationDialog'
<\/script>`

const confirmationOptionsCode = `<template>
  <Button variant="destructive" @click="requestDeletion">
    Delete project
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import { useConfirmable } from '@/Components/Base/ConfirmationDialog'

const { confirm } = useConfirmable()

const requestDeletion = () => {
  confirm({
    type: 'confirmation',
    title: 'Delete project?',
    message: 'This permanently removes the project and its saved views.',
    cancelLabel: 'Keep project',
    confirmLabel: 'Delete project',
    destructive: true,
    confirm: async () => {
      await deleteProject()
    },
  })
}
<\/script>`
</script>
