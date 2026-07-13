<template>
  <input
    ref="inputEl"
    type="checkbox"
    data-slot="checkbox"
    v-model="checked"
    :value="value"
    :class="cn('peer border-input checked:bg-primary indeterminate:bg-primary checked:border-primary indeterminate:border-primary text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow appearance-none p-0 inline-grid place-content-center align-middle cursor-pointer outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50')"
  >
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { cn } from "@/Utils";
import { onMounted, ref, watch } from "vue";

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue?: any
  value?: any
  indeterminate?: boolean
}>()

const checked = useVModel(props, 'modelValue', emit)

const inputEl = ref<HTMLInputElement>()

const setIndeterminate = (value: boolean) => {
  if (inputEl.value) {
    inputEl.value.indeterminate = value
  }
}

onMounted(() => {
  setIndeterminate(props.indeterminate)
})

watch(() => props.indeterminate, () => {
  setIndeterminate(props.indeterminate)
})
</script>
<style scoped>
input[type="checkbox"] {
  print-color-adjust: exact;
  user-select: none;
}

input[type="checkbox"]::before {
  width: 0.875rem;
  height: 0.875rem;
  visibility: hidden;
  content: "";
  background-color: currentColor;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
}

input[type="checkbox"]:checked::before {
  visibility: visible;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='black' d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='black' d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
}

input[type="checkbox"]:indeterminate::before {
  visibility: visible;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='black' stroke-linecap='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='black' stroke-linecap='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E");
}
</style>
