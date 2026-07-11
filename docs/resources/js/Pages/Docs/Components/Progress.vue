<template>
  <DocsLayout>
    <Head title="Progress" />
    <DocsPage
      title="Progress"
      description="Shows measurable completion for a task or process."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Progress component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Progress when a process has a meaningful completion percentage.
        Pass the current value with <code>:model-value</code> and update it from
        the task's real state. The local indicator styling expects a value from
        0 to 100.
      </p>
      <ComponentPreview title="Progress" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="labels">Labels and values</h2>
      <p>
        Name the task and show the percentage in text when either matters to
        the user. Associate that text with the progress bar using
        <code>aria-labelledby</code>, or provide an <code>aria-label</code> when
        no visible label is available. Do not label every bar only “Progress”;
        say what is progressing.
      </p>
      <CodeBlock :code="labelledCode" language="vue" />

      <h2 id="controlled-values">Controlled values</h2>
      <p>
        Progress is read-only feedback, even though its value is controlled by
        application state. Clamp unexpected values before passing them and
        move to 100 only when the work is actually complete. Do not let users
        drag or click a Progress bar; use Slider when they are choosing a
        numeric value.
      </p>
      <CodeBlock :code="controlledCode" language="vue" />

      <h2 id="determinate-versus-indeterminate">Known and unknown duration</h2>
      <p>
        Use Progress only when the amount completed can be estimated honestly.
        A bar that advances arbitrarily or repeatedly stalls at a near-complete
        value creates false precision. For work with unknown duration, use a
        Spinner with concise loading text instead.
      </p>
      <DocsComponentRecommendation
        title="Use Spinner for indeterminate work"
        component-href="/docs/components/spinner"
        component-name="Spinner"
      >
        Spinner communicates that work is active without claiming a percentage.
        Use Skeleton instead when an entire content shape is waiting to load.
      </DocsComponentRecommendation>

      <h2 id="status-and-announcements">Status and announcements</h2>
      <p>
        Progress communicates state; it does not perform or cancel an action.
        Place pause or cancel controls beside it as separately labeled Buttons.
        The progress semantics expose the current value, but changing the bar
        is not a substitute for announcing a final success or failure.
      </p>
      <p>
        Avoid putting every percentage update in an
        <code>aria-live</code> region, which can overwhelm assistive technology.
        Announce meaningful milestones or the final outcome in a separate,
        concise status message when necessary.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Progress/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Progress/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/progress'
const labelledCode = [
  '<div class="flex items-center justify-between">',
  '  <span id="upload-label">Uploading report</span>',
  '  <span>{{ uploadProgress }}%</span>',
  '</div>',
  '<Progress',
  '  :model-value="uploadProgress"',
  '  aria-labelledby="upload-label"',
  '/>',
].join('\n')
const controlledCode = [
  '<Progress :model-value="safeProgress" aria-label="Importing contacts" />',
  '',
  '<script setup lang="ts">',
  "import { computed, ref } from 'vue'",
  '',
  'const progress = ref(0)',
  'const safeProgress = computed(() => Math.min(100, Math.max(0, progress.value)))',
  '</' + 'script>',
].join('\n')
</script>
