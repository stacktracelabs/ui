<template>
  <div>
    <component v-if="component" :is="component" />

    <code v-if="code">{{ code }}</code>
  </div>
</template>

<script setup lang="ts">
import { onMounted, shallowRef, type Component, ref } from "vue";

const props = defineProps<{
  name: string
}>()

const component = shallowRef<Component>()
const code = ref<string>()

onMounted(async () => {
  component.value = await import((`../../previews/${props.name}.vue`)).then(it => it.default)

  code.value = await import((`../../previews/${props.name}.vue?raw`)).then(it => it.default.trim())
})
</script>
