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
      <p>
        Use <code>Button</code> for actions performed in the current interface.
        Use <code>ButtonLink</code> when the interaction navigates through
        Inertia or sends an Inertia request. Choose a variant according to the
        action's importance and risk, not according to personal color
        preference.
      </p>

      <h2 id="variants">Variants</h2>
      <p>
        Variants communicate an action's priority and intent. Prefer the
        lowest-emphasis variant that still makes the action discoverable, and
        avoid placing several visually dominant actions in the same group.
      </p>

      <h3 id="default">Default</h3>
      <p>
        Use the default variant for the primary action in a page, form,
        dialog, or action group—for example, <em>Save</em>, <em>Create</em>, or
        <em>Continue</em>. Prefer a single default button per action group so
        the next step remains obvious.
      </p>
      <ComponentPreview
        title="Default"
        :source="defaultExampleSource"
      >
        <DefaultExample />
      </ComponentPreview>

      <h3 id="secondary">Secondary</h3>
      <p>
        Use the secondary variant for a supporting action that should remain
        prominent but is less important than the primary action. It works well
        for a meaningful alternative beside a default button, but should not
        compete with it for attention.
      </p>
      <ComponentPreview
        title="Secondary"
        :source="secondaryExampleSource"
      >
        <SecondaryExample />
      </ComponentPreview>

      <h3 id="destructive">Destructive</h3>
      <p>
        Use the destructive variant for actions that delete data, revoke
        access, or cause another difficult-to-reverse outcome. Do not use it
        merely to display an error or a negative status.
      </p>
      <DocsComponentRecommendation
        title="Confirm significant destructive actions"
        component-href="/docs/components/confirmation-dialog"
        component-name="Confirmation Dialog"
      >
        Ask for confirmation when accidental activation would cause a
        significant or irreversible consequence. The confirmation should name
        the action and make its result clear.
      </DocsComponentRecommendation>
      <ComponentPreview
        title="Destructive"
        :source="destructiveExampleSource"
      >
        <DestructiveExample />
      </ComponentPreview>

      <h3 id="outline">Outline</h3>
      <p>
        Use the outline variant for neutral alternatives such as
        <em>Cancel</em>, <em>Back</em>, or an optional action beside the primary
        button. Its visible boundary is useful when the surrounding surface
        does not otherwise make a button obvious.
      </p>
      <ComponentPreview
        title="Outline"
        :source="outlineExampleSource"
      >
        <OutlineExample />
      </ComponentPreview>

      <h3 id="ghost">Ghost</h3>
      <p>
        Use the ghost variant for low-priority or frequently repeated actions
        in toolbars, table rows, menus, and compact controls. Use it only when
        the surrounding context already makes the element's interactivity
        clear.
      </p>
      <ComponentPreview
        title="Ghost"
        :source="ghostExampleSource"
      >
        <GhostExample />
      </ComponentPreview>

      <h3 id="link">Link</h3>
      <p>
        Use the link variant for a button action that should visually sit
        inside surrounding text. This variant changes appearance only. For
        actual Inertia navigation, use <code>ButtonLink variant="link"</code>
        so the element also has link behavior.
      </p>
      <ComponentPreview
        title="Link"
        :source="linkExampleSource"
      >
        <LinkExample />
      </ComponentPreview>

      <h2 id="sizes-and-composition">Sizes and composition</h2>
      <p>
        Use the default size for most forms and dialogs, <code>sm</code> for
        dense interfaces such as toolbars and table rows, and <code>lg</code>
        for prominent standalone calls to action. Reserve icon sizes for
        icon-only controls.
      </p>
      <DocsComponentRecommendation
        title="Group related buttons"
        component-href="/docs/components/button-group"
        component-name="Button Group"
      >
        When multiple related buttons form one compact control, use Button
        Group instead of manually joining their borders or spacing. Keep
        independent actions, such as Save and Cancel, as separate buttons.
      </DocsComponentRecommendation>

      <h3 id="icon">Icon</h3>
      <p>
        Use an icon-only button only when the symbol is widely understood in
        context, such as close, search, or next. Always provide an accessible
        name with <code>aria-label</code>. If the action could be ambiguous,
        include a visible text label instead.
      </p>
      <ComponentPreview
        title="Icon"
        :source="iconExampleSource"
      >
        <IconExample />
      </ComponentPreview>

      <h3 id="as-child">As child</h3>
      <p>
        Use <code>as-child</code> to apply button styling and behavior to
        another element without adding a wrapper. Preserve the semantics of
        the child element, and prefer <code>ButtonLink</code> instead when the
        child would be an Inertia link. Read the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>
        before building a custom component that accepts composed behavior.
      </p>
      <ComponentPreview
        title="As child"
        :source="asChildExampleSource"
      >
        <AsChildExample />
      </ComponentPreview>

      <h3 id="label-and-icon">Label and icon</h3>
      <p>
        Add an icon when it reinforces the label or improves recognition; do
        not use a decorative icon merely to make every button look busier.
        Compose icons and labels in the default slot. The button sizes nested
        SVG icons automatically, so manual width and height classes are
        normally unnecessary.
      </p>
      <ComponentPreview
        title="Label and icon"
        :source="labelAndIconExampleSource"
      >
        <LabelAndIconExample />
      </ComponentPreview>

      <h3 id="button-link">Inertia link</h3>
      <p>
        Use <code>ButtonLink</code> whenever a button-looking control navigates
        through Inertia or sends an Inertia request. It renders an Inertia
        <code>Link</code> with button styles and forwards props such as
        <code>method</code>, <code>data</code>, <code>preserve-scroll</code>, and
        <code>as</code>. During an active visit, a nested
        <code>ButtonState</code> responds directly to Inertia's
        <code>data-loading</code> attribute and displays its spinner
        automatically.
      </p>
      <ComponentPreview
        title="Button link"
        :source="buttonLinkExampleSource"
      >
        <ButtonLinkExample />
      </ComponentPreview>
      <p>
        Render non-GET actions as a button instead of an anchor.
      </p>
      <CodeBlock
        :code="buttonLinkActionCode"
        language="vue"
      />

      <h2 id="processing-states">Processing composition</h2>
      <p>
        <code>Button</code> intentionally owns no asynchronous state. Compose
        <code>ButtonState</code> inside it when a button needs pending or
        recently successful feedback. Disable the outer button separately
        when repeated submissions should be prevented.
      </p>

      <h3 id="processing">Processing</h3>
      <p>
        Show processing feedback when an action takes long enough that the
        user may otherwise repeat it or wonder whether it started. For a
        regular button, bind the request state to <code>ButtonState</code> and
        disable the outer <code>Button</code> while processing to prevent
        duplicate submissions.
      </p>
      <ComponentPreview
        title="Processing"
        :source="processingExampleSource"
      >
        <ProcessingExample />
      </ComponentPreview>

      <h3 id="inertia-form-state">Inertia form state</h3>
      <p>
        Bind an Inertia form's <code>processing</code> and
        <code>recentlySuccessful</code> values to
        <code>ButtonState</code>. The default slot is the idle content;
        use the <code>success</code> slot to customize the success label. Use
        recently successful feedback for a brief, local confirmation such as
        saving a field. Prefer a toast or persistent message when the outcome
        must remain visible after attention moves away from the button.
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

      <h2 id="recommendations">Recommendations</h2>
      <h3 id="icon-direction-markers">Icon direction markers</h3>
      <p>
        The <code>data-icon="inline-start"</code> and
        <code>data-icon="inline-end"</code> attributes are optional. Button
        sizing and spacing do not depend on them. If your application does not
        support right-to-left layouts or position-specific icon styling, you
        can omit these attributes. Keep them when you need a directional
        styling hook.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import AsChildExample from '@/Docs/Examples/Button/AsChild.vue'
