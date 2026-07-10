<template>
  <DocsLayout>
    <Head title="Confirmation Dialog" />

    <DocsPage
      title="Confirmation Dialog"
      description="A dialog that asks the user to confirm an action."
    >
      <div class="space-y-10">
        <ComponentPreview :source="confirmationDialogSource">
          <ConfirmationDialogExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>confirmation-dialog</code> item from the registry by following the
            <Link href="/docs/installation" class="font-medium text-foreground underline underline-offset-4">
              installation guide
            </Link>.
          </p>

          <h3 id="add-to-root" class="scroll-mt-24 text-xl font-semibold tracking-tight">
            Add the root component
          </h3>
          <p class="text-muted-foreground">
            Render <code>ConfirmationDialog</code> once in your application root so calls to
            <code>useConfirmable</code> can open it from anywhere in the component tree.
          </p>
          <CodeBlock
            :code="rootComponentCode"
            language="vue"
            filename="AppLayout.vue"
          />
        </section>

        <section aria-labelledby="usage" class="space-y-4">
          <h2 id="usage" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Usage
          </h2>
          <p class="text-muted-foreground">
            Use <code>confirmDestructive</code> for irreversible actions. The dialog stays in a
            processing state until the callback finishes.
          </p>
        </section>
      </div>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import ConfirmationDialogExample from '@/Docs/Examples/ConfirmationDialog/ConfirmationDialogExample.vue'
import confirmationDialogSource from '@/Docs/Examples/ConfirmationDialog/ConfirmationDialogExample.vue?raw'

const rootComponentCode = `<template>
  <main>
    <slot />
  </main>

  <ConfirmationDialog />
</template>

<script setup lang="ts">
import { ConfirmationDialog } from '@/Components/ConfirmationDialog'
<\/script>`
</script>
