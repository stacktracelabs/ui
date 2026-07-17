<template>
  <MessageGroup class="w-full max-w-sm">
    <Message>
      <MessageAvatar aria-hidden="true" />
      <MessageContent>
        <Bubble variant="muted">
          <BubbleContent>I checked the component source.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar><AvatarFallback>ST</AvatarFallback></Avatar>
      </MessageAvatar>
      <MessageContent>
        <BubbleGroup>
          <Bubble variant="muted">
            <BubbleContent>The styling now matches upstream.</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>The local API extensions are still intact.</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </MessageContent>
    </Message>
  </MessageGroup>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/Components/Base/Avatar'
import { Bubble, BubbleContent, BubbleGroup } from '@/Components/Base/Bubble'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from '@/Components/Base/Message'
</script>
