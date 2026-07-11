<template>
  <DocsLayout>
    <Head title="Composition" />
    <DocsPage
      title="Composition"
      description="Build and consume components that preserve Reka UI's element, behavior, and accessibility contracts."
    >
      <h2 id="mental-model">Mental model</h2>
      <p>
        StackTrace UI components are designed to compose behavior onto the
        element that should actually appear in the document. Reka UI provides
        the underlying <code>Primitive</code>, <code>as</code>, and
        <code>as-child</code> APIs that make this possible.
      </p>
      <p>
        Prefer the component's default element unless another semantic element
        is required. Composition should change the rendered element without
        losing attributes, event handlers, focus behavior, keyboard behavior,
        or template refs.
      </p>

      <h2 id="as-and-as-child">Choosing between as and as-child</h2>
      <h3 id="as-prop">Use as to select an element</h3>
      <p>
        Use <code>as</code> when the component should keep control of rendering
        but use another HTML element or Vue component. For example,
        <code>as="a"</code> can render button styles on an anchor when no
        framework-specific link behavior is required.
      </p>

      <h3 id="as-child-prop">Use as-child to compose behavior</h3>
      <p>
        Use <code>as-child</code> when a child component should be the only
        rendered element. Reka does not render its default element; it merges
        the primitive's required props and behavior into the first child.
      </p>
      <CodeBlock :code="consumerCompositionCode" language="vue" filename="TooltipButton.vue" />
      <Alert>
        <TriangleAlertIcon />
        <AlertTitle>Preserve accessible semantics</AlertTitle>
        <AlertDescription>
          The final child must remain focusable and support the pointer and
          keyboard interactions required by the primitive. Do not replace an
          interactive trigger with a plain <code>div</code>.
        </AlertDescription>
      </Alert>

      <h3 id="multiple-primitives">Compose multiple primitives</h3>
      <p>
        Multiple trigger behaviors can share one final element. Apply
        <code>as-child</code> at every layer so the tree still renders a single
        interactive control rather than nested buttons.
      </p>
      <CodeBlock :code="multiplePrimitivesCode" language="vue" />

      <h2 id="building-primitives">Building a composable component</h2>
      <p>
        Use Reka's <code>Primitive</code> when a custom component should expose
        the same element-selection contract. Extend <code>PrimitiveProps</code>,
        forward <code>as</code> and <code>asChild</code>, and keep the default
        slot directly inside the primitive.
      </p>
      <CodeBlock :code="customPrimitiveCode" language="vue" filename="Action.vue" />
      <p>
        Do not add a wrapper between <code>Primitive</code> and the default
        slot. An extra wrapper changes the rendered structure and prevents
        <code>as-child</code> from composing onto the intended element.
      </p>

      <h2 id="wrapping-reka-components">Wrapping Reka components</h2>
      <p>
        A styled wrapper must forward every public Reka prop and emitted event.
        Remove only local presentation props such as <code>class</code> before
        forwarding. Keep the omitted object reactive so later prop updates
        continue to reach the underlying primitive.
      </p>
      <CodeBlock :code="wrapperCode" language="vue" filename="Accordion.vue" />

      <h3 id="forwarding-utilities">Choose the forwarding utility by responsibility</h3>
      <ul>
        <li>
          Use <code>reactiveOmit</code> to remove wrapper-only props while
          retaining reactivity.
        </li>
        <li>
          Use <code>useForwardProps</code> when forwarding props only. It avoids
          Vue boolean casting changing an omitted boolean into
          <code>false</code>.
        </li>
        <li>
          Use <code>useEmitAsProps</code> when emitted events alone must become
          handlers that can be bound to a child component.
        </li>
        <li>
          Use <code>useForwardPropsEmits</code> for the common wrapper case that
          forwards both props and emits through one <code>v-bind</code> object.
        </li>
        <li>
          Use <code>useForwardExpose</code> when a wrapper's component ref must
          resolve to a specific inner element and expose its props or
          <code>$el</code>.
        </li>
      </ul>

      <h2 id="context-composition">Extending compound components with context</h2>
      <p>
        Some advanced child components need state from a Reka root or item.
        Reka exposes context injection helpers for this purpose through Vue's
        provide/inject mechanism.
      </p>
      <Alert>
        <TriangleAlertIcon />
        <AlertTitle>Prefer props and events first</AlertTitle>
        <AlertDescription>
          Reka describes its injected contexts as primarily internal APIs that
          may change. Use them only for advanced child extensions, keep their
          usage localized, verify that the expected parent context exists, and
          preserve the provided TypeScript types.
        </AlertDescription>
      </Alert>

      <h2 id="author-checklist">Component author checklist</h2>
      <ul>
        <li>Choose an accessible default element.</li>
        <li>Expose <code>as</code> and <code>as-child</code> when element substitution is useful.</li>
        <li>Forward all supported props, attributes, events, and slots.</li>
        <li>Do not leak wrapper-only props onto the rendered DOM element.</li>
        <li>Forward the intended element ref when consumers need imperative access.</li>
        <li>Keep state sharing within the documented root and child hierarchy.</li>
        <li>Test the default element, <code>as</code>, <code>as-child</code>, and nested trigger composition.</li>
      </ul>

      <h2 id="reka-references">Reka UI references</h2>
      <ul>
        <li><a href="https://reka-ui.com/docs/guides/composition" target="_blank" rel="noreferrer">Composition guide</a></li>
        <li><a href="https://reka-ui.com/docs/utilities/primitive" target="_blank" rel="noreferrer">Primitive</a></li>
        <li><a href="https://reka-ui.com/docs/utilities/use-forward-props" target="_blank" rel="noreferrer">useForwardProps</a></li>
        <li><a href="https://reka-ui.com/docs/utilities/use-forward-props-emits" target="_blank" rel="noreferrer">useForwardPropsEmits</a></li>
        <li><a href="https://reka-ui.com/docs/utilities/use-emit-as-props" target="_blank" rel="noreferrer">useEmitAsProps</a></li>
        <li><a href="https://reka-ui.com/docs/utilities/use-forward-expose" target="_blank" rel="noreferrer">useForwardExpose</a></li>
        <li><a href="https://reka-ui.com/docs/guides/inject-context" target="_blank" rel="noreferrer">Inject Context guide</a></li>
      </ul>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { TriangleAlertIcon } from '@lucide/vue'
