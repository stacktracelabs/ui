<template>
  <ActionButton @click="processing = !processing" :processing="processing" variant="outline">Click me</ActionButton>
</template>

<script setup lang="ts">
import { ActionButton } from '@/Components/Button'
import { ref } from 'vue'

const processing = ref(false)
</script>
