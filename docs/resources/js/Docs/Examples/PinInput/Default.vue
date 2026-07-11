<template>
  <PinInput v-model="value" placeholder="○">
    <PinInputGroup>
      <PinInputSlot v-for="index in 3" :key="index" :index="index - 1" />
    </PinInputGroup>
    <PinInputSeparator />
    <PinInputGroup>
      <PinInputSlot v-for="index in 3" :key="index" :index="index + 2" />
    </PinInputGroup>
  </PinInput>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  PinInput,
  PinInputGroup,
  PinInputSeparator,
  PinInputSlot,
} from '@/Components/Base/PinInput'

const value = ref<string[]>([])
</script>