import { Alert, AlertDescription, AlertTitle } from '@/Components/Base/Alert'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const consumerCompositionCode = [
  '<template>',
  '  <TooltipProvider>',
  '    <Tooltip>',
  '      <TooltipTrigger as-child>',
  '        <Button variant="outline">More information</Button>',
  '      </TooltipTrigger>',
  '      <TooltipContent>Details about this action.</TooltipContent>',
  '    </Tooltip>',
  '  </TooltipProvider>',
  '</template>',
].join('\n')

const multiplePrimitivesCode = [
  '<TooltipTrigger as-child>',
  '  <DialogTrigger as-child>',
  '    <Button>Open dialog</Button>',
  '  </DialogTrigger>',
  '</TooltipTrigger>',
].join('\n')

const customPrimitiveCode = [
  '<template>',
  '  <Primitive',
  '    data-slot="action"',
  '    :as="as"',
  '    :as-child="asChild"',
  '    :class="cn(\'inline-flex items-center gap-2\', props.class)"',
  '  >',
  '    <slot />',
  '  </Primitive>',
  '</template>',
  '',
  '<script setup lang="ts">',
  "import type { HTMLAttributes } from 'vue'",
  "import type { PrimitiveProps } from 'reka-ui'",
  "import { Primitive } from 'reka-ui'",
  "import { cn } from '@/Utils'",
  '',
  'const props = withDefaults(defineProps<PrimitiveProps & {',
  "  class?: HTMLAttributes['class']",
  '}>(), {',
  "  as: 'button',",
  '})',
  '</' + 'script>',
].join('\n')

const wrapperCode = [
  '<template>',
  '  <AccordionRoot v-bind="forwarded" :class="props.class">',
  '    <slot />',
  '  </AccordionRoot>',
  '</template>',
  '',
  '<script setup lang="ts">',
  "import type { HTMLAttributes } from 'vue'",
  "import { reactiveOmit } from '@vueuse/core'",
  'import {',
  '  AccordionRoot,',
  '  type AccordionRootEmits,',
  '  type AccordionRootProps,',
  '  useForwardPropsEmits,',
  "} from 'reka-ui'",
  '',
  'const props = defineProps<AccordionRootProps & {',
  "  class?: HTMLAttributes['class']",
  '}>()',
  'const emits = defineEmits<AccordionRootEmits>()',
  "const delegatedProps = reactiveOmit(props, 'class')",
  'const forwarded = useForwardPropsEmits(delegatedProps, emits)',
  '</' + 'script>',
].join('\n')
</script>
