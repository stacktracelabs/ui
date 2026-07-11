<template>
  <div class="flex w-full max-w-md flex-col gap-3">
    <div class="flex items-center justify-between text-sm">
      <span id="package-upload-label">Uploading package</span>
      <span class="text-muted-foreground">{{ value }}%</span>
    </div>
    <Progress :model-value="value" aria-labelledby="package-upload-label" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from '@/Components/Base/Progress'

const value = ref(68)
</script>
