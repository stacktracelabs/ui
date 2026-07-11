<template>
  <div class="flex w-full max-w-sm flex-col gap-10 py-6">
    <Marker>
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to a new branch</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerIcon>
        <SearchIcon />
      </MarkerIcon>
      <MarkerContent>Explored 4 files</MarkerContent>
    </Marker>
    <Marker class="flex-col">
      <MarkerIcon>
        <BookOpenCheckIcon />
      </MarkerIcon>
      <MarkerContent>Sync completed</MarkerContent>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { BookOpenCheckIcon, GitBranchIcon, SearchIcon } from '@lucide/vue'
import { Marker, MarkerContent, MarkerIcon } from '@/Components/Base/Marker'
</script>
