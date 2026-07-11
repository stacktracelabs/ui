<template>
  <DocsLayout>
    <Head title="Switch" />
    <DocsPage
      title="Switch"
      description="Turns an immediate setting on or off."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Switch components from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Switch for a binary setting that takes effect when the control is
        changed, such as enabling notifications. Bind <code>v-model</code> when
        application state owns the value, and label the setting itself rather
        than writing an action such as “Turn notifications on.”
      </p>
      <ComponentPreview title="Switch" :source="switchSource">
        <SwitchExample />
      </ComponentPreview>

      <h2 id="labels">Labels</h2>
      <p>
        Every switch needs an accessible name. With separate components, match
        the Label's <code>for</code> to the Switch's <code>id</code> so the label
        also enlarges the hit area. <code>SwitchControl</code> is a convenience
        wrapper that generates this association and forwards the root props and
        model event.
      </p>
      <ComponentPreview title="Switch control" :source="switchControlSource">
        <SwitchControlExample />
      </ComponentPreview>

      <h2 id="controlled-values">Controlled values</h2>
      <p>
        The ordinary model is boolean. The root also forwards Reka's
        <code>true-value</code> and <code>false-value</code> props when the
        application deliberately uses another pair of values. Keep the value
        type consistent and avoid translating display labels into state.
      </p>
      <CodeBlock :code="controlledCode" language="vue" />

      <h2 id="pending-and-disabled">Pending and disabled state</h2>
      <p>
        If changing the switch saves remotely, update it optimistically only
        when failure can be clearly reversed. Otherwise disable the control
        while saving and show a nearby status. A disabled switch still needs an
        explanation when the reason is not obvious; do not use disabled state
        as the only error message.
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        The switch exposes its checked state through the underlying Reka
        control and supports keyboard activation. Do not repeat “on” or “off”
        in the label because assistive technology announces the state. Keep any
        content in the thumb slot decorative, and do not rely on its position
        or color as the only indication of state.
      </p>

      <h2 id="choosing-a-control">Choosing a binary control</h2>
      <DocsComponentRecommendation
        title="Use Checkbox for a submitted choice"
        component-href="/docs/components/checkbox"
        component-name="Checkbox"
      >
        Use Checkbox when a yes-or-no choice is reviewed and submitted with a
        form. Use Switch when the setting changes immediately after activation.
      </DocsComponentRecommendation>
      <p>
        Use Toggle for a temporary interface mode such as bold formatting, and
        Button for a command that happens once. A success or failure state
        belongs in Badge, Alert, or another status surface rather than in a
        Switch.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import SwitchControlExample from '@/Docs/Examples/Switch/SwitchControlExample.vue'
import switchControlSource from '@/Docs/Examples/Switch/SwitchControlExample.vue?raw'
import SwitchExample from '@/Docs/Examples/Switch/SwitchExample.vue'
import switchSource from '@/Docs/Examples/Switch/SwitchExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/switch'
const controlledCode = [
  '<SwitchControl v-model="notificationsEnabled">',
  '  Notifications',
  '</SwitchControl>',
  '',
  '<script setup lang="ts">',
  "import { ref } from 'vue'",
  '',
  'const notificationsEnabled = ref(false)',
  '</' + 'script>',
].join('\n')
</script>
