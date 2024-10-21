# Popover

Displays rich content in a portal, triggered by a button.

<ComponentPreview name="Popover" />

## Installation

```shell
php artisan ui:add popover
```

## Usage

```vue
<template>
  <Popover>
    <PopoverTrigger>
      Open popover
    </PopoverTrigger>
    <PopoverContent>
      Some popover content
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/Popover'
</script>
```
