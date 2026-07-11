<template>
  <div class="flex w-full max-w-sm flex-col gap-8 py-6">
    <Marker>
      <MarkerContent>A default marker for inline notes.</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>A separator marker</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerContent>A bordered marker for row boundaries.</MarkerContent>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { Marker, MarkerContent } from '@/Components/Base/Marker'
</script>
