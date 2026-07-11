<template>
  <InputGroup class="w-full max-w-md">
    <InputGroupTextarea
      v-model="message"
      maxlength="280"
      placeholder="Write a reply…"
    />
    <InputGroupAddon align="block-end">
      <InputGroupText>{{ message.length }}/280</InputGroupText>
      <InputGroupButton class="ml-auto" variant="default">
        Send
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
</template>

<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from '@/Components/Base/InputGroup'
import { ref } from 'vue'

const message = ref('')
</script>
