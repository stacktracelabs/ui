<template>
  <RadioGroup default-value="comfortable" orientation="vertical">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="default" value="default" />
      <Label for="default">Default</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="comfortable" value="comfortable" />
      <Label for="comfortable">Comfortable</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="compact" value="compact" />
      <Label for="compact">Compact</Label>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { Label } from '@/Components/Base/Label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/Components/Base/RadioGroup'
</script>
