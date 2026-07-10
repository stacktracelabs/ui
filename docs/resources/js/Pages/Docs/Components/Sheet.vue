<template>
  <DocsLayout>
    <Head title="Sheet" />
    <DocsPage
      title="Sheet"
      description="Extends Dialog to display content that complements the main screen."
    >
      <div class="space-y-10">
        <ComponentPreview :source="sheetSource">
          <SheetExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add Sheet from the component registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="usageSource" language="vue" filename="SheetExample.vue" />
        </section>

        <section class="space-y-8">
          <h2 id="examples">
            Examples
          </h2>

          <div class="space-y-4">
            <h3 id="side">
              Side
            </h3>
            <p>
              Set the <code>side</code> prop on <code>SheetContent</code> to
              <code>top</code>, <code>right</code>, <code>bottom</code>, or <code>left</code>.
            </p>
            <ComponentPreview :source="sheetSidesSource">
              <SheetSidesExample />
            </ComponentPreview>
          </div>

          <div class="space-y-4">
            <h3 id="size">
              Size
            </h3>
            <p>Adjust the sheet width with utility classes on <code>SheetContent</code>.</p>
            <ComponentPreview :source="sheetSizeSource">
              <SheetSizeExample />
            </ComponentPreview>
          </div>

          <div class="space-y-4">
            <h3 id="controlled-with-use-toggle">
              Controlled with useToggle
            </h3>
            <p>
              Pass a <Link href="/docs/composables/toggle">useToggle controller</Link>
              to the <code>control</code> prop to manage the open state outside the sheet.
            </p>
            <ComponentPreview :source="sheetControlledSource">
              <SheetControlledExample />
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
import SheetControlledExample from '@/Docs/Examples/Sheet/SheetControlledExample.vue'
import sheetControlledSource from '@/Docs/Examples/Sheet/SheetControlledExample.vue?raw'
import SheetExample from '@/Docs/Examples/Sheet/SheetExample.vue'
import sheetSource from '@/Docs/Examples/Sheet/SheetExample.vue?raw'
import SheetSidesExample from '@/Docs/Examples/Sheet/SheetSidesExample.vue'
import sheetSidesSource from '@/Docs/Examples/Sheet/SheetSidesExample.vue?raw'
import SheetSizeExample from '@/Docs/Examples/Sheet/SheetSizeExample.vue'
import sheetSizeSource from '@/Docs/Examples/Sheet/SheetSizeExample.vue?raw'

const usageSource = sheetSource.replaceAll('@/Components/Base/', '@/Components/')
</script>
