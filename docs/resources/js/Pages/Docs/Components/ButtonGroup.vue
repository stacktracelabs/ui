<template>
  <DocsLayout>
    <Head title="Button Group" />
    <DocsPage
      title="Button Group"
      description="Groups related buttons together with consistent borders and spacing."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Button Group component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use <code>ButtonGroup</code> when adjacent actions operate on the same
        object or form one compact control. Keep unrelated actions separate;
        joined borders imply a relationship and should not be used merely to
        save space.
      </p>
      <ComponentPreview :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="orientation">Orientation and sizing</h2>
      <p>
        Groups are horizontal by default. Set
        <code>orientation="vertical"</code> when the actions need to stack, and
        use the same orientation on nested separators. Button size remains an
        individual <code>Button</code> concern; keep buttons in one group the
        same size unless a split action intentionally uses a compact icon
        control.
      </p>

      <h2 id="supporting-content">Supporting content</h2>
      <p>
        <code>ButtonGroupSeparator</code> can divide filled or split controls;
        outline buttons already provide their own boundary and usually do not
        need one. Use <code>ButtonGroupText</code> for a short, non-interactive
        prefix or suffix. It accepts <code>as</code> and <code>as-child</code>;
        preserve appropriate semantics when composing it with another element.
        See the <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Button Group renders with <code>role="group"</code>. Add
        <code>aria-label</code> or <code>aria-labelledby</code> when surrounding
        text does not already name the group. Keyboard focus still moves to
        each button with Tab; the group does not turn independent actions into
        a single arrow-key control.
      </p>
      <DocsComponentRecommendation
        title="Use Toggle Group for a shared selection"
        component-href="/docs/components/toggle-group"
        component-name="Toggle Group"
      >
        Choose Toggle Group when the controls select one or more persistent
        states. Button Group is for actions that run when activated.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/ButtonGroup/Default.vue'
import exampleSource from '@/Docs/Examples/ButtonGroup/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/button-group'
</script>
