# Select

Displays a list of options for the user to pick from—triggered by a button.

<ComponentPreview name="Select" />

## Installation

```shell
php artisan ui:add select
```

## Usage

```vue
<template>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">
          Apple
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/Select'
</script>
```

## Examples

### Default

<ComponentPreview name="Select" />

### With Select Options

<ComponentPreview name="SelectOptions" />
