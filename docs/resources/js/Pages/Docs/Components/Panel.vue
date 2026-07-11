<template>
  <DocsLayout>
    <Head title="Panel" />
    <DocsPage title="Panel" description="Presents read-only name-value details in responsive sections.">
      <h2 id="installation">Installation</h2>
      <p>Add Panel from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose a root from <code>PanelHeader</code>,
        <code>PanelContent</code>, labeled <code>PanelItem</code> rows, and an
        optional <code>PanelFooter</code>. The component supplies spacing and
        subtle dividers but intentionally leaves the outer surface to its parent.
      </p>
      <ComponentPreview :source="panelSource">
        <PanelExample />
      </ComponentPreview>

      <h2 id="responsive-rows">Responsive rows</h2>
      <p>
        A labeled Panel Item stacks its label above the value by default, then
        switches to a two-fifths/three-fifths row from the <code>sm</code>
        breakpoint. Values remain in the default slot, so links, badges, and
        compact controls can be composed without turning the label into markup.
      </p>
      <p>
        Omit <code>label</code> for custom full-width content. The label prop is
        a string; if a label needs richer markup or a programmatic relationship,
        build that row explicitly instead of forcing it into Panel Item.
      </p>

      <h2 id="semantics">Semantics</h2>
      <p>
        Panel is a visual composition rather than a native description list.
        Use the root's Reka primitive <code>as</code> or <code>as-child</code>
        support to choose an appropriate sectioning element, and make sure the
        fixed <code>h3</code> rendered by <code>PanelTitle</code> fits the page
        heading hierarchy.
      </p>

      <h2 id="data-boundary">Data and presentation boundary</h2>
      <p>
        Pass already formatted values into the rows. Fetching, permissions,
        localization, date and number formatting, and edit state belong to the
        owning feature. Use an actual form when values are editable rather than
        making read-only rows behave like inputs.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <ul>
        <li>Use Panel for profile, account, order, or system metadata with distinct labels.</li>
        <li>Use Card for free-form content with actions and a stronger outer surface.</li>
        <li>Use Table for repeated records whose columns must align across rows.</li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import PanelExample from '@/Docs/Examples/Panel/PanelExample.vue'
import panelSource from '@/Docs/Examples/Panel/PanelExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/panel'
</script>
