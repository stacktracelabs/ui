<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        Open wide sheet
      </Button>
    </SheetTrigger>
    <SheetContent class="w-[400px] sm:max-w-lg">
      <SheetHeader>
        <SheetTitle>Custom width</SheetTitle>
        <SheetDescription>
          Set the sheet width with utility classes on SheetContent.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
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
</script>
