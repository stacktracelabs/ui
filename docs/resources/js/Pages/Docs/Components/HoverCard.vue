<template>
  <ComponentReferencePage
    title="Hover Card"
    description="Shows a preview card when a user hovers over or focuses a trigger."
    registry-name="hover-card"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Use Hover Card for supplementary previews that are not required to complete a task. Essential actions and information should remain available without hovering."
    :features="['Pointer and keyboard activation.', 'Configurable opening and closing delays.', 'Collision-aware positioning.']"
    api="Compose HoverCardTrigger and HoverCardContent under HoverCard."
    source-url="https://shadcn-vue.com/docs/components/hover-card"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/HoverCard/Default.vue'
import exampleSource from '@/Docs/Examples/HoverCard/Default.vue?raw'
</script>
