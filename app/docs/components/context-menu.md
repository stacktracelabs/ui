# Context Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button.

<ComponentSource
  source="components/context-menu"
  primitive="https://www.reka-ui.com/docs/components/context-menu"
  ui="https://www.shadcn-vue.com/docs/components/context-menu.html"
/>

<ComponentPreview name="ContextMenu" />

## Installation

```shell
php artisan ui:add context-menu
```

## Usage

```vue
<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
      <ContextMenuItem>Subscription</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>

<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/Components/ContextMenu'
</script>
```
