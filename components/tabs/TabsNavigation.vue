<template>
  <TabsLinkList v-if="navigation.length > 0" :orientation="orientation">
    <TabsNavigationItem v-for="item in navigation" :item="item" />
  </TabsLinkList>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TabsLinkList from './TabsLinkList.vue'
import TabsNavigationItem from './TabsNavigationItem.vue'
import { type Menu, useNavigation } from '@stacktrace/ui'

const props = defineProps<{
  menu: Menu
  orientation?: 'horizontal' | 'vertical'
}>()

const navigation = useNavigation(computed(() => props.menu))
</script>
