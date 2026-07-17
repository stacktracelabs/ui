<template>
  <MessageScrollerProvider default-scroll-position="start">
    <div class="h-96 w-full max-w-md overflow-hidden rounded-xl border bg-background">
      <MessageScroller>
        <MessageScrollerViewport>
          <MessageScrollerContent class="gap-6 p-4">
            <MessageScrollerItem
              v-for="message in messages"
              :key="message.id"
              :message-id="message.id"
              :scroll-anchor="message.align === 'end'"
            >
              <Message :align="message.align">
                <MessageContent>
                  <MessageHeader>{{ message.sender }}</MessageHeader>
                  <Bubble :variant="message.variant">
                    <BubbleContent>{{ message.text }}</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton direction="start" />
        <MessageScrollerButton direction="end" />
      </MessageScroller>
    </div>
  </MessageScrollerProvider>
</template>

<script setup lang="ts">
import { Bubble, BubbleContent } from '@/Components/Base/Bubble'
import { Message, MessageContent, MessageHeader } from '@/Components/Base/Message'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/Components/Base/MessageScroller'

const messages = [
  { id: 'm1', sender: 'You', align: 'end', variant: 'default', text: 'Can we keep new replies in view while they stream?' },
  { id: 'm2', sender: 'StackTrace', align: 'start', variant: 'muted', text: 'Yes. Enable auto-scroll and the viewport follows only while the reader remains at the live edge.' },
  { id: 'm3', sender: 'You', align: 'end', variant: 'default', text: 'What happens if I scroll up to read an earlier answer?' },
  { id: 'm4', sender: 'StackTrace', align: 'start', variant: 'muted', text: 'The scroller releases the live edge and preserves your position.' },
  { id: 'm5', sender: 'You', align: 'end', variant: 'default', text: 'Can I jump back to the latest message?' },
  { id: 'm6', sender: 'StackTrace', align: 'start', variant: 'muted', text: 'Use MessageScrollerButton. It appears only when more content exists in that direction.' },
] as const
</script>
