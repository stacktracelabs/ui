<template>
  <div class="flex flex-wrap gap-2">
    <Sheet v-for="size in sheetSizes" :key="size">
      <SheetTrigger as-child>
        <Button class="uppercase" variant="outline">
          {{ size }}
        </Button>
      </SheetTrigger>
      <SheetContent :size="size">
        <SheetHeader>
          <SheetTitle>{{ sizeLabels[size] }} sheet</SheetTitle>
          <SheetDescription>
            This preset is ready for workflows that need {{ sizeDescriptions[size] }}.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/Components/Base/Sheet'

const sheetSizes = ['sm', 'md', 'lg', 'full'] as const

const sizeLabels = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Half-screen',
  full: 'Full',
}

const sizeDescriptions = {
  sm: 'a compact panel',
  md: 'more room for forms',
  lg: 'half of the viewport',
  full: 'the available viewport',
}
</script>
