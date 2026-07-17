<template>
  <div class="flex w-full max-w-sm flex-col gap-8">
    <Bubble align="end">
      <BubbleContent>Can you review the latest component update?</BubbleContent>
    </Bubble>
    <Bubble variant="muted">
      <BubbleContent>
        Yes. The registry and documentation are both up to date.
      </BubbleContent>
      <BubbleReactions role="img" aria-label="Reaction: thumbs up">
        <span>👍</span>
      </BubbleReactions>
    </Bubble>
  </div>
</template>

<script setup lang="ts">
import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from '@/Components/Base/Bubble'
</script>
