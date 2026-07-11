<template>
  <DocsLayout>
    <Head title="Input OTP" />
    <DocsPage title="Input OTP" description="An accessible one-time password input with keyboard and paste support.">
      <h2 id="installation">Installation</h2>
      <CodeBlock code="npx shadcn-vue@latest add @stacktrace/input-otp" language="shell" />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="exampleSource"><DefaultExample /></ComponentPreview>

      <h2 id="patterns">Patterns</h2>
      <p>Pass a regular-expression pattern to restrict accepted characters, and bind <code>v-model</code> when the value must be controlled.</p>

      <h2 id="composition">Composition</h2>
      <p>Arrange indexed <code>InputOTPSlot</code> components inside groups and place separators between logical sections.</p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/InputOTP/Default.vue'
import exampleSource from '@/Docs/Examples/InputOTP/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
</script>
