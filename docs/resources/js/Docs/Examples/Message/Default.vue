<template>
  <div class="flex w-full max-w-sm flex-col gap-6">
    <Message align="end">
      <MessageAvatar>
        <Avatar><AvatarFallback>YO</AvatarFallback></Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>Deploying the documentation preview now.</BubbleContent>
        </Bubble>
        <MessageFooter>Delivered</MessageFooter>
      </MessageContent>
    </Message>

    <Message>
      <MessageAvatar>
        <Avatar><AvatarFallback>ST</AvatarFallback></Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>StackTrace</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>The new component examples are ready to inspect.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/Components/Base/Avatar'
import { Bubble, BubbleContent } from '@/Components/Base/Bubble'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from '@/Components/Base/Message'
</script>
