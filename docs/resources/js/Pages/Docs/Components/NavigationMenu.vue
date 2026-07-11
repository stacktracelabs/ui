<template>
  <ComponentReferencePage
    title="Navigation Menu"
    description="A responsive collection of navigation links and expandable content."
    registry-name="navigation-menu"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Use NavigationMenu for site-level navigation rather than one-off actions. This repository's NavigationMenuLink renders an Inertia Link by default."
    :features="['Expandable content panels.', 'Keyboard navigation and focus management.', 'Inertia-aware links and active state styling.']"
    api="Compose NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, and NavigationMenuLink under NavigationMenu."
    source-url="https://shadcn-vue.com/docs/components/navigation-menu"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/NavigationMenu/Default.vue'
import exampleSource from '@/Docs/Examples/NavigationMenu/Default.vue?raw'
</script>
