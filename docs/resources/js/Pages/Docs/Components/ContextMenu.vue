<template>
  <DocsLayout>
    <Head title="Context Menu" />

    <DocsPage
      title="Context Menu"
      description="Displays a menu of actions when the user opens a context menu."
    >
      <div class="space-y-10">
        <ComponentPreview :source="contextMenuSource">
          <ContextMenuExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>context-menu</code> item from the registry by following the
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
            Compose items, separators, checkboxes, radio groups, shortcuts, and submenus inside
            <code>ContextMenuContent</code>. Right-click the preview to open it.
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
import ContextMenuExample from '@/Docs/Examples/ContextMenu/ContextMenuExample.vue'
import contextMenuSource from '@/Docs/Examples/ContextMenu/ContextMenuExample.vue?raw'
</script>
