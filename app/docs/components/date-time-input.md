# Date Time Input

Enables user to input specific date and time.

<ComponentSource
  source="components/date-time-input"
  primitive="https://reka-ui.com/docs/components/date-field"
/>

<ComponentPreview name="DateTimeInput" />

## Installation

:::info NOTE
The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.

We highly recommend reading through the documentation for the package to get a solid feel for how it works, and you'll need to install it in your project to use the date-related components.
:::

Install the date package.

```shell
npm add @internationalized/date
```

Install the component from your command line.

```shell
php artisan ui:add date-time-input
```

## Usage

### Date only

```vue
<template>
  <DateTimeInput />
</template>

<script setup lang="ts">
import { DateTimeInput } from '@/Components/DateTimeInput'
</script>
```

### Date with time

```vue
<template>
  <DateTimeInput granularity="second" />
</template>

<script setup lang="ts">
import { DateTimeInput } from '@/Components/DateTimeInput'
</script>
```
