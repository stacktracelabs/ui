<template>
  <DocsLayout>
    <Head title="Skeleton" />
    <DocsPage
      title="Skeleton"
      description="Reserves the shape of content while that content is loading."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Skeleton component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose Skeleton blocks to approximate the content that will replace
        them. Match the final width, height, spacing, and radius closely enough
        to keep the layout stable, without reproducing every decorative detail.
      </p>
      <ComponentPreview title="Skeleton" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="loading-state">Loading state</h2>
      <p>
        Skeleton has no model or loading prop. Render the placeholder and the
        real content conditionally from the same loading state, then replace
        the complete placeholder group at once. Mark the containing region
        <code>aria-busy="true"</code> while it is loading.
      </p>
      <CodeBlock :code="loadingCode" language="vue" />

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Skeleton is visual scaffolding, not content or a progress indicator.
        Hide the placeholder group from assistive technology and provide one
        concise loading label on the containing region when an announcement is
        useful. Do not expose fake headings, avatars, or rows to the accessibility
        tree.
      </p>
      <p>
        The component pulses by default. Add
        <code>motion-reduce:animate-none</code> when composing placeholders so
        users who prefer reduced motion are not required to watch the animation.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <p>
        Use Skeleton when the layout is known and content is expected soon,
        especially for cards, lists, and deferred page regions. Avoid it for a
        single button action, an unknown long-running process, or an empty
        result. Those states need processing feedback, Progress or Spinner, or
        a real Empty message respectively.
      </p>
      <DocsComponentRecommendation
        title="Use Spinner for compact processing"
        component-href="/docs/components/spinner"
        component-name="Spinner"
      >
        Use Spinner with a loading label when work is occurring in a compact
        control or when the eventual content shape is not known.
      </DocsComponentRecommendation>

      <h2 id="layout-guidance">Layout guidance</h2>
      <p>
        Preserve the number and approximate size of important content blocks,
        but keep the placeholder quieter than real content. A stable shell is
        more useful than a dense imitation. If loading routinely lasts long
        enough to need explanation or recovery, show that message instead of
        leaving the skeleton on screen indefinitely.
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
import DefaultExample from '@/Docs/Examples/Skeleton/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Skeleton/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/skeleton'
const loadingCode = [
  '<section :aria-busy="loading">',
  '  <div v-if="loading" aria-hidden="true" class="space-y-3">',
  '    <Skeleton class="h-6 w-48 motion-reduce:animate-none" />',
  '    <Skeleton class="h-20 w-full motion-reduce:animate-none" />',
  '  </div>',
  '  <ProjectSummary v-else :project="project" />',
  '</section>',
].join('\n')
</script>
