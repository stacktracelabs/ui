# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

<ComponentPreview name="RadioGroup" />

## Installation

```bash
php artisan ui:add radio-group
```

## Usage

```vue
<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label for="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { Label } from '@/Components/Label'
import { RadioGroup, RadioGroupItem } from '@/Components/RadioGroup'
</script>
```
