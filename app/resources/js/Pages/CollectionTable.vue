<template>
  <Head title="Collection Customers" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">Collection Customers</h2>
    </template>

    <div class="py-8">
      <div class="mx-auto sm:px-6 lg:px-8">
        <Card class="p-0">
          <DataTable :table="customers" />
        </Card>
      </div>
    </div>

  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { type DataTableValue, DataTable } from "@/Components/DataTable";
import { Head } from "@inertiajs/vue3";
import { AuthenticatedLayout } from "@/Layouts";
import { Card } from "@/Components/Card";

defineProps<{
  customers: DataTableValue
}>()
</script>
