<template>
  <div class="flex w-full max-w-sm flex-col gap-3">
    <Attachment state="uploading" class="w-full">
      <AttachmentMedia>
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
        <AttachmentDescription>Uploading · 64%</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Cancel sales-dashboard.pdf upload">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>

    <Attachment class="w-full">
      <AttachmentMedia>
        <FileCodeIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>message-renderer.vue</AttachmentTitle>
        <AttachmentDescription>Vue · 12 KB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove message-renderer.vue">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  </div>
</template>

<script setup lang="ts">
import { FileCodeIcon, XIcon } from '@lucide/vue'
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@/Components/Base/Attachment'
import { Spinner } from '@/Components/Base/Spinner'
</script>
