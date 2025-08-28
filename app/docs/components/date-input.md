# Date Input

Enables user to either type a date or to select one.

<ComponentSource
  source="components/date-input"
  primitive="https://reka-ui.com/docs/components/date-picker"
/>

<ComponentPreview name="DateInput" />

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
php artisan ui:add date-input
```

## Usage

```vue
<template>
  <DateInput />
</template>

<script setup lang="ts">
import { DateInput } from '@/Components/DateInput'
</script>
```
