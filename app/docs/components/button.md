# Button

Displays a button or a component that looks like a button.

<ComponentSource
  source="components/button"
  ui="https://www.shadcn-vue.com/docs/components/button.html"
/>

<ComponentPreview name="Button" />

## Installation

```shell
php artisan ui:add button
```

## Usage

```vue
<template>
  <Button>Button</Button>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Button'
</script>
```

## Examples

### Primary

<ComponentPreview name="Button" />

### Secondary

<ComponentPreview name="ButtonSecondary" />

### Destructive

<ComponentPreview name="ButtonDestructive" />

### Outline

<ComponentPreview name="ButtonOutline" />

### Ghost

<ComponentPreview name="ButtonGhost" />

### Link

<ComponentPreview name="ButtonLink" />

### Icon

<ComponentPreview name="ButtonIcon" />

### As Child

<ComponentPreview name="Button" />

## Action Button

You may use `<ActionButton />` to display processing state or icon more easily. The `<ActionButton />` inherits all
functionality from a `<Button />` component.

### Processing

<ComponentPreview name="ButtonProcessing" />

### Label and Icon

<ComponentPreview name="ButtonLabelAndIcon" />

### Processing, Label, Icon and Recently Successful

You may use `processing`, `icon`, `label` and `recently-successful` to display a button for submitting an Inertia form. 

<ComponentPreview name="ButtonLabelAndIconProcessing" />

```vue
<template>
  <form @submit.prevent="form.post('/')">
    <ActionButton
      label="Save"
      :icon="SaveIcon"
      :processing="form.processing"
      :recently-successful="form.recentlySuccessful"
      type="submit"
    />
  </form>
</template>

<script setup lang="ts">
import { ActionButton } from '@/Components/Button'
import { SaveIcon } from 'lucide-vue-next'
import { useForm } from '@inertiajs/vue3'
  
const form = useForm({})
</script>
```
