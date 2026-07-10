<template>
  <DocsLayout>
    <Head title="Badge" />
    <DocsPage
      title="Badge"
      description="Displays a badge or an element styled like one."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Badge component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="examples">Examples</h2>
      <h3 id="secondary">Secondary</h3>
      <ComponentPreview
        title="Secondary"
        :source="secondaryExampleSource"
      >
        <SecondaryExample />
      </ComponentPreview>

      <h3 id="destructive">Destructive</h3>
      <ComponentPreview
        title="Destructive"
        :source="destructiveExampleSource"
      >
        <DestructiveExample />
      </ComponentPreview>

      <h3 id="outline">Outline</h3>
      <ComponentPreview
        title="Outline"
        :source="outlineExampleSource"
      >
        <OutlineExample />
      </ComponentPreview>

      <h3 id="custom-colors">Custom colors</h3>
      <p>
        The supported variants are default, secondary, destructive, and
        outline. Use utility classes when a status needs another color.
      </p>
      <ComponentPreview
        title="Positive"
        :source="positiveExampleSource"
      >
        <PositiveExample />
      </ComponentPreview>
      <ComponentPreview
        title="Warning"
        :source="warningExampleSource"
      >
        <WarningExample />
      </ComponentPreview>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Badge/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Badge/Default.vue?raw'
import DestructiveExample from '@/Docs/Examples/Badge/Destructive.vue'
import destructiveExampleSource from '@/Docs/Examples/Badge/Destructive.vue?raw'
import OutlineExample from '@/Docs/Examples/Badge/Outline.vue'
import outlineExampleSource from '@/Docs/Examples/Badge/Outline.vue?raw'
import PositiveExample from '@/Docs/Examples/Badge/Positive.vue'
import positiveExampleSource from '@/Docs/Examples/Badge/Positive.vue?raw'
import SecondaryExample from '@/Docs/Examples/Badge/Secondary.vue'
import secondaryExampleSource from '@/Docs/Examples/Badge/Secondary.vue?raw'
import WarningExample from '@/Docs/Examples/Badge/Warning.vue'
import warningExampleSource from '@/Docs/Examples/Badge/Warning.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/badge'
</script>
