<template>
  <DocsLayout>
    <Head title="Panel" />

    <DocsPage
      title="Panel"
      description="Displays name-value information in a structured panel."
    >
      <div class="space-y-10">
        <ComponentPreview :source="panelSource">
          <PanelExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>panel</code> item from the registry by following the
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
            Compose a panel from <code>PanelHeader</code>, <code>PanelTitle</code>,
            <code>PanelContent</code>, <code>PanelItem</code>, and the optional
            <code>PanelFooter</code>. Give each item a <code>label</code> to render a responsive
            name-value row.
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
import PanelExample from '@/Docs/Examples/Panel/PanelExample.vue'
import panelSource from '@/Docs/Examples/Panel/PanelExample.vue?raw'
</script>
