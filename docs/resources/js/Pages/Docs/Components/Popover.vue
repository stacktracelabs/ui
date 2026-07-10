<template>
  <DocsLayout>
    <Head title="Popover" />

    <DocsPage
      title="Popover"
      description="Displays rich content in a portal, triggered by a control."
    >
      <div class="space-y-10">
        <ComponentPreview :source="popoverSource">
          <PopoverExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>popover</code> item from the registry by following the
            <Link href="/docs/installation" class="font-medium text-foreground underline underline-offset-4">
              installation guide
            </Link>.
          </p>
        </section>

        <section aria-labelledby="usage" class="space-y-4">
          <h2 id="usage" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Usage
          </h2>
          <p class="text-muted-foreground">
            Place the trigger and content inside <code>Popover</code>. Use
            <code>as-child</code> when another component, such as a button, should act as the
            trigger.
          </p>
        </section>
      </div>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import PopoverExample from '@/Docs/Examples/Popover/PopoverExample.vue'
import popoverSource from '@/Docs/Examples/Popover/PopoverExample.vue?raw'
</script>
