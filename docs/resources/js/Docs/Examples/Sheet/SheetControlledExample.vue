<template>
  <div class="flex flex-col items-center gap-3">
    <Button variant="outline" @click="control.activate">
      Open sheet
    </Button>
    <code class="text-sm">Active: {{ control.active.value }}</code>

    <Sheet :control="control">
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Controlled sheet</SheetTitle>
          <SheetDescription>
            The useToggle composable controls this sheet's open state.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose as-child>
            <Button type="button">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '@/Composables/Base/useToggle'
import { Button } from '@/Components/Base/Button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/Components/Base/Sheet'

const control = useToggle()
</script>
