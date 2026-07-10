<template>
  <DocsLayout>
    <Head title="Switch" />
    <DocsPage
      title="Switch"
      description="A control that lets the user toggle between checked and unchecked states."
    >
      <div class="space-y-10">
        <ComponentPreview :source="switchSource">
          <SwitchExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add Switch from the component registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="usageSource" language="vue" filename="SwitchExample.vue" />
        </section>

        <section class="space-y-6">
          <h2 id="examples">
            Examples
          </h2>

          <div class="space-y-4">
            <h3 id="control">
              Control
            </h3>
            <p>Use <code>SwitchControl</code> for a switch with an associated label.</p>
            <ComponentPreview :source="switchControlSource">
              <SwitchControlExample />
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
import SwitchControlExample from '@/Docs/Examples/Switch/SwitchControlExample.vue'
import switchControlSource from '@/Docs/Examples/Switch/SwitchControlExample.vue?raw'
import SwitchExample from '@/Docs/Examples/Switch/SwitchExample.vue'
import switchSource from '@/Docs/Examples/Switch/SwitchExample.vue?raw'

const usageSource = switchSource.replaceAll('@/Components/Base/', '@/Components/')
</script>
