<template>
  <Primitive
      :as="renderAs"
      v-bind="renderProps"
      @click="onClick"
      :data-active="item.isActive || item.isChildActive ? 'active' : undefined"
      :data-state="item.isActive ? 'active' : 'inactive'"
      :data-child-state="item.isChildActive ? 'active' : 'inactive'"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { provideNavigationItemContext } from './navigation.ts'
import type { NavigationItem } from '@/Composables'
import { isLinkAction, isLinkPathAction, isRouteAction, isEventAction } from '@/Composables'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { Link } from '@inertiajs/vue3'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'

interface Props extends PrimitiveProps {
  item: NavigationItem
}

const emit = defineEmits(['click'])
const props = defineProps<Props>()

provideNavigationItemContext(computed(() => props.item))

const delegatedProps = reactiveOmit(props, 'item', 'as')

const renderAs = computed(() => {
  if (props.as !== undefined) {
    return props.as
  }

  const action = props.item.action

  if (action) {
    if (isLinkAction(action)) {
      return action.external === true ? 'a' : Link
    } else if (isLinkPathAction(action) || isRouteAction(action)) {
      return Link
    }
  }

  return 'button'
})

const renderProps = computed(() => {
  const action = props.item.action

  const anotherProps: Record<string, any> = {}

  if (action) {
    if (isLinkAction(action)) {
      anotherProps.href = action.url
      if (action.external !== true) {
        anotherProps.preserveScroll = action.preserveScroll
        anotherProps.preserveState = action.preserveState
      }
    } else if (isLinkPathAction(action)) {
      anotherProps.href = action.path
      anotherProps.preserveScroll = action.preserveScroll
      anotherProps.preserveState = action.preserveState
    } else if (isRouteAction(action)) {
      anotherProps.href = route(action.route, action.params)
      anotherProps.preserveScroll = action.preserveScroll
      anotherProps.preserveState = action.preserveState
    }
  }
  return { ...delegatedProps, ...anotherProps }
})

const onClick = (event: any) => {
  const action = props.item.action

  if (action && isEventAction(action)) {
    action(event)
  } else {
    emit('click', event)
  }
}
</script>
