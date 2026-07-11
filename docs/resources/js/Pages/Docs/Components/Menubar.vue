<template>
  <ComponentReferencePage
    title="Menubar"
    description="A persistent horizontal menu commonly used for application commands."
    registry-name="menubar"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Group related application commands beneath clearly named triggers. Use shortcuts as supplementary hints and provide checkbox or radio items for persistent settings."
    :features="['Keyboard navigation across menus.', 'Checkboxes, radio groups, and nested submenus.', 'Labels, separators, and shortcut hints.']"
    api="Menubar exports root, menu, trigger, content, group, item, label, separator, shortcut, checkbox, radio, and submenu primitives."
    source-url="https://shadcn-vue.com/docs/components/menubar"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Menubar/Default.vue'
import exampleSource from '@/Docs/Examples/Menubar/Default.vue?raw'
</script>
