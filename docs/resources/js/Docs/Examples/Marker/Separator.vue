<template>
  <div class="flex w-full max-w-sm flex-col gap-8 py-6">
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Worked for 42 seconds</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Conversation compacted</MarkerContent>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { Marker, MarkerContent } from '@/Components/Base/Marker'
</script>
