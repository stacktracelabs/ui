<template>
  <Head title="Customers" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">Customers</h2>
    </template>

    <div class="py-8">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Card class="p-0">
          <DataTable :table="customers" @update-plan="onUpdatePlan" />
        </Card>
      </div>
    </div>

    <Dialog :control="updatePlanDialog">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Plan</DialogTitle>
          <DialogDescription>Choose new plan for selected customers</DialogDescription>
        </DialogHeader>

        <FormControl label="New Plan" required>
          <Select v-model="updateCustomersForm.plan">
            <SelectTrigger>
              <SelectValue placeholder="Select a plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>

        <DialogFooter>
          <Button variant="outline" @click="updatePlanDialog.deactivate">Cancel</Button>
          <ActionButton :processing="updateCustomersForm.processing" @click="savePlan">Save</ActionButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import type { DataTableValue } from "@/Components/DataTable";
import { useToggle } from "@stacktrace/ui";
import { useForm } from "@inertiajs/vue3";

defineProps<{
  customers: DataTableValue
}>()

const updatePlanDialog = useToggle()
const updateCustomersForm = useForm({
  customers: [] as Array<number>,
  plan: 'basic',
})
const onUpdatePlan = (selection: Array<number>) => {
  updateCustomersForm.customers = selection
  updatePlanDialog.activate()
}
const savePlan = () => {
  updateCustomersForm.transform(({ customers, plan }) => ({
    customers,
    is_premium: plan === 'premium',
  })).post(route('customers.update-plan'), {
    onSuccess: () => {
      updatePlanDialog.deactivate()
      updateCustomersForm.reset()
    }
  })
}

</script>
