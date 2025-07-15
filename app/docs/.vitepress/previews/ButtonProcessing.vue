<template>
  <Button @click="processing = !processing" :processing="processing" variant="outline">Click me</Button>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Button'
import { ref } from 'vue'

const processing = ref(false)
</script>
