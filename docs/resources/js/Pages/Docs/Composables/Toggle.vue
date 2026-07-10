<template>
  <DocsLayout>
    <Head title="useToggle" />
    <DocsPage
      title="useToggle"
      description="A small reactive controller for boolean active state."
    >
      <div class="space-y-10">
        <ComponentPreview :source="toggleSource">
          <ToggleExample />
        </ComponentPreview>

        <section class="space-y-4">
          <h2 id="installation">
            Installation
          </h2>
          <p>
            Add the composable from the registry by following the
            <Link href="/docs/installation">installation guide</Link>.
          </p>
        </section>

        <section class="space-y-4">
          <h2 id="usage">
            Usage
          </h2>
          <CodeBlock :code="toggleSource" language="vue" filename="ToggleExample.vue" />
        </section>

        <section class="space-y-6">
          <h2 id="api">
            API
          </h2>

          <div class="space-y-3">
            <h3 id="use-toggle">
              useToggle
            </h3>
            <p>
              Pass an optional initial boolean. The returned controller exposes the
              <code>active</code> ref plus <code>activate</code> and <code>deactivate</code> methods.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="activation-callbacks">
              Activation callbacks
            </h3>
            <p>
              Use <code>onActivated</code> or <code>onDeactivated</code> to run a callback
              when the controller enters the corresponding state.
            </p>
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
import ToggleExample from '@/Docs/Examples/Toggle/ToggleExample.vue'
import toggleSource from '@/Docs/Examples/Toggle/ToggleExample.vue?raw'
</script>
