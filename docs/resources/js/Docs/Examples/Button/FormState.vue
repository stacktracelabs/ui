<template>
  <Button
    variant="outline"
    :disabled="processing"
    @click="save"
  >
    <ButtonState
      :processing="processing"
      :recently-successful="recentlySuccessful"
    >
      <SaveIcon data-icon="inline-start" />
      Save

      <template #success>Saved</template>
    </ButtonState>
  </Button>
</template>

<script setup lang="ts">
import { Button, ButtonState } from '@/Components/Base/Button'
import { SaveIcon } from '@lucide/vue'
import { ref } from 'vue'

const processing = ref(false)
const recentlySuccessful = ref(false)

function save() {
  if (processing.value || recentlySuccessful.value) {
    return
  }

  processing.value = true

  window.setTimeout(() => {
    processing.value = false
    recentlySuccessful.value = true

    window.setTimeout(() => {
      recentlySuccessful.value = false
    }, 1000)
  }, 1200)
}
</script>
