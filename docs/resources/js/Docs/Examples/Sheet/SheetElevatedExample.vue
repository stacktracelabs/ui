<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        Open elevated sheet
      </Button>
    </SheetTrigger>
    <SheetContent variant="elevated">
      <SheetHeader>
        <SheetTitle>Workspace settings</SheetTitle>
        <SheetDescription>
          Update the details shown to members of this workspace.
        </SheetDescription>
      </SheetHeader>
      <div class="grid gap-4 px-4 py-2">
        <div class="grid gap-2">
          <Label for="sheet-workspace-name">Workspace name</Label>
          <Input id="sheet-workspace-name" default-value="Just Create" />
        </div>
      </div>
      <SheetFooter class="mt-auto">
        <SheetClose as-child>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </SheetClose>
        <SheetClose as-child>
          <Button type="button">
            Save changes
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import { Input } from '@/Components/Base/Input'
import { Label } from '@/Components/Base/Label'
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
</script>
