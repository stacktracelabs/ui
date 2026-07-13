<template>
  <div class="grid gap-3">
    <div class="flex items-center gap-2">
      <Checkbox
        id="select-all-tasks"
        :model-value="allSelected"
        :indeterminate="partiallySelected"
        @update:model-value="toggleAll"
      />
      <Label for="select-all-tasks">
        Select all tasks
      </Label>
    </div>

    <div class="ml-6 grid gap-3">
      <div v-for="task in tasks" :key="task.id" class="flex items-center gap-2">
        <Checkbox
          :id="`task-${task.id}`"
          v-model="selectedTasks"
          :value="task.id"
        />
        <Label :for="`task-${task.id}`">
          {{ task.label }}
        </Label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Checkbox } from '@/Components/Base/Checkbox'
import { Label } from '@/Components/Base/Label'

const tasks = [
  { id: 'review', label: 'Review changes' },
  { id: 'test', label: 'Run tests' },
  { id: 'deploy', label: 'Deploy release' },
]

const selectedTasks = ref<string[]>(['review'])

const allSelected = computed(() => selectedTasks.value.length === tasks.length)
const partiallySelected = computed(() => selectedTasks.value.length > 0 && !allSelected.value)

function toggleAll(checked: boolean) {
  selectedTasks.value = checked ? tasks.map(task => task.id) : []
}
</script>
