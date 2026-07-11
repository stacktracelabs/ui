<template>
  <NumberField
    id="quantity"
    v-model="value"
    :min="0"
    :max="100"
    class="w-40"
  >
    <Label for="quantity">Quantity</Label>
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/Components/Base/Label'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/Components/Base/NumberField'

const value = ref(12)
</script>
