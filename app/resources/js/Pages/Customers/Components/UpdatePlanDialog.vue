<template>
  <Dialog :control="control">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Change Plan</DialogTitle>
        <DialogDescription>Choose new plan for selected customers</DialogDescription>
      </DialogHeader>

      <FormControl label="New Plan" required>
        <Select v-model="form.plan">
          <SelectTrigger>
            <SelectValue placeholder="Select a plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>

      <DialogFooter>
        <Button variant="outline" @click="control.deactivate">Cancel</Button>
        <Button :processing="form.processing" @click="savePlan">Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/Components/Dialog'
import { FormControl } from '@/Components/Form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/Select'
import { useForm } from '@inertiajs/vue3'
import { type Toggle, onActivated } from '@stacktrace/ui'

const props = defineProps<{
  control: Toggle
  customers: Array<number>
}>()

const form = useForm(() => ({
  customers: [...props.customers],
  plan: 'basic',
}))

const savePlan = () => {
  form.transform(({ customers, plan }) => ({
    customers,
    is_premium: plan === 'premium',
  })).post(route('customers.update-plan'), {
    preserveState: true,
    onSuccess: () => {
      props.control.deactivate()
    }
  })
}

onActivated(props.control, () => {
  form.reset()
})
</script>
