<template>
  <div class="grid gap-3">
    <RadioGroup v-model="density" orientation="vertical" name="density">
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
    <p class="text-sm text-muted-foreground">
      Selected: {{ density }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Label } from '@/Components/Base/Label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/Components/Base/RadioGroup'
import { ref } from 'vue'

const density = ref('comfortable')
</script>
