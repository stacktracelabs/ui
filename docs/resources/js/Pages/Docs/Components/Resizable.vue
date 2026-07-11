<template>
  <ComponentReferencePage
    title="Resizable"
    description="Accessible resizable panel groups for adjustable application layouts."
    registry-name="resizable"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Place panels and handles directly inside ResizablePanelGroup. Provide sensible default and minimum sizes so the layout remains usable before and after resizing."
    :features="['Horizontal and vertical panel groups.', 'Pointer and keyboard resizing.', 'Optional visible handle grip.']"
    api="Exports ResizablePanelGroup, ResizablePanel, and ResizableHandle."
    source-url="https://shadcn-vue.com/docs/components/resizable"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Resizable/Default.vue'
import exampleSource from '@/Docs/Examples/Resizable/Default.vue?raw'
</script>
