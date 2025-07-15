<template>
  <Icon v-if="icon && 'src' in icon" :src="icon.src" />
  <component v-else-if="icon" :is="icon" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { injectNavigationItemContext } from './navigation.ts'
import { Icon } from '@/Components/Icon'

const item = injectNavigationItemContext()

const icon = computed(() => item.value?.icon)
</script>
