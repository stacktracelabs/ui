<template>
  <DocsLayout>
    <Head title="Textarea" />
    <DocsPage title="Textarea" description="Displays a multiline text input.">
      <div class="space-y-10">
        <ComponentPreview :source="textareaSource">
          <TextareaExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add Textarea from the component registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="usageSource" language="vue" filename="TextareaExample.vue" />
        </section>

        <section class="space-y-6">
          <h2 id="examples">
            Examples
          </h2>

          <div class="space-y-4">
            <h3 id="disabled">
              Disabled
            </h3>
            <ComponentPreview :source="textareaDisabledSource">
              <TextareaDisabledExample />
            </ComponentPreview>
          </div>
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
import TextareaDisabledExample from '@/Docs/Examples/Textarea/TextareaDisabledExample.vue'
import textareaDisabledSource from '@/Docs/Examples/Textarea/TextareaDisabledExample.vue?raw'
import TextareaExample from '@/Docs/Examples/Textarea/TextareaExample.vue'
import textareaSource from '@/Docs/Examples/Textarea/TextareaExample.vue?raw'

const usageSource = textareaSource.replaceAll('@/Components/Base/', '@/Components/')
</script>
