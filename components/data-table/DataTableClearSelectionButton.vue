<template>
  <Button v-if="somethingSelected" @click="selectableRows.clearSelection()" size="sm" variant="outline">
    <XIcon class="w-4 h-4 mr-1" />
    {{ messages.cancelSelection }}
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { injectContext } from './internal'
import messages from './messages'
import { XIcon } from 'lucide-vue-next'

const { somethingSelected, selectableRows } = injectContext()
</script>
