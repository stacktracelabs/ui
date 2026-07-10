<template>
  <div class="grid grid-cols-2 gap-2">
    <Sheet v-for="side in sheetSides" :key="side">
      <SheetTrigger as-child>
        <Button class="capitalize" variant="outline">
          {{ side }}
        </Button>
      </SheetTrigger>
      <SheetContent :side="side">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            This sheet opens from the {{ side }} edge of the screen.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose as-child>
            <Button type="button">
              Done
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/Components/Base/Sheet'

const sheetSides = ['top', 'right', 'bottom', 'left'] as const
</script>
