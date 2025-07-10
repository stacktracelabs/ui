# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

<ComponentPreview name="Tooltip" />

## Installation

```shell
php artisan ui:add tooltip
```

## Usage

```vue
<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/Components/Tooltip'
</script>
```
