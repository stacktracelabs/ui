<template>
  <ComponentReferencePage
    title="Carousel"
    description="A carousel with motion, swipe gestures, and accessible previous and next controls."
    registry-name="carousel"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Place CarouselItem components inside CarouselContent and keep navigation controls adjacent to the content. The useCarousel composable exposes the underlying Embla API for advanced synchronization."
    :features="['Horizontal and vertical orientation.', 'Keyboard, touch, and pointer navigation.', 'Optional plugins through the Carousel root.']"
    api="Exports Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel, and the CarouselApi type."
    source-url="https://shadcn-vue.com/docs/components/carousel"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Carousel/Default.vue'
import exampleSource from '@/Docs/Examples/Carousel/Default.vue?raw'
</script>
