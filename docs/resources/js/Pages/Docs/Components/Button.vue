<template>
  <DocsLayout>
    <Head title="Button" />
    <DocsPage
      title="Button"
      description="Displays a button or an element styled like one."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Button component from the configured StackTrace registry.</p>
      <CodeBlock
        :code="installationCode"
        language="shell"
      />

      <h2 id="usage">Usage</h2>
      <ComponentPreview :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="variants">Variants</h2>
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

      <h3 id="ghost">Ghost</h3>
      <ComponentPreview
        title="Ghost"
        :source="ghostExampleSource"
      >
        <GhostExample />
      </ComponentPreview>

      <h3 id="link">Link</h3>
      <ComponentPreview
        title="Link"
        :source="linkExampleSource"
      >
        <LinkExample />
      </ComponentPreview>

      <h2 id="sizes-and-composition">Sizes and composition</h2>
      <h3 id="icon">Icon</h3>
      <ComponentPreview
        title="Icon"
        :source="iconExampleSource"
      >
        <IconExample />
      </ComponentPreview>

      <h3 id="as-child">As child</h3>
      <p>
        Combine <code>as-child</code> with <code>plain</code> to apply button
        styling and behavior to another element without adding a wrapper.
      </p>
      <ComponentPreview
        title="As child"
        :source="asChildExampleSource"
      >
        <AsChildExample />
      </ComponentPreview>

      <h2 id="processing-states">Processing states</h2>
      <p>
        <code>Button</code> supports processing, icon, label, and recently
        successful states directly.
      </p>

      <h3 id="processing">Processing</h3>
      <ComponentPreview
        title="Processing"
        :source="processingExampleSource"
      >
        <ProcessingExample />
      </ComponentPreview>

      <h3 id="label-and-icon">Label and icon</h3>
      <ComponentPreview
        title="Label and icon"
        :source="labelAndIconExampleSource"
      >
        <LabelAndIconExample />
      </ComponentPreview>

      <h3 id="inertia-form-state">Inertia form state</h3>
      <p>
        Bind an Inertia form's <code>processing</code> and
        <code>recentlySuccessful</code> values to the corresponding button
        props.
      </p>
      <ComponentPreview
        title="Form state"
        :source="formStateExampleSource"
      >
        <FormStateExample />
      </ComponentPreview>
      <CodeBlock
        :code="inertiaFormCode"
        language="vue"
      />
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import AsChildExample from '@/Docs/Examples/Button/AsChild.vue'
import asChildExampleSource from '@/Docs/Examples/Button/AsChild.vue?raw'
import DefaultExample from '@/Docs/Examples/Button/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Button/Default.vue?raw'
import DestructiveExample from '@/Docs/Examples/Button/Destructive.vue'
import destructiveExampleSource from '@/Docs/Examples/Button/Destructive.vue?raw'
import FormStateExample from '@/Docs/Examples/Button/FormState.vue'
import formStateExampleSource from '@/Docs/Examples/Button/FormState.vue?raw'
import GhostExample from '@/Docs/Examples/Button/Ghost.vue'
import ghostExampleSource from '@/Docs/Examples/Button/Ghost.vue?raw'
import IconExample from '@/Docs/Examples/Button/Icon.vue'
import iconExampleSource from '@/Docs/Examples/Button/Icon.vue?raw'
import LabelAndIconExample from '@/Docs/Examples/Button/LabelAndIcon.vue'
import labelAndIconExampleSource from '@/Docs/Examples/Button/LabelAndIcon.vue?raw'
import LinkExample from '@/Docs/Examples/Button/Link.vue'
import linkExampleSource from '@/Docs/Examples/Button/Link.vue?raw'
import OutlineExample from '@/Docs/Examples/Button/Outline.vue'
import outlineExampleSource from '@/Docs/Examples/Button/Outline.vue?raw'
import ProcessingExample from '@/Docs/Examples/Button/Processing.vue'
import processingExampleSource from '@/Docs/Examples/Button/Processing.vue?raw'
import SecondaryExample from '@/Docs/Examples/Button/Secondary.vue'
import secondaryExampleSource from '@/Docs/Examples/Button/Secondary.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/button'
const inertiaFormCode = [
  '<template>',
  '  <form @submit.prevent="form.post(\'/projects\')">',
  '    <Button',
  '      type="submit"',
  '      label="Save"',
  '      recently-successful-label="Saved"',
  '      :icon="SaveIcon"',
  '      :processing="form.processing"',
  '      :recently-successful="form.recentlySuccessful"',
  '    />',
  '  </form>',
  '</template>',
  '',
  '<script setup lang="ts">',
  "import { Button } from '@/Components/Button'",
  "import { useForm } from '@inertiajs/vue3'",
  "import { SaveIcon } from '@lucide/vue'",
  '',
  'const form = useForm({})',
  '</' + 'script>',
].join('\n')
</script>
