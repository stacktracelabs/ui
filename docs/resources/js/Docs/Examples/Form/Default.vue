<template>
  <form class="w-full max-w-md">
    <FormControl
      for="form-email"
      label="Email address"
      help="We use this address for account notifications."
      required
    >
      <Input id="form-email" type="email" placeholder="ada@example.com" />
    </FormControl>
  </form>
</template>

<script setup lang="ts">
import { FormControl } from '@/Components/Base/Form'
import { Input } from '@/Components/Base/Input'
</script>
