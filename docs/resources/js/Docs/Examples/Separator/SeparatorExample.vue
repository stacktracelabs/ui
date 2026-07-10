<template>
  <div>
    <div class="space-y-1">
      <p class="text-sm font-medium leading-none">
        Reka UI primitives
      </p>
      <p class="text-sm text-muted-foreground">
        Accessible Vue building blocks for design systems.
      </p>
    </div>
    <Separator class="my-4" />
    <div class="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Separator } from '@/Components/Base/Separator'
</script>
