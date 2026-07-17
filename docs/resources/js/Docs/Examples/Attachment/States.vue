<template>
  <div class="flex w-full max-w-sm flex-col gap-2">
    <Attachment
      v-for="item in attachments"
      :key="item.state"
      :state="item.state"
      class="w-full"
    >
      <AttachmentMedia>
        <component :is="item.icon" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>{{ item.name }}</AttachmentTitle>
        <AttachmentDescription>{{ item.description }}</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction :aria-label="`Remove ${item.name}`">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import {
  CheckIcon,
  ClockIcon,
  FileTextIcon,
  FileWarningIcon,
  LoaderCircleIcon,
  XIcon,
} from '@lucide/vue'
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@/Components/Base/Attachment'

interface AttachmentExample {
  state: 'idle' | 'uploading' | 'processing' | 'error' | 'done'
  name: string
  description: string
  icon: Component
}

const attachments: AttachmentExample[] = [
  { state: 'idle', name: 'selected-file.pdf', description: 'Ready to upload', icon: ClockIcon },
  { state: 'uploading', name: 'design-system.zip', description: 'Uploading · 64%', icon: LoaderCircleIcon },
  { state: 'processing', name: 'research.pdf', description: 'Processing document', icon: FileTextIcon },
  { state: 'error', name: 'financial-model.xlsx', description: 'Upload failed. Try again.', icon: FileWarningIcon },
  { state: 'done', name: 'uploaded-report.pdf', description: 'Uploaded · 1.8 MB', icon: CheckIcon },
]
</script>