import asChildExampleSource from '@/Docs/Examples/Button/AsChild.vue?raw'
import ButtonLinkExample from '@/Docs/Examples/Button/ButtonLink.vue'
import buttonLinkExampleSource from '@/Docs/Examples/Button/ButtonLink.vue?raw'
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
const buttonLinkActionCode = [
  '<ButtonLink',
  '  href="/logout"',
  '  method="post"',
  '  as="button"',
  '  variant="outline"',
  '>',
  '  <ButtonState>Log out</ButtonState>',
  '</ButtonLink>',
].join('\n')
const inertiaFormCode = [
  '<template>',
  '  <form @submit.prevent="form.post(\'/projects\')">',
  '    <Button type="submit" :disabled="form.processing">',
  '      <ButtonState',
  '        :processing="form.processing"',
  '        :recently-successful="form.recentlySuccessful"',
  '      >',
  '        <SaveIcon data-icon="inline-start" />',
  '        Save',
  '',
  '        <template #success>Saved</template>',
  '      </ButtonState>',
  '    </Button>',
  '  </form>',
  '</template>',
  '',
  '<script setup lang="ts">',
  "import { Button, ButtonState } from '@/Components/Button'",
  "import { useForm } from '@inertiajs/vue3'",
  "import { SaveIcon } from '@lucide/vue'",
  '',
  'const form = useForm({})',
  '</' + 'script>',
].join('\n')
</script>
