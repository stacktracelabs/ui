<template>
  <AttachmentGroup class="w-full max-w-md">
    <Attachment class="w-64">
      <AttachmentMedia><FileTextIcon /></AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>briefing-notes.pdf</AttachmentTitle>
        <AttachmentDescription>PDF · 1.4 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment class="w-64">
      <AttachmentMedia><TableIcon /></AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>customers.csv</AttachmentTitle>
        <AttachmentDescription>CSV · 18 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment class="w-64">
      <AttachmentMedia><FileCodeIcon /></AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>renderer.vue</AttachmentTitle>
        <AttachmentDescription>Vue · 12 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  </AttachmentGroup>
</template>

<script setup lang="ts">
import { FileCodeIcon, FileTextIcon, TableIcon } from '@lucide/vue'
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from '@/Components/Base/Attachment'
</script>
