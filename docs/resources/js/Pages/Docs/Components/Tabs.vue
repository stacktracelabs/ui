<template>
  <ComponentReferencePage
    title="Tabs"
    description="Organizes content into panels displayed one at a time."
    registry-name="tabs"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Place TabsTrigger components inside TabsList and match every trigger value to one TabsContent panel. StackTrace also provides TabsLink and TabsNavigation for URL-driven navigation."
    :features="['Horizontal and vertical orientation.', 'Default and ghost list variants.', 'Stateful panels and Inertia navigation variants.']"
    api="Exports Tabs, TabsList, TabsTrigger, TabsContent, TabsLink, TabsLinkList, TabsNavigation, and navigation helpers."
    source-url="https://shadcn-vue.com/docs/components/tabs"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Tabs/Default.vue'
import exampleSource from '@/Docs/Examples/Tabs/Default.vue?raw'
</script>
