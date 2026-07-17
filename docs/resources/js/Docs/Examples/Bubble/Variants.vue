<template>
  <div class="flex w-full max-w-sm flex-col gap-5">
    <Bubble><BubbleContent>Default</BubbleContent></Bubble>
    <Bubble variant="secondary" align="end"><BubbleContent>Secondary</BubbleContent></Bubble>
    <Bubble variant="muted"><BubbleContent>Muted</BubbleContent></Bubble>
    <Bubble variant="tinted" align="end"><BubbleContent>Tinted</BubbleContent></Bubble>
    <Bubble variant="outline"><BubbleContent>Outline</BubbleContent></Bubble>
    <Bubble variant="destructive" align="end"><BubbleContent>Destructive</BubbleContent></Bubble>
    <Bubble variant="ghost">
      <BubbleContent>Ghost content is unframed and can span the full row.</BubbleContent>
    </Bubble>
  </div>
</template>

<script setup lang="ts">
import { Bubble, BubbleContent } from '@/Components/Base/Bubble'
</script>
