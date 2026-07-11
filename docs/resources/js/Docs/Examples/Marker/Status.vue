<template>
  <div class="flex w-full max-w-sm flex-col gap-8 py-6">
    <Marker role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Compacting conversation</MarkerContent>
    </Marker>
    <Marker variant="separator" role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Running tests</MarkerContent>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { Marker, MarkerContent, MarkerIcon } from '@/Components/Base/Marker'
import { Spinner } from '@/Components/Base/Spinner'
</script>
