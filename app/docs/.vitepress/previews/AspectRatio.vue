<template>
  <AspectRatio :ratio="16 / 9" class="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      class="rounded-md object-cover w-full h-full"
    >
  </AspectRatio>
</template>

<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>
