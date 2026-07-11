<template>
  <DocsLayout>
    <Head title="Alert" />
    <DocsPage
      title="Alert"
      description="Displays an important status or message that needs the user's attention."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Alert component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use an alert for a message that belongs in the current page and should
        remain visible until the surrounding state changes. Compose
        <code>AlertTitle</code> and <code>AlertDescription</code> inside
        <code>Alert</code>; an optional icon may reinforce the message, but the
        text must communicate it without color or imagery.
      </p>
      <ComponentPreview title="Alert" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="variants">Variants and meaning</h2>
      <p>
        Choose a variant from the meaning of the message. The default variant
        is neutral, <code>positive</code> confirms a successful or healthy
        state, and <code>destructive</code> reports an error or dangerous
        condition. These variants describe status; they do not turn the alert
        into an action or confirmation control.
      </p>

      <h3 id="positive">Positive</h3>
      <p>
        Use a positive alert for a success that should remain associated with
        the page, such as a completed setup step. Avoid showing routine
        successes permanently when they do not help the user continue.
      </p>
      <ComponentPreview title="Positive" :source="positiveExampleSource">
        <PositiveExample />
      </ComponentPreview>

      <h3 id="destructive">Destructive</h3>
      <p>
        Use a destructive alert for an error that blocks progress or requires
        attention. State what happened and, when possible, how to recover. Do
        not use destructive styling for an action that has not happened yet.
      </p>
      <ComponentPreview title="Destructive" :source="destructiveExampleSource">
        <DestructiveExample />
      </ComponentPreview>

      <h2 id="status-and-actions">Status versus actions</h2>
      <p>
        An alert communicates a condition; a button performs an action. If the
        message has a recovery action, place a clearly labeled Button after
        the description and keep the message understandable without activating
        it. Use an Alert Dialog or Confirmation Dialog when the user must make
        a decision before work can continue.
      </p>
      <DocsComponentRecommendation
        title="Use Sonner for transient confirmation"
        component-href="/docs/components/sonner"
        component-name="Sonner"
      >
        Use a toast for brief, non-critical feedback that does not need a
        permanent position in the page. Keep validation errors, blocking
        failures, and instructions near the content they affect.
      </DocsComponentRecommendation>

      <h2 id="accessibility">Accessibility and live updates</h2>
      <p>
        The local <code>Alert</code> always renders with
        <code>role="alert"</code>. Assistive technology may announce it when it
        is inserted or its content changes, so reserve dynamically rendered
        alerts for important, time-sensitive messages. Do not repeatedly
        replace the text while a task is progressing; use a stable status label
        or Progress instead.
      </p>
      <p>
        Give the alert a concise title and a specific description. Decorative
        icons should be hidden from assistive technology, and meaning such as
        success or error must also appear in the text. Move focus only when the
        user must immediately interact with content elsewhere; an alert itself
        should not steal focus.
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
import DefaultExample from '@/Docs/Examples/Alert/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Alert/Default.vue?raw'
import DestructiveExample from '@/Docs/Examples/Alert/Destructive.vue'
import destructiveExampleSource from '@/Docs/Examples/Alert/Destructive.vue?raw'
import PositiveExample from '@/Docs/Examples/Alert/Positive.vue'
import positiveExampleSource from '@/Docs/Examples/Alert/Positive.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/alert'
</script>
