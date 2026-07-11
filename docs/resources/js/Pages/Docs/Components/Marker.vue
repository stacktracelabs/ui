<template>
  <DocsLayout>
    <Head title="Marker" />
    <DocsPage
      title="Marker"
      description="Displays an inline status, system note, bordered row, or labeled separator in a conversation."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Marker from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="composition">Composition</h2>
      <p>
        Compose the root with an optional decorative icon and a content slot.
        The root forwards primitive props, so it can render another element or
        adopt a child with <code>as-child</code>.
      </p>
      <CodeBlock :code="compositionCode" language="text" />

      <h2 id="features">Features</h2>
      <ul>
        <li>Default, bordered, and labeled-separator variants.</li>
        <li>A decorative icon slot hidden from assistive technology.</li>
        <li>Polymorphic rendering through <code>as</code> and <code>as-child</code>.</li>
        <li>Semantic roles chosen by the consumer for each use case.</li>
      </ul>

      <h2 id="examples">Examples</h2>

      <h3 id="variants">Variants</h3>
      <p>Use the default marker for notes, separator for labeled divisions, and border for row boundaries.</p>
      <ComponentPreview title="Variants" :source="variantsExampleSource">
        <VariantsExample />
      </ComponentPreview>

      <h3 id="status">Status</h3>
      <p>Add <code>role="status"</code> when the marker reports a live, non-urgent update.</p>
      <ComponentPreview title="Status" :source="statusExampleSource">
        <StatusExample />
      </ComponentPreview>

      <h3 id="shimmer">Shimmer</h3>
      <p>
        Marker content can carry an optional text animation for ongoing work.
        Keep a reduced-motion fallback when adding this effect.
      </p>
      <ComponentPreview title="Shimmer" :source="shimmerExampleSource">
        <ShimmerExample />
      </ComponentPreview>

      <h3 id="separator">Separator</h3>
      <p>Use a labeled separator to divide a timeline or conversation without adding a separator role.</p>
      <ComponentPreview title="Separator" :source="separatorExampleSource">
        <SeparatorExample />
      </ComponentPreview>

      <h3 id="border">Border</h3>
      <p>The border variant adds a decorative bottom rule while retaining the marker's chosen semantics.</p>
      <ComponentPreview title="Border" :source="borderExampleSource">
        <BorderExample />
      </ComponentPreview>

      <h3 id="with-icon">With icon</h3>
      <p>Place an icon inside <code>MarkerIcon</code>; adjacent text should communicate the same meaning.</p>
      <ComponentPreview title="With icon" :source="withIconExampleSource">
        <WithIconExample />
      </ComponentPreview>

      <h3 id="links-and-buttons">Links and buttons</h3>
      <p>
        Use <code>as-child</code> when a marker is interactive so the rendered
        element remains a real link or button.
      </p>
      <ComponentPreview title="Links and buttons" :source="interactiveExampleSource">
        <InteractiveExample />
      </ComponentPreview>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Marker is presentational by default. Add <code>role="status"</code> for
        live progress, keep meaningful labels as ordinary content, and avoid
        <code>role="separator"</code> on separators that contain text.
      </p>
      <p>
        <code>MarkerIcon</code> is always decorative. Provide visible
        <code>MarkerContent</code> or an accessible label when an icon is the
        only visible child.
      </p>

      <h2 id="content-and-state">Content and state</h2>
      <p>
        Marker presents content supplied by its parent. Keep timestamps,
        progress text, status changes, and link destinations in the owning
        feature; choose <code>role="status"</code> only when a newly rendered
        non-urgent update should be announced. A shimmer is visual feedback,
        not a replacement for a concrete progress label.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Marker for short conversation notes, timeline boundaries, and inline system status.</li>
        <li>Use Separator for an unlabeled structural boundary outside a conversation or timeline.</li>
        <li>Use Alert when the message needs stronger visual priority or dedicated action content.</li>
        <li>Avoid Marker for persistent record metadata that belongs in Item, Panel, or Table.</li>
      </ul>

      <h2 id="api-reference">API Reference</h2>

      <h3 id="marker">Marker</h3>
      <p>The root marker element. It also exports <code>markerVariants</code>.</p>
      <ul>
        <li><code>variant</code>: <code>default</code>, <code>separator</code>, or <code>border</code>.</li>
        <li><code>as</code>: the element or component to render; defaults to <code>div</code>.</li>
        <li><code>as-child</code>: merges Marker behavior into its single child.</li>
        <li><code>class</code>: additional classes merged with the selected variant.</li>
      </ul>

      <h3 id="marker-icon">MarkerIcon</h3>
      <p>A decorative icon container with <code>aria-hidden="true"</code>.</p>

      <h3 id="marker-content">MarkerContent</h3>
      <p>The marker's text content, including link styling and separator alignment.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import BorderExample from '@/Docs/Examples/Marker/Border.vue'
import borderExampleSource from '@/Docs/Examples/Marker/Border.vue?raw'
import DefaultExample from '@/Docs/Examples/Marker/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Marker/Default.vue?raw'
import InteractiveExample from '@/Docs/Examples/Marker/Interactive.vue'
import interactiveExampleSource from '@/Docs/Examples/Marker/Interactive.vue?raw'
import SeparatorExample from '@/Docs/Examples/Marker/Separator.vue'
import separatorExampleSource from '@/Docs/Examples/Marker/Separator.vue?raw'
import ShimmerExample from '@/Docs/Examples/Marker/Shimmer.vue'
import shimmerExampleSource from '@/Docs/Examples/Marker/Shimmer.vue?raw'
import StatusExample from '@/Docs/Examples/Marker/Status.vue'
import statusExampleSource from '@/Docs/Examples/Marker/Status.vue?raw'
import VariantsExample from '@/Docs/Examples/Marker/Variants.vue'
import variantsExampleSource from '@/Docs/Examples/Marker/Variants.vue?raw'
import WithIconExample from '@/Docs/Examples/Marker/WithIcon.vue'
import withIconExampleSource from '@/Docs/Examples/Marker/WithIcon.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/marker'
const compositionCode = `Marker
├── MarkerIcon
└── MarkerContent`
</script>
