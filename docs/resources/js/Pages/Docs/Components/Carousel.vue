<template>
  <DocsLayout>
    <Head title="Carousel" />
    <DocsPage
      title="Carousel"
      description="Displays a sequence of slides with touch, pointer, and keyboard navigation."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Carousel component and its Embla dependency from the registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Place each <code>CarouselItem</code> inside
        <code>CarouselContent</code>, then keep previous and next controls next
        to the content. Use a carousel when browsing a sequence benefits from a
        focused viewport. Prefer a grid or list when users need to compare all
        items, scan quickly, or use page search to find content.
      </p>
      <ComponentPreview title="Carousel" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="sizing">Slide sizing and spacing</h2>
      <p>
        Items use <code>basis-full</code> by default. Set a responsive basis on
        every <code>CarouselItem</code> to reveal multiple slides. For custom
        gutters, pair item padding with matching negative margin on
        <code>CarouselContent</code>; changing only one side misaligns the track.
      </p>
      <CodeBlock :code="sizingCode" language="vue" />

      <h2 id="orientation-and-options">Orientation and options</h2>
      <p>
        Set <code>orientation="vertical"</code> for an up-and-down sequence and
        give its viewport an explicit height. Pass Embla options through
        <code>opts</code>; the local wrapper derives Embla's axis from
        <code>orientation</code>, so do not also set a conflicting axis.
      </p>
      <CodeBlock :code="optionsCode" language="vue" />
      <p>
        Looping can suit decorative or continuously browsed content, but it can
        obscure the start and end of a finite process. Avoid autoplay for
        essential content. If autoplay is necessary, provide a visible pause
        control and respect reduced-motion preferences.
      </p>

      <h2 id="state-and-api">State and API</h2>
      <p>
        Listen to <code>@init-api</code> when a parent needs the Embla API for a
        counter, synchronized navigation, or event handling. The root also
        exposes <code>carouselApi</code>, scroll methods, and boundary state
        through a template ref and its default slot. Prefer the slot state when
        controls only need to react to whether scrolling is possible.
      </p>
      <CodeBlock :code="slotStateCode" language="vue" />
      <p>
        <code>useCarousel()</code> is intended for descendants of the root and
        throws outside that context. Remove Embla event listeners when the
        consumer is disposed if you register long-lived callbacks.
      </p>

      <h2 id="accessibility">Accessibility and focus</h2>
      <p>
        The carousel root is a focusable region. Left and right arrow keys move
        a horizontal carousel; up and down move a vertical one. The supplied
        controls have accessible names and become disabled at the ends when the
        carousel is not looping. Keep meaningful slide content in the document
        order and do not hide the only copy of critical information off-screen.
      </p>
      <p>
        If a slide itself is a link, keep navigation controls separate from that
        link. Do not make the entire carousel one large composed control. Read
        the <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before replacing the provided buttons through slots.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DefaultExample from '@/Docs/Examples/Carousel/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Carousel/Default.vue?raw'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/carousel'
const sizingCode = [
  '<CarouselContent class="-ml-2">',
  '  <CarouselItem class="basis-1/2 pl-2 lg:basis-1/3">...</CarouselItem>',
  '  <CarouselItem class="basis-1/2 pl-2 lg:basis-1/3">...</CarouselItem>',
  '</CarouselContent>',
].join('\n')
const optionsCode = [
  '<Carousel',
  '  orientation="horizontal"',
  '  :opts="{ align: \'start\', loop: true }"',
  '>',
  '  ...',
  '</Carousel>',
].join('\n')
const slotStateCode = [
  '<Carousel v-slot="{ canScrollNext, canScrollPrev }">',
  '  <CarouselContent>...</CarouselContent>',
  '  <CarouselPrevious v-if="canScrollPrev" />',
  '  <CarouselNext v-if="canScrollNext" />',
  '</Carousel>',
].join('\n')
</script>
