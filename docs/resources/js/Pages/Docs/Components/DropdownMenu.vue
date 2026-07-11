<template>
  <ComponentReferencePage
    title="Dropdown Menu"
    description="Displays a menu of actions or choices from a trigger."
    registry-name="dropdown-menu"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Place items inside DropdownMenuGroup, separate unrelated actions, and use checkbox or radio items for persistent choices. DropdownMenuLink is available for Inertia navigation."
    :features="['Items, links, checkboxes, and radio choices.', 'Nested submenus and keyboard navigation.', 'Labels, separators, and shortcuts.']"
    api="DropdownMenu exports trigger, content, group, item, link, label, separator, shortcut, checkbox, radio, submenu, and portal primitives."
    source-url="https://shadcn-vue.com/docs/components/dropdown-menu"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/DropdownMenu/Default.vue'
import exampleSource from '@/Docs/Examples/DropdownMenu/Default.vue?raw'
</script>
