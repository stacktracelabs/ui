<template>
  <ActionButton :class="{ 'px-2': !bulk }" size="sm" :variant="bulk ? 'default' : 'ghost'" @click="onExec" :processing="inlineRowForm.processing">
    <Icon class="w-4 h-4" v-if="action.icon" :src="action.icon.src" />
    {{ action.label }}
  </ActionButton>
</template>

<script setup lang="ts">
import { ActionButton } from '@/Components/Button'
import { useForm } from '@inertiajs/vue3'
import { toRaw } from 'vue'
import { type ExecutableAction, injectContext } from './internal'
import Icon from './Icon.vue'

const props = defineProps<{
  action: ExecutableAction
  bulk: boolean
  selection: Array<number | string>
}>()

const context = injectContext()

const { onExecAction } = context
const inlineRowForm = useForm({})

const onExec = () => {
  if (props.action.confirmable) {
    onExecAction(props.action, props.selection)
  } else {
    inlineRowForm.transform(() => ({
      selection: toRaw(props.selection),
      action: props.action.action,
      args: props.action.args,
    })).post(route('ui.data-table-action'), {
      preserveScroll: true,
    })
  }
}
</script>
