<template>
  <div class="flex w-full max-w-sm flex-col gap-8 py-6">
    <Marker as-child>
      <a href="#links-and-buttons">
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>View the pull request</MarkerContent>
      </a>
    </Marker>
    <Marker as-child>
      <button
        type="button"
        class="transition-colors hover:text-foreground"
        @click="reverted = true"
      >
        <MarkerIcon>
          <RotateCcwIcon />
        </MarkerIcon>
        <MarkerContent>{{ reverted ? 'Change reverted' : 'Revert this change' }}</MarkerContent>
      </button>
    </Marker>
  </div>
</template>

<script setup lang="ts">
import { GitBranchIcon, RotateCcwIcon } from '@lucide/vue'
import { ref } from 'vue'
import { Marker, MarkerContent, MarkerIcon } from '@/Components/Base/Marker'

const reverted = ref(false)
</script>
