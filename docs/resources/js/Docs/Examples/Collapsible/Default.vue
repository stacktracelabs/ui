<template>
  <Collapsible
    v-model:open="isOpen"
    class="w-full max-w-sm space-y-2"
  >
    <div class="flex items-center justify-between gap-4 px-4">
      <h4 class="text-sm font-semibold">
        @ragoniz starred 3 repositories
      </h4>
      <CollapsibleTrigger as-child>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Toggle repositories"
        >
          <ChevronsUpDownIcon />
        </Button>
      </CollapsibleTrigger>
    </div>
    <div class="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/primitives
    </div>
    <CollapsibleContent class="space-y-2">
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/colors
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        @stitches/react
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/Components/Base/Collapsible'
import { ChevronsUpDownIcon } from '@lucide/vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>
