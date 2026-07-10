<template>
  <Button
    variant="outline"
    :processing="processing"
    @click="processing = !processing"
  >
    Toggle processing
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import { ref } from 'vue'

const processing = ref(false)
</script>
