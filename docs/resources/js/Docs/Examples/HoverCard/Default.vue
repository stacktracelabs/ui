<template>
  <HoverCard>
    <HoverCardTrigger as-child>
      <Button variant="link">@stacktrace</Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-80">
      <div class="flex gap-4">
        <Avatar>
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <div class="flex flex-col gap-1">
          <h4 class="text-sm font-semibold">StackTrace UI</h4>
          <p class="text-sm text-muted-foreground">Laravel-focused Vue components distributed as source.</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/Components/Base/Avatar'
import { Button } from '@/Components/Base/Button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/Components/Base/HoverCard'
</script>
