<template>
  <div class="w-full max-w-2xl">
    <AspectRatio :ratio="16 / 9" class="overflow-hidden rounded-md bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1200&dpr=2&q=80"
        alt="Abstract white architectural surface"
        class="size-full object-cover"
      >
    </AspectRatio>
  </div>
</template>

<script setup lang="ts">
import { AspectRatio } from '@/Components/Base/AspectRatio'
</script>
