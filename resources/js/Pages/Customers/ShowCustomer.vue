<template>
  <Head title="Customers" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">{{ name }}</h2>
    </template>

    <div class="py-4 sm:py-6 lg:py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card class="p-0">
          <Panel>
            <PanelHeader class="px-4 sm:px-6">
              <PanelTitle>About</PanelTitle>
            </PanelHeader>
            <PanelContent>
              <PanelItem label="Name" class="px-4 sm:px-6">{{ name }}</PanelItem>
              <PanelItem label="Company" class="px-4 sm:px-6">{{ company }}</PanelItem>
              <PanelItem label="E-Mail" class="px-4 sm:px-6">{{ email }}</PanelItem>
            </PanelContent>
          </Panel>
        </Card>

        <Card class="mt-6 p-0">
          <Panel as="form" @submit.prevent="save">
            <PanelHeader class="px-4 sm:px-6">
              <PanelTitle>Settings</PanelTitle>
            </PanelHeader>
            <PanelContent>
              <PanelItem class="px-4 sm:px-6">
                <FormControl label="Name" variant="horizontal" help="A valid company name from The Company Registry." required :error="form.errors.name">
                  <Input v-model="form.name" class="sm:max-w-sm" />
                </FormControl>
              </PanelItem>
            </PanelContent>
            <PanelFooter class="px-4 sm:px-6 justify-end flex">
              <ActionButton :recently-successful="form.recentlySuccessful" :processing="form.processing" type="submit" label="Save" class="w-full sm:w-auto" />
            </PanelFooter>
          </Panel>
        </Card>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { Head, useForm } from "@inertiajs/vue3"
import { AuthenticatedLayout } from "@/Layouts"
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelItem, PanelFooter } from '@/Components/Panel'
import { Card } from "@/Components/Card";
import { FormControl } from '@/Components/Form'
import { Input } from '@/Components/Input'
import { ActionButton } from '@/Components/Button'

const props = defineProps<{
  id: number
  name: string
  company: string
  email: string
}>()

const form = useForm(() => ({
  name: props.name,
}))

const save = () => form.patch(route('customers.update', props.id), { preserveScroll: true })
</script>
