<template>
  <DocsLayout>
    <Head title="Sheet" />
    <DocsPage
      title="Sheet"
      description="Displays complementary content in a modal panel from an edge of the screen."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Sheet component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Sheet for a focused task or supporting details that should retain
        visual context from the current screen. Keep the task narrow; a large
        form, deep navigation, or content that should be linkable usually
        belongs on its own page. Sheets use the inset elevated surface and
        lighter blurred backdrop by default.
      </p>
      <ComponentPreview :source="sheetSource">
        <SheetExample />
      </ComponentPreview>

      <h2 id="classic">Classic</h2>
      <p>
        Use <code>variant=&quot;default&quot;</code> for the original edge-attached sheet
        with a darker, non-blurred backdrop.
      </p>
      <ComponentPreview :source="sheetClassicSource">
        <SheetClassicExample />
      </ComponentPreview>

      <h2 id="structure-and-focus">Structure and focus</h2>
      <p>
        Sheet uses dialog semantics. Include one <code>SheetTitle</code> and add
        <code>SheetDescription</code> when the title does not explain the task.
        Focus remains in the modal panel while it is open and returns after it
        closes. <code>SheetContent</code> includes an accessible close button;
        use <code>SheetClose</code> for additional cancel, save, or done actions.
      </p>
      <p>
        <code>SheetTrigger</code> and <code>SheetClose</code> support
        <code>as-child</code>. Their children must remain focusable and forward
        attributes and events according to the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>

      <h2 id="examples">Variants and state</h2>
      <h3 id="side">Side</h3>
      <p>
        <code>SheetContent</code> opens from <code>right</code> by default. Set
        <code>side</code> to <code>top</code>, <code>right</code>,
        <code>bottom</code>, or <code>left</code>. Choose the edge from the
        interface's spatial relationship, and use the same edge consistently
        for the same kind of task.
      </p>
      <ComponentPreview :source="sheetSidesSource">
        <SheetSidesExample />
      </ComponentPreview>

      <h3 id="size">Size</h3>
      <p>
        Adjust width and the responsive maximum width with utility classes on
        <code>SheetContent</code>. Leave enough of the original screen visible
        to preserve context, and test narrow viewports before increasing the
        default size.
      </p>
      <ComponentPreview :source="sheetSizeSource">
        <SheetSizeExample />
      </ComponentPreview>

      <h3 id="controlled-state">Controlled state</h3>
      <p>
        Bind <code>v-model:open</code> for standard Vue-controlled state, or
        pass a StackTrace <code>useToggle()</code> controller to the
        <code>control</code> prop. Use controlled state when a save result,
        navigation event, or control outside the sheet determines when it
        opens or closes.
      </p>
      <ComponentPreview :source="sheetControlledSource">
        <SheetControlledExample />
      </ComponentPreview>

      <DocsComponentRecommendation
        title="Use Drawer for touch-first gestures"
        component-href="/docs/components/drawer"
        component-name="Drawer"
      >
        Drawer is designed for swipe and drag interaction, especially on small
        screens. Sheet is a dialog-style edge panel with predictable modal
        behavior across viewport sizes.
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
import SheetClassicExample from '@/Docs/Examples/Sheet/SheetClassicExample.vue'
import sheetClassicSource from '@/Docs/Examples/Sheet/SheetClassicExample.vue?raw'
import SheetControlledExample from '@/Docs/Examples/Sheet/SheetControlledExample.vue'
import sheetControlledSource from '@/Docs/Examples/Sheet/SheetControlledExample.vue?raw'
import SheetExample from '@/Docs/Examples/Sheet/SheetExample.vue'
import sheetSource from '@/Docs/Examples/Sheet/SheetExample.vue?raw'
import SheetSidesExample from '@/Docs/Examples/Sheet/SheetSidesExample.vue'
import sheetSidesSource from '@/Docs/Examples/Sheet/SheetSidesExample.vue?raw'
import SheetSizeExample from '@/Docs/Examples/Sheet/SheetSizeExample.vue'
import sheetSizeSource from '@/Docs/Examples/Sheet/SheetSizeExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/sheet'
</script>
