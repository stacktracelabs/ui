<template>
  <fieldset class="grid gap-2">
    <legend class="text-sm font-medium">
      Verification code
    </legend>
    <InputOTP
      v-model="value"
      :maxlength="6"
      autocomplete="one-time-code"
      inputmode="numeric"
    >
      <InputOTPGroup>
        <InputOTPSlot :index="0" />
        <InputOTPSlot :index="1" />
        <InputOTPSlot :index="2" />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot :index="3" />
        <InputOTPSlot :index="4" />
        <InputOTPSlot :index="5" />
      </InputOTPGroup>
    </InputOTP>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/Components/Base/InputOTP'

const value = ref('')
</script>
