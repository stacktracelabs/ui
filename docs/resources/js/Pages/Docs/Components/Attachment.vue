<template>
  <DocsLayout>
    <Head title="Attachment" />
    <DocsPage
      title="Attachment"
      description="Displays a file or image with its metadata, upload state, and actions."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Attachment from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose <code>AttachmentMedia</code>, <code>AttachmentContent</code>,
        and optional <code>AttachmentActions</code> inside the root. Use the
        title for the file name and the description for type, size, or current
        upload status.
      </p>
      <ComponentPreview title="Attachment" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="states">Upload states</h2>
      <p>
        Set <code>state</code> to <code>idle</code>, <code>uploading</code>,
        <code>processing</code>, <code>error</code>, or <code>done</code>. The
        uploading and processing titles use the shared shimmer utility; error
        changes the border, media, and description treatment. Always state the
        failure in text so color is not the only signal.
      </p>
      <ComponentPreview title="Upload states" :source="statesExampleSource">
        <StatesExample />
      </ComponentPreview>

      <h2 id="size-and-orientation">Size and orientation</h2>
      <p>
        The root supports <code>default</code>, <code>sm</code>, and
        <code>xs</code> sizes. Horizontal attachments work well in upload
        queues; <code>orientation="vertical"</code> places an image or icon
        above its metadata for compact galleries. Use
        <code>AttachmentMedia variant="image"</code> around a real image with
        useful alternative text.
      </p>

      <h2 id="groups">Attachment groups</h2>
      <p>
        <code>AttachmentGroup</code> creates a horizontally scrolling,
        snapping row with edge fading. When cards are presentational, make the
        group focusable and label it so keyboard users can scroll it. Cards
        with actions or triggers are reached naturally through their controls.
      </p>
      <ComponentPreview title="Attachment group" :source="groupExampleSource">
        <GroupExample />
      </ComponentPreview>

      <h2 id="triggers-and-actions">Triggers and actions</h2>
      <p>
        <code>AttachmentAction</code> is an icon-sized Button. Give every
        action an <code>aria-label</code> that names both the operation and the
        file. <code>AttachmentTrigger</code> covers the card behind those
        actions; use it to open a preview, link, or dialog, and label the
        trigger with the result of activating it.
      </p>
      <CodeBlock :code="triggerCode" language="vue" />

      <h2 id="state-ownership">State ownership</h2>
      <p>
        Attachment presents upload state but does not upload, retry, cancel,
        or remove files. Keep progress, errors, file validation, and mutations
        in the parent feature, then pass the resulting state and text into the
        component.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Attachment/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Attachment/Default.vue?raw'
import GroupExample from '@/Docs/Examples/Attachment/Group.vue'
import groupExampleSource from '@/Docs/Examples/Attachment/Group.vue?raw'
import StatesExample from '@/Docs/Examples/Attachment/States.vue'
import statesExampleSource from '@/Docs/Examples/Attachment/States.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/attachment'
const triggerCode = [
  '<Attachment>',
  '  <!-- media, content, and actions -->',
  '  <AttachmentTrigger',
  '    aria-label="Preview report.pdf"',
  '    @click="openPreview"',
  '  />',
  '</Attachment>',
].join('\n')
</script>
