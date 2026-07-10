<template>
  <DocsLayout>
    <Head title="Radio Group" />

    <DocsPage
      title="Radio Group"
      description="A set of mutually exclusive options where only one can be selected at a time."
    >
      <div class="space-y-10">
        <ComponentPreview :source="radioGroupSource">
          <RadioGroupExample />
        </ComponentPreview>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>radio-group</code> item from the registry by following the
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
            Give every <code>RadioGroupItem</code> a unique value and associate each item with a
            label. Use <code>v-model</code> for a controlled selection or
            <code>default-value</code> for an initial uncontrolled value.
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
import RadioGroupExample from '@/Docs/Examples/RadioGroup/RadioGroupExample.vue'
import radioGroupSource from '@/Docs/Examples/RadioGroup/RadioGroupExample.vue?raw'
</script>
