<template>
  <DocsLayout>
    <Head title="Spinner" />
    <DocsPage
      title="Spinner"
      description="Indicates that work is active when its completion cannot be measured."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Spinner component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Spinner for short, indeterminate work such as submitting an action,
        refreshing a compact region, or waiting for a response. Pair it with
        text that says what is happening when the context is not already clear.
      </p>
      <ComponentPreview title="Spinner" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="composition">Composition</h2>
      <p>
        Spinner inherits the current text color and accepts a class for size,
        so it can sit inside Button, Badge, Input Group, Item, or Empty. In a
        button, disable repeated activation while the operation is running and
        keep the label stable enough that the control does not change width
        unexpectedly.
      </p>
      <CodeBlock :code="buttonCode" language="vue" />

      <h2 id="accessibility">Accessibility</h2>
      <p>
        The local Spinner renders <code>role="status"</code> with the accessible
        label “Loading.” That is suitable for a standalone spinner. When visible
        text such as “Saving changes” already provides the status, hide the
        nested spinner from assistive technology to avoid announcing duplicate
        loading messages.
      </p>
      <CodeBlock :code="labelledCode" language="vue" />
      <p>
        Do not move focus to a spinner. If loading replaces a region, mark that
        region busy and restore real content in place. Announce success or
        failure separately when the outcome is not otherwise apparent.
      </p>

      <h2 id="choosing-feedback">Choosing loading feedback</h2>
      <p>
        Spinner says only that work is active. Use Progress when a trustworthy
        percentage exists and Skeleton when the shape of incoming content is
        known. If an operation takes long enough to need cancellation or an
        explanation, add those controls and text beside the indicator.
      </p>
      <DocsComponentRecommendation
        title="Use Progress for measurable completion"
        component-href="/docs/components/progress"
        component-name="Progress"
      >
        Show Progress when the user benefits from knowing how much work remains
        and the application can provide an honest value from 0 to 100.
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
import DefaultExample from '@/Docs/Examples/Spinner/Default.vue'
import exampleSource from '@/Docs/Examples/Spinner/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/spinner'
const buttonCode = [
  '<Button type="submit" :disabled="saving">',
  '  <Spinner v-if="saving" aria-hidden="true" />',
  '  {{ saving ? \'Saving changes\' : \'Save changes\' }}',
  '</Button>',
].join('\n')
const labelledCode = [
  '<div role="status" class="flex items-center gap-2">',
  '  <Spinner aria-hidden="true" />',
  '  <span>Refreshing activity</span>',
  '</div>',
].join('\n')
</script>
