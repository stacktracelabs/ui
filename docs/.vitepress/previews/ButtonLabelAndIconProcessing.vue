<template>
  <ActionButton @click="save" :recently-successful="recentlySuccessful" :processing="processing" label="Save" variant="outline" :icon="SaveIcon" />
</template>

<script setup lang="ts">
import { ActionButton } from '@/Components/Button'
import { SaveIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const recentlySuccessful = ref(false)
const processing = ref(false)

const save = () => {
  if (processing.value || recentlySuccessful.value) {
    return
  }

  processing.value = true

  setTimeout(() => {
    processing.value = false

    recentlySuccessful.value = true

    setTimeout(() => {
      recentlySuccessful.value = false
    }, 1000)
  }, 2000)
}
</script>
