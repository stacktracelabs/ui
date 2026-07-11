<template>
  <DocsLayout>
    <Head title="Input OTP" />
    <DocsPage
      title="Input OTP"
      description="Collects a one-time code with keyboard, paste, and autofill support."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Input OTP from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use Input OTP for verification codes delivered through email, an
        authenticator, or a message. Bind <code>v-model</code> to one string,
        set the required <code>maxlength</code>, and render one zero-based
        <code>InputOTPSlot</code> for every character.
      </p>
      <ComponentPreview title="Six-character code" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="model-and-completion">Model and completion</h2>
      <p>
        The slots are a visual projection of a single underlying input; the
        model is a string, not an array. Listen for <code>complete</code> when
        the string reaches <code>maxlength</code>. Keep submission available
        through an explicit button as well, especially when the code may be
        checked asynchronously or pasted all at once.
      </p>
      <CodeBlock :code="completeCode" language="vue" />

      <h2 id="accepted-characters">Accepted characters and paste</h2>
      <p>
        Set <code>inputmode="numeric"</code> for digit codes and use
        <code>pattern</code> with constants such as
        <code>REGEXP_ONLY_DIGITS</code> from <code>vue-input-otp</code> to reject
        other characters. <code>paste-transformer</code> can normalize a pasted
        value before validation—for example, removing spaces or a hyphen.
        Keep <code>maxlength</code> and the number of rendered slots equal.
      </p>

      <h2 id="groups-and-separators">Groups and separators</h2>
      <p>
        Use <code>InputOTPGroup</code> to join adjacent slots and
        <code>InputOTPSeparator</code> only when the code is conventionally
        grouped. Separators are visual and do not become part of the model.
        Slot indexes remain continuous across groups.
      </p>

      <h2 id="forms-and-validation">Forms and validation</h2>
      <p>
        Pass native input attributes such as <code>name</code>,
        <code>required</code>, <code>disabled</code>, and
        <code>autocomplete="one-time-code"</code> to the root. Validate the
        complete string, show errors next to the group, and clear stale errors
        when the user starts correcting the code. Never log or persist a
        one-time code longer than the verification flow requires.
      </p>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        The hidden input preserves ordinary typing, selection, and paste while
        the slots display focus and caret state. Give the group a visible label
        and concise instructions, and allow password managers and platform OTP
        autofill to work. Do not turn every visual slot into an independently
        tabbed field or intercept paste at the form level.
      </p>

      <h2 id="choosing-a-segmented-input">Choosing a segmented input</h2>
      <DocsComponentRecommendation
        title="Use Pin Input for independently editable segments"
        component-href="/docs/components/pin-input"
        component-name="Pin Input"
      >
        Use the local Pin Input only when each segment needs to be a real input
        and the value is naturally represented as an array. Input OTP is the
        preferred one-time-code control.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/InputOTP/Default.vue'
import exampleSource from '@/Docs/Examples/InputOTP/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/input-otp'
const completeCode = [
  '<InputOTP',
  '  v-model="code"',
  '  :maxlength="6"',
  '  autocomplete="one-time-code"',
  '  @complete="verify"',
  '>',
  '  <!-- six indexed slots -->',
  '</InputOTP>',
].join('\n')
</script>
