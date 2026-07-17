<template>
  <div class="flex w-full max-w-sm flex-col gap-8 py-6">
    <Marker role="status">
      <MarkerContent class="shimmer">
        Thinking…
      </MarkerContent>
    </Marker>
    <Marker variant="separator" role="status">
      <MarkerContent class="shimmer">
        Reading 4 files
      </MarkerContent>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { Marker, MarkerContent } from '@/Components/Base/Marker'
</script>
