<template>
  <ComponentReferencePage
    title="Drawer"
    description="A touch-friendly panel that slides from the edge of the viewport."
    registry-name="drawer"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Use Drawer for compact mobile workflows and actions that benefit from swipe-to-close behavior. Always provide DrawerTitle and a clear closing action."
    :features="['Drag and swipe interaction.', 'Controlled and uncontrolled state.', 'Header, footer, description, and close primitives.']"
    api="Compose DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, and DrawerClose under Drawer."
    source-url="https://shadcn-vue.com/docs/components/drawer"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Drawer/Default.vue'
import exampleSource from '@/Docs/Examples/Drawer/Default.vue?raw'
</script>
