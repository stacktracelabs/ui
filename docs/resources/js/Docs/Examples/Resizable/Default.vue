<template>
  <ResizablePanelGroup direction="horizontal" class="min-h-48 max-w-md rounded-lg border">
    <ResizablePanel :default-size="50">
      <div class="flex h-full items-center justify-center p-6">Navigation</div>
    </ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel :default-size="50">
      <div class="flex h-full items-center justify-center p-6">Content</div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/Components/Base/Resizable'
</script>
