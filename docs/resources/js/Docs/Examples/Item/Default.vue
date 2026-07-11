<template>
  <div class="flex w-full max-w-md flex-col gap-4">
    <Item variant="outline">
      <ItemMedia variant="icon">
        <BadgeCheckIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Profile verified</ItemTitle>
        <ItemDescription>Your account can now publish packages.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">View</Button>
      </ItemActions>
    </Item>

    <Item variant="muted" size="sm" as-child>
      <a href="#usage">
        <ItemContent>
          <ItemTitle>Read the usage guide</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon />
        </ItemActions>
      </a>
    </Item>
  </div>
</template>

<script setup lang="ts">
import { BadgeCheckIcon, ChevronRightIcon } from '@lucide/vue'
import { Button } from '@/Components/Base/Button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/Components/Base/Item'
</script>
