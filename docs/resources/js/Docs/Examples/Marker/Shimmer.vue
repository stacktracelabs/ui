<template>
  <div class="flex w-full max-w-sm flex-col gap-8 py-6">
    <Marker role="status">
      <MarkerContent class="marker-shimmer">
        Thinking…
      </MarkerContent>
    </Marker>
    <Marker variant="separator" role="status">
      <MarkerContent class="marker-shimmer">
        Reading 4 files
      </MarkerContent>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { Marker, MarkerContent } from '@/Components/Base/Marker'
</script>

<style scoped>
.marker-shimmer {
  color: transparent;
  background-image: linear-gradient(
    90deg,
    var(--muted-foreground) 35%,
    var(--foreground) 50%,
    var(--muted-foreground) 65%
  );
  background-size: 200% 100%;
  background-clip: text;
  animation: marker-shimmer 2s linear infinite;
}

@keyframes marker-shimmer {
  to {
    background-position: -200% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marker-shimmer {
    animation: none;
  }
}
</style>
