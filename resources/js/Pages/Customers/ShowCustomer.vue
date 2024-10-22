<template>
  <Head title="Customers" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">{{ name }}</h2>
    </template>

    <div class="py-8">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Card class="p-0">
          <Panel>
            <PanelHeader class="px-6">
              <PanelTitle>About</PanelTitle>
            </PanelHeader>
            <PanelContent>
              <PanelItem label="Name" class="px-6">{{ name }}</PanelItem>
              <PanelItem label="Company" class="px-6">{{ company }}</PanelItem>
              <PanelItem label="E-Mail" class="px-6">{{ email }}</PanelItem>
            </PanelContent>
          </Panel>
        </Card>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { Head } from "@inertiajs/vue3"
import { AuthenticatedLayout } from "@/Layouts"
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelItem } from '@/Components/Panel'
import { Card } from "@/Components/Card";

defineProps<{
  name: string
  company: string
  email: string
}>()
</script>
