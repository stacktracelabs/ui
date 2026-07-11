# Composition fundamentals

StackTrace UI uses Reka UI primitives to place behavior on the element that should actually appear in the document. Composition may change that element without losing attributes, event handlers, focus behavior, keyboard behavior, or template refs.

Prefer the component's default element unless another semantic element is required.

## Choose between `as` and `as-child`

Use `as` when the component should keep control of rendering while selecting another HTML element or Vue component.

Use `as-child` when the first child must be the only rendered element. Reka omits its default element and merges the primitive's props and behavior into the child.

```vue
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="outline">More information</Button>
    </TooltipTrigger>
    <TooltipContent>Details about this action.</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

The final child must remain focusable and support the pointer and keyboard interactions required by the primitive. Do not replace an interactive trigger with a plain `div`.

## Compose several behaviors onto one element

Apply `as-child` at every trigger layer to avoid nested buttons:

```vue
<TooltipTrigger as-child>
  <DialogTrigger as-child>
    <Button>Open dialog</Button>
  </DialogTrigger>
</TooltipTrigger>
```

## Build a composable custom primitive

Use Reka's `Primitive`, extend `PrimitiveProps`, forward `as` and `asChild`, and keep the default slot directly inside the primitive:

```vue
<template>
  <Primitive
    data-slot="action"
    :as="as"
    :as-child="asChild"
    :class="cn('inline-flex items-center gap-2', props.class)"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/Utils'

const props = withDefaults(defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
}>(), {
  as: 'button',
})
</script>
```

Do not insert a wrapper between `Primitive` and the default slot; it changes the rendered structure and prevents composition onto the intended element.

## Wrap Reka components without losing their contract

A styled wrapper must forward every public Reka prop and emitted event. Remove only local presentation props such as `class`. Keep the omitted object reactive.

```vue
<template>
  <AccordionRoot v-bind="forwarded" :class="props.class">
    <slot />
  </AccordionRoot>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<AccordionRootProps & {
  class?: HTMLAttributes['class']
}>()
const emits = defineEmits<AccordionRootEmits>()
const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
```

## Forwarding utilities

- `reactiveOmit`: remove wrapper-only props while retaining reactivity.
- `useForwardProps`: forward props while preserving an omitted boolean as omitted instead of Vue-cast `false`.
- `useEmitAsProps`: expose emitted events as handlers bindable to a child.
- `useForwardPropsEmits`: forward both props and emits through one `v-bind` object.
- `useForwardExpose`: make a wrapper ref resolve to the intended inner element and expose its props or `$el`.

## Context injection

Some advanced children need state from a Reka root or item through its injection helpers. Treat these contexts as internal, potentially changing APIs. Prefer props and events, localize context usage, verify that the expected parent exists, and retain its TypeScript types.

## Author checklist

- Choose an accessible default element.
- Expose `as` and `as-child` when element substitution is useful.
- Forward supported props, attributes, events, and slots.
- Do not leak wrapper-only props to the DOM.
- Forward the intended element ref when consumers need imperative access.
- Keep context within the documented root-child hierarchy.
- Test the default element, `as`, `as-child`, and nested trigger composition.

Official Reka references: [composition](https://reka-ui.com/docs/guides/composition), [Primitive](https://reka-ui.com/docs/utilities/primitive), [useForwardProps](https://reka-ui.com/docs/utilities/use-forward-props), [useForwardPropsEmits](https://reka-ui.com/docs/utilities/use-forward-props-emits), [useEmitAsProps](https://reka-ui.com/docs/utilities/use-emit-as-props), [useForwardExpose](https://reka-ui.com/docs/utilities/use-forward-expose), and [inject context](https://reka-ui.com/docs/guides/inject-context).
