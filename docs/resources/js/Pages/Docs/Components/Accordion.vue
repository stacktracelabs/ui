<template>
  <DocsLayout>
    <Head title="Accordion" />
    <DocsPage
      title="Accordion"
      description="A vertically stacked set of interactive headings that reveal sections of content."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Accordion component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

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
import { Head } from '@inertiajs/vue3'
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
