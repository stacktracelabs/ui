<template>
    <WorkbenchLayout>
        <Head title="Customers" />

        <div class="flex w-full flex-col gap-6">
            <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div class="flex flex-col gap-1">
                    <h1 class="text-2xl font-semibold tracking-tight">Customers</h1>
                    <p class="text-sm text-muted-foreground">
                        Query-backed customer data with server-side search, filters, sorting, and actions.
                    </p>
                </div>

                <ButtonLink :href="route('workbench.customers.collection')" variant="outline" size="sm">
                    View collection table
                </ButtonLink>
            </header>

            <Card class="gap-0 py-0">
                <CardContent class="p-0">
                    <DataTable :table="customers" @update-plan="openUpdatePlanDialog" />
                </CardContent>
            </Card>
        </div>

        <UpdatePlanDialog :control="updatePlanDialog" :customers="selectedCustomers" />
    </WorkbenchLayout>
</template>

<script setup lang="ts">
import { ButtonLink } from '@/Components/Base/Button'
import { Card, CardContent } from '@/Components/Base/Card'
import { DataTable, type DataTableValue } from '@/Components/Base/DataTable'
import { useToggle } from '@stacktrace/ui'
import WorkbenchLayout from '@/Docs/Layouts/WorkbenchLayout.vue'
import { Head } from '@inertiajs/vue3'
import { shallowRef } from 'vue'
import UpdatePlanDialog from './Components/UpdatePlanDialog.vue'

defineProps<{
    customers: DataTableValue
}>()

const updatePlanDialog = useToggle()
const selectedCustomers = shallowRef<number[]>([])

function openUpdatePlanDialog(selection: number[]): void {
    selectedCustomers.value = [...selection]
    updatePlanDialog.activate()
}
</script>
