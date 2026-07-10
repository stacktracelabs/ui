<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        Open
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Save when you are finished.
        </SheetDescription>
      </SheetHeader>
      <div class="grid gap-4 px-4 py-2">
        <div class="grid gap-2">
          <Label for="sheet-name">Name</Label>
          <Input id="sheet-name" default-value="Pedro Duarte" />
        </div>
        <div class="grid gap-2">
          <Label for="sheet-username">Username</Label>
          <Input id="sheet-username" default-value="@peduarte" />
        </div>
      </div>
      <SheetFooter>
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
