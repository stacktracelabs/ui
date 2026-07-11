<template>
  <div class="flex flex-col items-center gap-4">
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
    <p class="text-sm text-muted-foreground">
      Press <Kbd>Esc</Kbd> to close the command palette.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Kbd, KbdGroup } from '@/Components/Base/Kbd'
</script>
