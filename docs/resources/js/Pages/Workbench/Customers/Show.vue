<template>
    <WorkbenchLayout>
        <Head :title="name" />

        <div class="flex w-full flex-col gap-6">
            <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium text-muted-foreground">Customer</p>
                    <h1 class="text-2xl font-semibold tracking-tight">{{ name }}</h1>
                </div>

                <LinkButton :href="route('workbench.customers.index')" variant="outline" size="sm">
                    Back to customers
                </LinkButton>
            </header>

            <Card class="gap-0 py-0">
                <CardContent class="p-0">
                    <Panel>
                        <PanelHeader class="flex h-14 items-center justify-between gap-4 px-4 py-0 sm:px-6">
                            <PanelTitle>About</PanelTitle>

                            <DataTableResourceActions
                                v-slot="{ resource }"
                                :actions="actions"
                                visible
                                @update-plan="openUpdatePlanDialog"
                            >
                                <DropdownMenuGroup>
                                    <DropdownMenuItem @select="copyId(resource.key)">
                                        Copy customer ID
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DataTableResourceActions>
                        </PanelHeader>

                        <PanelContent>
                            <PanelItem label="Name" class="px-4 sm:px-6">{{ name }}</PanelItem>
                            <PanelItem label="Company" class="px-4 sm:px-6">{{ company }}</PanelItem>
                            <PanelItem label="Email" class="px-4 sm:px-6">{{ email }}</PanelItem>
                            <PanelItem label="Plan" class="px-4 sm:px-6">{{ plan }}</PanelItem>
                        </PanelContent>
                    </Panel>
                </CardContent>
            </Card>

            <Card class="gap-0 py-0">
                <CardContent class="p-0">
                    <Panel as="form" @submit.prevent="save">
                        <PanelHeader class="flex h-14 items-center px-4 py-0 sm:px-6">
                            <PanelTitle>Settings</PanelTitle>
                        </PanelHeader>

                        <PanelContent>
                            <PanelItem class="px-4 sm:px-6">
                                <FieldGroup>
                                    <Field :data-invalid="Boolean(form.errors.name)">
                                        <FieldLabel for="customer-name">Name</FieldLabel>
                                        <FieldDescription>
                                            Use the customer or company name shown throughout the workbench.
                                        </FieldDescription>
                                        <Input
                                            id="customer-name"
                                            v-model="form.name"
                                            class="sm:max-w-md"
                                            required
                                            :aria-invalid="Boolean(form.errors.name)"
                                        />
                                        <FieldError :errors="[form.errors.name]" />
                                    </Field>
                                </FieldGroup>
                            </PanelItem>
                        </PanelContent>

                        <PanelFooter class="flex justify-end px-4 sm:px-6">
                            <Button
                                type="submit"
                                class="w-full sm:w-auto"
                                label="Save"
                                recently-successful-label="Saved"
                                :processing="form.processing"
                                :recently-successful="form.recentlySuccessful"
                                :disabled="form.processing"
                            />
                        </PanelFooter>
                    </Panel>
                </CardContent>
            </Card>
        </div>

        <UpdatePlanDialog :control="updatePlanDialog" :customers="selectedCustomers" />
        <Toaster />
    </WorkbenchLayout>
</template>

<script setup lang="ts">
import { Button, LinkButton } from '@/Components/Base/Button'
import { Card, CardContent } from '@/Components/Base/Card'
import { DataTableResourceActions, type DataTableResourceActionsValue } from '@/Components/Base/DataTable'
import { DropdownMenuGroup, DropdownMenuItem } from '@/Components/Base/DropdownMenu'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/Components/Base/Field'
import { Input } from '@/Components/Base/Input'
import { Panel, PanelContent, PanelFooter, PanelHeader, PanelItem, PanelTitle } from '@/Components/Base/Panel'
import { Toaster } from '@/Components/Base/Sonner'
import { useToggle } from '@/Composables/Base/useToggle'
import WorkbenchLayout from '@/Docs/Layouts/WorkbenchLayout.vue'
import { Head, useForm } from '@inertiajs/vue3'
import { useClipboard } from '@vueuse/core'
import { shallowRef } from 'vue'
import { toast } from 'vue-sonner'
import UpdatePlanDialog from './Components/UpdatePlanDialog.vue'

const props = defineProps<{
    id: number
    name: string
    company: string
    email: string
    plan: string
    actions: DataTableResourceActionsValue<number>
}>()

const form = useForm({
    name: props.name,
})

const updatePlanDialog = useToggle()
const selectedCustomers = shallowRef<number[]>([])
const { copy } = useClipboard({ legacy: true })

function save(): void {
    form.patch(route('workbench.customers.update', props.id), {
        preserveScroll: true,
    })
}

function openUpdatePlanDialog(selection: number[]): void {
    selectedCustomers.value = [...selection]
    updatePlanDialog.activate()
}

async function copyId(id: number): Promise<void> {
    await copy(String(id))
    toast.success('Customer ID copied', { description: String(id) })
}
</script>
