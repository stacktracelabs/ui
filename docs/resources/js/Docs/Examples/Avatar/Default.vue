<template>
  <Avatar>
    <AvatarImage
      src="https://github.com/stacktracelabs.png"
      alt="StackTrace Labs"
    />
    <AvatarFallback>ST</AvatarFallback>
  </Avatar>
</template>

<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/Components/Base/Avatar'
</script>
