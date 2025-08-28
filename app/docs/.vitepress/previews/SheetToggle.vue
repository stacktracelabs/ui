<template>
  <div class="flex flex-col items-center gap-2">
    <Button variant="outline" @click="control.activate">
      Open
    </Button>

    <code>Activated: {{ control.active.value }}</code>
  </div>

  <Sheet :control="control">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="grid gap-4 py-4">
        <FormControl label="Name" for="name">
          <Input id="name" value="Pedro Duarte" />
        </FormControl>

        <FormControl label="Username" for="username">
          <Input id="username" value="@peduarte" />
        </FormControl>
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit">
            Save changes
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
<script setup lang="ts">
import { Button } from '@/Components/Button'
import { Input } from '@/Components/Input'
import { FormControl } from '@/Components/Form'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/Components/Sheet'
import { useToggle } from '@stacktrace/ui'

const control = useToggle()
</script>
