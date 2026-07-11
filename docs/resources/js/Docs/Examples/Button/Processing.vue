<template>
  <Button
    variant="outline"
    :disabled="processing"
    @click="runTask"
  >
    <ButtonState :processing="processing">
      Run task
    </ButtonState>
  </Button>
</template>

<script setup lang="ts">
import { Button, ButtonState } from '@/Components/Base/Button'
import { ref } from 'vue'

const processing = ref(false)

function runTask() {
  processing.value = true

  window.setTimeout(() => {
    processing.value = false
  }, 1200)
}
</script>
