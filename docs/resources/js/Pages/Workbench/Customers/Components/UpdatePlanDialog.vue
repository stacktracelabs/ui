<template>
    <Dialog :control="control">
        <DialogContent>
            <form class="flex flex-col gap-4" @submit.prevent="savePlan">
                <DialogHeader>
                    <DialogTitle>Change plan</DialogTitle>
                    <DialogDescription>
                        Choose a new plan for {{ customers.length }} selected
                        {{ customers.length === 1 ? 'customer' : 'customers' }}.
                    </DialogDescription>
                </DialogHeader>

                <FieldGroup>
                    <Field :data-invalid="Boolean(form.errors.plan || form.errors.customers)">
                        <FieldLabel for="customer-plan">New plan</FieldLabel>
                        <Select v-model="form.plan">
                            <SelectTrigger
                                id="customer-plan"
                                class="w-full"
                                :aria-invalid="Boolean(form.errors.plan || form.errors.customers)"
                            >
                                <SelectValue placeholder="Select a plan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="basic">Basic</SelectItem>
                                    <SelectItem value="premium">Premium</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FieldError :errors="[form.errors.plan, form.errors.customers]" />
                    </Field>
                </FieldGroup>

                <DialogFooter>
                    <Button type="button" variant="outline" :disabled="form.processing" @click="control.deactivate">
                        Cancel
                    </Button>
                    <Button type="submit" label="Save" :processing="form.processing" :disabled="form.processing" />
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/Components/Base/Dialog'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/Components/Base/Field'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/Base/Select'
import { onActivated, type Toggle } from '@/Composables/Base/useToggle'
import { useForm } from '@inertiajs/vue3'

const props = defineProps<{
    control: Toggle
    customers: number[]
}>()

const form = useForm({
    customers: [] as number[],
    plan: 'basic',
})

onActivated(props.control, () => {
    form.reset()
    form.clearErrors()
    form.customers = [...props.customers]
})

function savePlan(): void {
    form.transform(({ customers, plan }) => ({
        customers,
        is_premium: plan === 'premium',
    })).post(route('workbench.customers.update-plan'), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            props.control.deactivate()
        },
    })
}
</script>
