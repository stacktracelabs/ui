<template>
  <div class="grid grid-cols-2 gap-2">
    <Sheet v-for="side in SHEET_SIDES" :key="side">
      <SheetTrigger as-child>
        <Button variant="outline">
          {{ side }}
        </Button>
      </SheetTrigger>
      <SheetContent :side="side">
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
  </div>
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
import { ref } from 'vue'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

const username = ref('')
</script>
