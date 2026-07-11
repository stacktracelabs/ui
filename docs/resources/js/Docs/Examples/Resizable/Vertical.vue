<template>
  <ResizablePanelGroup direction="vertical" class="min-h-64 max-w-md rounded-lg border">
    <ResizablePanel :default-size="60" :min-size="30">
      <div class="flex h-full items-center justify-center p-6">Preview</div>
    </ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel :default-size="40" :min-size="20">
      <div class="flex h-full items-center justify-center p-6">Console</div>
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
