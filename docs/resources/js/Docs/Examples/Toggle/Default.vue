<template>
  <Toggle v-model="enabled" aria-label="Toggle bold" variant="outline">
    <BoldIcon />
    Bold
  </Toggle>
</template>

<script setup lang="ts">
import { BoldIcon } from '@lucide/vue'
import { ref } from 'vue'
import { Toggle } from '@/Components/Base/Toggle'

const enabled = ref(false)
</script>
