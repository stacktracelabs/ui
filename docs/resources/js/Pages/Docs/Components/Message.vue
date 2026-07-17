<template>
  <DocsLayout>
    <Head title="Message" />
    <DocsPage
      title="Message"
      description="Lays out one conversation message with optional avatar, header, footer, and alignment."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Message from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Message owns the row layout. Place an optional
        <code>MessageAvatar</code> beside <code>MessageContent</code>, then
        render the visible surface with <Link href="/docs/components/bubble">Bubble</Link>.
        Header and footer slots remain aligned with that surface.
      </p>
      <ComponentPreview title="Message" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="alignment">Alignment</h2>
      <p>
        Use <code>align="start"</code> for incoming messages and
        <code>align="end"</code> for the current sender. End alignment reverses
        the row, aligns nested Bubble surfaces, and keeps footer content on the
        same side. Keep a written sender name when alignment alone would be
        ambiguous.
      </p>

      <h2 id="header-footer-and-avatar">Header, footer, and avatar</h2>
      <p>
        <code>MessageHeader</code> suits sender names or short context above the
        surface. <code>MessageFooter</code> suits delivery state, timestamps,
        and message actions. The avatar anchors to the bottom of the message
        surface and shifts above a footer automatically.
      </p>

      <h2 id="groups">Grouping consecutive messages</h2>
      <p>
        Use <code>MessageGroup</code> for consecutive messages from one sender.
        An empty avatar slot on earlier rows preserves alignment; render the
        visible avatar on the final row. Use <code>BubbleGroup</code> inside one
        Message when several adjacent surfaces belong to the same logical
        message.
      </p>
      <ComponentPreview title="Message group" :source="groupExampleSource">
        <GroupExample />
      </ComponentPreview>

      <h2 id="actions-and-semantics">Actions and semantics</h2>
      <p>
        Place copy, retry, feedback, or overflow actions in the footer and give
        icon-only controls an accessible label. Message is a presentational
        wrapper; put transcript semantics on the containing list. The
        <Link href="/docs/components/message-scroller">Message Scroller</Link>
        supplies a log region when you need streaming and transcript-aware
        scrolling.
      </p>

      <h2 id="content-ownership">Content ownership</h2>
      <p>
        Message does not own chat records, delivery state, streaming, or
        actions. Keep those in the conversation feature and compose the parts
        needed for each row. Stable message identifiers belong on the list or
        MessageScroller item rather than inside the visual Bubble.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Message/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Message/Default.vue?raw'
import GroupExample from '@/Docs/Examples/Message/Group.vue'
import groupExampleSource from '@/Docs/Examples/Message/Group.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/message'
</script>
