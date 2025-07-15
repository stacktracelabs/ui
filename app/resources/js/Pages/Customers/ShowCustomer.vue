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
            <PanelHeader class="px-4 sm:px-6 h-14 flex flex-row justify-between items-center">
              <PanelTitle>About</PanelTitle>

              <DataTableResourceActions :actions="actions" @update-plan="onUpdatePlan" visible v-slot="{ resource }">
                <DropdownMenuItem @select="copyId(resource.key)">Copy ID</DropdownMenuItem>
              </DataTableResourceActions>
            </PanelHeader>
            <PanelContent>
              <PanelItem label="Name" class="px-4 sm:px-6">{{ name }}</PanelItem>
              <PanelItem label="Company" class="px-4 sm:px-6">{{ company }}</PanelItem>
              <PanelItem label="E-Mail" class="px-4 sm:px-6">{{ email }}</PanelItem>
              <PanelItem label="Plan" class="px-4 sm:px-6">{{ plan }}</PanelItem>
            </PanelContent>
          </Panel>
        </Card>

        <Card class="mt-6 p-0">
          <Panel as="form" @submit.prevent="save">
            <PanelHeader class="px-4 sm:px-6 h-14 py-0 flex items-center">
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
              <Button :recently-successful="form.recentlySuccessful" :processing="form.processing" type="submit" label="Save" class="w-full sm:w-auto" />
            </PanelFooter>
          </Panel>
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
import { toast } from 'vue-sonner'
import { Head, useForm } from "@inertiajs/vue3"
import { AuthenticatedLayout } from "@/Layouts"
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelItem, PanelFooter } from '@/Components/Panel'
import { Card } from "@/Components/Card";
import { FormControl } from '@/Components/Form'
import { Input } from '@/Components/Input'
import { Button } from '@/Components/Button'
import { DataTableResourceActions, type DataTableResourceActionsValue } from '@/Components/DataTable'
import { useToggle } from '@stacktrace/ui'
import { ref } from 'vue'
import UpdatePlanDialog from './Components/UpdatePlanDialog.vue'
import { DropdownMenuItem } from '@/Components/DropdownMenu'
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  id: number
  name: string
  company: string
  email: string
  plan: string
  actions: DataTableResourceActionsValue
}>()

const form = useForm(() => ({
  name: props.name,
}))

const save = () => form.patch(route('customers.update', props.id), { preserveScroll: true })

const updatePlanDialog = useToggle()
const selectedCustomers = ref<Array<number>>([])
const onUpdatePlan = (selection: Array<number>) => {
  selectedCustomers.value = [...selection]
  updatePlanDialog.activate()
}

const { copy } = useClipboard({ legacy: true })
const copyId = async (id: number) => {
  setTimeout(() => {
    copy(`${id}`)
    toast('Copied to clipboard!', {description: `${id}` })
  }, 1)
}
</script>
