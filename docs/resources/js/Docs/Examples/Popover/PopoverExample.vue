<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">
        Open popover
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">
            Dimensions
          </h4>
          <p class="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="width">Width</Label>
            <Input
              id="width"
              type="text"
              default-value="100%"
              class="col-span-2 h-8"
            />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="max-width">Max. width</Label>
            <Input
              id="max-width"
              type="text"
              default-value="300px"
              class="col-span-2 h-8"
            />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="height">Height</Label>
            <Input
              id="height"
              type="text"
              default-value="25px"
              class="col-span-2 h-8"
            />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="max-height">Max. height</Label>
            <Input
              id="max-height"
              type="text"
              default-value="none"
              class="col-span-2 h-8"
            />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import { Input } from '@/Components/Base/Input'
import { Label } from '@/Components/Base/Label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/Base/Popover'
</script>
