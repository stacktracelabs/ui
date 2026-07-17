<template>
  <DocsLayout>
    <Head title="Message Scroller" />
    <DocsPage
      title="Message Scroller"
      description="Provides transcript anchoring, live-edge following, history restoration, and message navigation."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Message Scroller from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Wrap a height-constrained transcript in
        <code>MessageScrollerProvider</code>. The viewport is the native scroll
        region, the content is an accessible log, and every item may provide a
        stable <code>message-id</code>. Scroll the example to see the directional
        buttons appear only when more content exists.
      </p>
      <ComponentPreview title="Message Scroller" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="anchoring-turns">Anchoring turns</h2>
      <p>
        Set <code>scroll-anchor</code> on the row that starts a meaningful turn,
        commonly the user's message. When a new anchor arrives it settles near
        the top while <code>scroll-previous-item-peek</code> keeps part of the
        prior context visible. Anchors may also be system markers or handoff
        events; they are not tied to a message role.
      </p>

      <h2 id="live-edge">Following the live edge</h2>
      <p>
        Enable <code>auto-scroll</code> to follow a streamed reply while the
        reader remains at the bottom. Wheel, touch, keyboard, or scrollbar
        movement away from the live edge releases the viewport so incoming
        content does not pull the reader away from earlier messages.
        <code>MessageScrollerButton</code> returns to either edge and becomes
        inert when that edge is already visible.
      </p>

      <h2 id="opening-and-history">Opening threads and loading history</h2>
      <p>
        <code>default-scroll-position="last-anchor"</code> opens a saved thread
        at its latest meaningful turn; use <code>start</code> or
        <code>end</code> when that better matches the feature. The viewport
        preserves the visible row when earlier messages are prepended unless
        <code>preserve-scroll-on-prepend</code> is disabled.
      </p>

      <h2 id="commands-and-visibility">Commands and visibility</h2>
      <p>
        <code>useMessageScroller</code> exposes commands for scrolling to the
        start, end, or a stable message id. Use
        <code>useMessageScrollerVisibility</code> for the current anchor and
        visible ids, and <code>useMessageScrollerScrollable</code> when a custom
        control needs to know which edges remain reachable.
      </p>
      <CodeBlock :code="commandsCode" language="ts" />

      <h2 id="accessibility">Accessibility</h2>
      <p>
        The viewport renders a focusable region labeled “Messages,” and the
        content uses <code>role="log"</code> with additions announced. Keep
        message text and controls semantically complete, preserve stable ids,
        and avoid animating item height, margin, or padding because layout
        animation can conflict with scroll anchoring.
      </p>

      <h2 id="state-ownership">State ownership</h2>
      <p>
        Message Scroller owns scroll behavior only. It does not fetch history,
        store messages, stream model output, or choose turn boundaries. Those
        decisions remain in the conversation feature and are expressed through
        items, ids, anchors, and provider props.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/MessageScroller/Default.vue'
import defaultExampleSource from '@/Docs/Examples/MessageScroller/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/message-scroller'
const commandsCode = [
  "import { useMessageScroller } from '@/Components/MessageScroller'",
  '',
  'const { scrollToMessage, scrollToEnd, scrollToStart } = useMessageScroller()',
  '',
  "scrollToMessage('message-42', { align: 'center', behavior: 'smooth' })",
].join('\n')
</script>
