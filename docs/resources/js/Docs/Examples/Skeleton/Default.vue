<template>
  <div class="flex items-center gap-4">
    <Skeleton class="size-12 rounded-full" />
    <div class="flex flex-col gap-2">
      <Skeleton class="h-4 w-52" />
      <Skeleton class="h-4 w-36" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@/Components/Base/Skeleton'
</script>
