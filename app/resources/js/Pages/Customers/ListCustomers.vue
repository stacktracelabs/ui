<template>
  <Head title="Customers" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">Customers</h2>
    </template>

    <div class="py-8">
      <div class="mx-auto sm:px-6 lg:px-8">
        <Card class="p-0">
          <DataTable :table="customers" @update-plan="onUpdatePlan" />
        </Card>
      </div>
    </div>

    <UpdatePlanDialog
      :control="updatePlanDialog"
      :customers="selectedCustomers"
    />
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { type DataTableValue, DataTable } from "@/Components/DataTable";
import { useToggle } from "@stacktrace/ui";
import { Head } from "@inertiajs/vue3";
import { AuthenticatedLayout } from "@/Layouts";
import { Card } from "@/Components/Card";
import { ref } from 'vue'
import UpdatePlanDialog from './Components/UpdatePlanDialog.vue'

defineProps<{
  customers: DataTableValue
}>()

const updatePlanDialog = useToggle()
const selectedCustomers = ref<Array<number>>([])
const onUpdatePlan = (selection: Array<number>) => {
  selectedCustomers.value = [...selection]
  updatePlanDialog.activate()
}
</script>
