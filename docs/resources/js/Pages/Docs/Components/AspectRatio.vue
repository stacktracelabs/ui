<template>
  <DocsLayout>
    <Head title="Aspect Ratio" />
    <DocsPage title="Aspect Ratio" description="Keeps media and other content at a predictable width-to-height ratio.">
      <h2 id="installation">Installation</h2>
      <p>Add Aspect Ratio from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Give the component a numeric <code>ratio</code>, such as
        <code>16 / 9</code>, and size its width from the surrounding layout.
        The height follows automatically. Make the child fill the frame and
        choose <code>object-cover</code> or <code>object-contain</code> according
        to whether cropping is acceptable.
      </p>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="responsive-media">Responsive media</h2>
      <p>
        Aspect Ratio is width-driven, so place width and maximum-width classes
        on a parent or on the component. It does not impose a fixed pixel size.
        This makes one composition work across breakpoints while preventing
        layout shift as images or embeds load.
      </p>
      <p>
        Use the default ratio of <code>1</code> for square content. Match the
        ratio to the intended presentation rather than the source asset when
        a consistent gallery or card grid matters more than showing every
        pixel.
      </p>

      <h2 id="semantics-and-accessibility">Semantics and accessibility</h2>
      <p>
        The component controls geometry, not meaning. Keep useful image
        <code>alt</code> text, video captions, iframe titles, and interactive
        controls on the slotted content. Do not use Aspect Ratio to replace
        intrinsic media dimensions when the natural proportions must remain
        visible.
      </p>

      <h2 id="recommendations">Recommendations</h2>
      <ul>
        <li>Use it for thumbnails, video frames, maps, and predictable media slots.</li>
        <li>Avoid it for prose or content whose height should grow naturally.</li>
        <li>Use CSS <code>aspect-ratio</code> directly when no reusable Vue composition is needed.</li>
        <li>The root forwards Reka primitive props, including <code>as</code> and <code>as-child</code>; read the <Link href="/docs/fundamentals/composition">composition fundamentals</Link> before changing the rendered element.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/AspectRatio/Default.vue'
import defaultExampleSource from '@/Docs/Examples/AspectRatio/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/aspect-ratio'
</script>
