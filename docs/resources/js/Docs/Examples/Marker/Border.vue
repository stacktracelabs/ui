<template>
  <div class="flex w-full max-w-sm flex-col gap-3 py-6">
    <Marker variant="border">
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to release-candidate</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerIcon>
        <SearchIcon />
      </MarkerIcon>
      <MarkerContent>Reviewed 8 related files</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerIcon>
        <FileTextIcon />
      </MarkerIcon>
      <MarkerContent>Opened implementation notes</MarkerContent>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { FileTextIcon, GitBranchIcon, SearchIcon } from '@lucide/vue'
import { Marker, MarkerContent, MarkerIcon } from '@/Components/Base/Marker'
</script>
