<template>
  <div class="vp-raw inline-flex gap-2 items-center" v-if="source || primitive">
    <Button v-if="source" variant="secondary" class="text-xs h-6 px-2" as="a" target="_blank" :href="`https://github.com/stacktracelabs/ui/tree/main/${source}`">
      <CodeIcon class="w-4 h-4 mr-2" /> Component Source
    </Button>

    <Button v-if="primitive" variant="secondary" class="text-xs h-6 px-2" as="a" target="_blank" :href="primitive">
      <RekaIcon class="w-4 h-4 mr-2" />
      Primitive API Reference
    </Button>

    <Button v-if="ui" variant="secondary" class="text-xs h-6 px-2" as="a" target="_blank" :href="ui">
      <ShadcnIcon class="w-4 h-4 mr-2" />
      UI Reference
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { CodeIcon } from 'lucide-vue-next'
import ShadcnIcon from './ShadcnIcon.vue'
import RekaIcon from './RekaIcon.vue'

defineProps<{
  source?: string
  primitive?: string
  ui?: string
}>()
</script>
