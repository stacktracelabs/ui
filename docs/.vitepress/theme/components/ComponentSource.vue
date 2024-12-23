<template>
  <div class="vp-raw inline-flex gap-2 items-center" v-if="source || primitive">
    <Button v-if="source" size="xs" variant="secondary" class="text-xs h-6" as="a" target="_blank" :href="`https://github.com/stacktracelabs/ui/tree/main/package/stubs/${source}`">
      <CodeIcon class="w-4 h-4 mr-2" /> Component Source
    </Button>

    <Button v-if="primitive" size="xs" variant="secondary" class="text-xs h-6" as="a" target="_blank" :href="primitive">
      <RadixIcon class="w-4 h-4 mr-2" />
      Primitive API Reference
    </Button>

    <Button v-if="ui" size="xs" variant="secondary" class="text-xs h-6" as="a" target="_blank" :href="ui">
      <ShadcnIcon class="w-4 h-4 mr-2" />
      UI Reference
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Button'
import { CodeIcon } from 'lucide-vue-next'
import RadixIcon from './RadixIcon.vue'
import ShadcnIcon from './ShadcnIcon.vue'

defineProps<{
  source?: string
  primitive?: string
  ui?: string
}>()
</script>
