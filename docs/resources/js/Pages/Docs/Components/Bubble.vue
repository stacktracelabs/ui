<template>
  <DocsLayout>
    <Head title="Bubble" />
    <DocsPage
      title="Bubble"
      description="Displays framed or unframed conversational content with alignment and reactions."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Bubble from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Put visible content inside <code>BubbleContent</code>. Bubble owns the
        message surface only; compose it inside <Link href="/docs/components/message">Message</Link>
        when the row also needs an avatar, sender name, timestamp, or
        message-level actions.
      </p>
      <ComponentPreview title="Bubble" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="variants">Variants</h2>
      <p>
        Use <code>default</code> for the strongest primary surface,
        <code>secondary</code> or <code>muted</code> for neutral conversation,
        <code>tinted</code> for subtle primary emphasis, and
        <code>outline</code> for bordered rich content. The
        <code>ghost</code> variant removes the frame and width limit, while
        <code>destructive</code> presents an error or failed action.
      </p>
      <ComponentPreview title="Variants" :source="variantsExampleSource">
        <VariantsExample />
      </ComponentPreview>

      <h2 id="alignment-and-groups">Alignment and groups</h2>
      <p>
        Set <code>align="start"</code> or <code>align="end"</code> on the root.
        When Bubble is inside Message, it follows the Message alignment
        automatically. <code>BubbleGroup</code> stacks consecutive surfaces
        from the same sender; keep the alignment on each Bubble rather than on
        the group.
      </p>

      <h2 id="reactions">Reactions</h2>
      <p>
        <code>BubbleReactions</code> overlaps the top or bottom edge and can
        align to either side. For read-only emoji, give the row
        <code>role="img"</code> and one descriptive <code>aria-label</code>.
        For interactive reactions, render labeled Buttons instead and leave
        enough vertical spacing between adjacent bubbles.
      </p>

      <h2 id="interactive-content">Interactive content</h2>
      <p>
        Use <code>as-child</code> on <code>BubbleContent</code> to apply its
        styling to a real link or button. The component supplies hover and
        focus-visible treatments, while the child supplies the correct
        semantics and behavior.
      </p>
      <CodeBlock :code="interactiveCode" language="vue" />

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Bubble is presentational. Put conversation semantics and live-region
        behavior on the surrounding message list. Do not distinguish senders
        or errors by color alone; retain sender text, alignment, icons, or
        explicit error wording as appropriate.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Bubble/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Bubble/Default.vue?raw'
import VariantsExample from '@/Docs/Examples/Bubble/Variants.vue'
import variantsExampleSource from '@/Docs/Examples/Bubble/Variants.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/bubble'
const interactiveCode = [
  '<Bubble variant="muted" align="end">',
  '  <BubbleContent as-child>',
  '    <button type="button" @click="reply">Reply to this message</button>',
  '  </BubbleContent>',
  '</Bubble>',
].join('\n')
</script>
