<template>
  <DocsLayout>
    <Head title="Pin Input" />
    <DocsPage
      title="Pin Input"
      description="Collects a short sequence through individually editable input segments."
    >
      <h2 id="installation">Installation</h2>
      <p>Add Pin Input from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Pin Input remains available as a StackTrace component even though
        upstream shadcn-vue 2.7.4 deprecates it in favor of Input OTP. Use it
        for a short sequence whose segments need to be real individual inputs.
        Render zero-based slots and bind <code>v-model</code> to an array.
      </p>
      <ComponentPreview title="Segmented PIN" :source="exampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="value-types">Value types and completion</h2>
      <p>
        The default <code>type="text"</code> uses a
        <code>string[]</code> model. With <code>type="number"</code>, bind a
        <code>number[]</code>. The <code>complete</code> event fires when every
        rendered slot contains a value; it does not validate the business
        meaning of that sequence.
      </p>
      <CodeBlock :code="numericCode" language="vue" />

      <h2 id="mask-and-otp">Mask and OTP behavior</h2>
      <p>
        Set <code>mask</code> when the characters should not remain visible.
        Set <code>otp</code> to enable one-time-code autocomplete and mobile
        detection. A placeholder is one character repeated by empty slots.
        Groups and separators affect presentation only; slot indexes stay
        continuous and separators do not enter the model.
      </p>

      <h2 id="forms-and-validation">Forms and validation</h2>
      <p>
        Set <code>name</code> and <code>required</code> on the root. Reka joins
        the array into a visually hidden form value. Validate length, allowed
        characters, and server-side correctness separately, then show one
        error for the complete group. Disable the root while a submitted code
        is being verified if duplicate attempts would be harmful.
      </p>

      <h2 id="keyboard-and-accessibility">Keyboard and accessibility</h2>
      <p>
        Reka handles movement across slots, deletion, paste, and focusing the
        next segment. Give the entire sequence a visible label, preserve the
        natural slot order, and avoid adding each slot independently to a
        custom tab sequence. A masked PIN still needs clear instructions about
        length and accepted characters.
      </p>

      <h2 id="choosing-a-segmented-input">Choosing a segmented input</h2>
      <DocsComponentRecommendation
        title="Prefer Input OTP for one-time codes"
        component-href="/docs/components/input-otp"
        component-name="Input OTP"
      >
        Input OTP models one string through one underlying input, which gives
        one-time codes stronger paste, autofill, and password-manager behavior.
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
import DefaultExample from '@/Docs/Examples/PinInput/Default.vue'
import exampleSource from '@/Docs/Examples/PinInput/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/pin-input'
const numericCode = [
  '<PinInput v-model="pin" type="number" mask @complete="submitPin">',
  '  <PinInputGroup>',
  '    <PinInputSlot v-for="index in 4" :key="index" :index="index - 1" />',
  '  </PinInputGroup>',
  '</PinInput>',
  '',
  '<script setup lang="ts">',
  "import { ref } from 'vue'",
  'const pin = ref<number[]>([])',
  '</' + 'script>',
].join('\n')
</script>
