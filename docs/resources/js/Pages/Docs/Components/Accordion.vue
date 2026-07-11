<template>
  <DocsLayout>
    <Head title="Accordion" />
    <DocsPage
      title="Accordion"
      description="A vertically stacked set of interactive headings that reveal sections of content."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Accordion component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use an accordion to organize related sections when showing every
        section at once would make the page difficult to scan. Each
        <code>AccordionItem</code> needs a stable, unique <code>value</code> so
        the root can track which content is open.
      </p>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="selection-behavior">Selection behavior</h2>
      <p>
        Set <code>type="single"</code> when the sections are alternatives and
        only one should remain open. Add <code>collapsible</code> when closing
        the current item to leave every section closed is useful. Use
        <code>type="multiple"</code> when people may need to compare content
        across sections.
      </p>
      <p>
        Use <code>default-value</code> for an initially open uncontrolled item.
        Bind <code>v-model</code> when another part of the interface needs to
        read or change the selection. A single accordion models a string; a
        multiple accordion models an array of item values.
      </p>

      <h2 id="accessibility">Accessibility and content</h2>
      <p>
        Keep every trigger concise and descriptive: it becomes the interactive
        heading for its panel. The primitives connect triggers and content and
        expose expanded state to assistive technology. Do not hide information
        that must be discovered immediately, validation errors, or the only way
        to complete the current task inside a closed item.
      </p>
      <p>
        <code>AccordionTrigger</code> accepts the primitive composition props.
        When using <code>as-child</code>, preserve a focusable control and read
        the <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before replacing the default trigger element.
      </p>

      <h2 id="animation">Animation</h2>
      <p>
        Accordion content uses Tailwind theme tokens for its open and close
        animations. Add these tokens to your application stylesheet if they are
        not already present.
      </p>
      <CodeBlock
        :code="animationCode"
        language="css"
        filename="resources/css/app.css"
      />
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Accordion/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Accordion/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/accordion'
const animationCode = [
  '@theme inline {',
  '  --animate-accordion-down: accordion-down 0.2s ease-out;',
  '  --animate-accordion-up: accordion-up 0.2s ease-out;',
  '',
  '  @keyframes accordion-down {',
  '    from { height: 0; }',
  '    to { height: var(--reka-accordion-content-height); }',
  '  }',
  '',
  '  @keyframes accordion-up {',
  '    from { height: var(--reka-accordion-content-height); }',
  '    to { height: 0; }',
  '  }',
  '}',
].join('\n')
</script>
