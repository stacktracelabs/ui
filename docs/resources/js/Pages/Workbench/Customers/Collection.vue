<template>
    <WorkbenchLayout>
        <Head title="Collection customers" />

        <div class="flex w-full flex-col gap-6">
            <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div class="flex flex-col gap-1">
                    <h1 class="text-2xl font-semibold tracking-tight">Collection customers</h1>
                    <p class="text-sm text-muted-foreground">
                        An in-memory collection using the same table controls and presentation.
                    </p>
                </div>

                <ButtonLink :href="route('workbench.customers.index')" variant="outline" size="sm">
                    View query table
                </ButtonLink>
            </header>

            <Card class="gap-0 py-0">
                <CardContent class="p-0">
                    <DataTable :table="customers" />
                </CardContent>
            </Card>
        </div>
    </WorkbenchLayout>
</template>

<script setup lang="ts">
import { ButtonLink } from '@/Components/Base/Button'
import { Card, CardContent } from '@/Components/Base/Card'
import { DataTable, type DataTableValue } from '@/Components/Base/DataTable'
import WorkbenchLayout from '@/Docs/Layouts/WorkbenchLayout.vue'
import { Head } from '@inertiajs/vue3'

defineProps<{
    customers: DataTableValue
}>()
</script>
