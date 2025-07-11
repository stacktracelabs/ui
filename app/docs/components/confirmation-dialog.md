# Confirmation Dialog

A dialog to prompt user to confirm an action.

<ComponentSource
  source="components/ConfirmationDialog"
/>

<ComponentPreview name="ConfirmationDialog" />

## Installation

#### Run the following command

```shell
php artisan ui:add confirmation-dialog
```

#### Add `ConfirmationDialog` to application root component

```vue title="AppLayout.vue"
<template>
  <main>
    <slot />
  </main>

  <ConfirmationDialog />
</template>

<script setup lang="ts">
import { ConfirmationDialog } from '@/Components/ConfirmationDialog'  
</script>
```

## Usage

```vue
<template>
  <Button variant="destructive" @click="destroy">Delete</Button>
</template>

<script setup lang="ts">
import { useConfirmable } from '@/Components/ConfirmationDialog'
import { Button } from '@/Components/Button'

const { confirmDestructive } = useConfirmable()

const destroy = () => confirmDestructive('Are you sure you want to delete this resource?', async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
})
</script>
```
