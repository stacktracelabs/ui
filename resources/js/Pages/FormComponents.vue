<template>
  <Head title="Customers" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">Form Components</h2>
    </template>

    <div class="py-4 sm:py-6 lg:py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card class="p-0">
          <Panel as="form" @submit.prevent="save">
            <PanelHeader class="px-4 sm:px-6">
              <PanelTitle>Inputs</PanelTitle>
            </PanelHeader>
            <PanelContent>
              <PanelItem class="px-4 sm:px-6">
                <FormControl label="Text Input" variant="horizontal" :error="form.errors.text">
                  <Input v-model="form.text" class="sm:max-w-md" />
                </FormControl>
              </PanelItem>
              <PanelItem class="px-4 sm:px-6">
                <FormControl label="Date Input" variant="horizontal" :error="form.errors.date">
                  <DateInput v-model="form.date" class="sm:max-w-md" />
                </FormControl>
              </PanelItem>
              <PanelItem class="px-4 sm:px-6">
                <FormControl label="Date Picker" variant="horizontal" :error="form.errors.date">
                  <DatePicker v-model="form.date" class="sm:max-w-md" />
                </FormControl>
              </PanelItem>
              <PanelItem class="px-4 sm:px-6">
                <FormControl label="Combobox" variant="horizontal" :error="form.errors.select">
                  <Combobox v-model="form.select" :options="options" class="sm:max-w-md" nullable />
                </FormControl>
              </PanelItem>
              <PanelItem class="px-4 sm:px-6">
                <pre class="text-xs">{{ input }}</pre>
              </PanelItem>
            </PanelContent>
          </Panel>
        </Card>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { Card } from '@/Components/Card'
import { FormControl } from '@/Components/Form'
import { DateInput } from '@/Components/DateInput'
import { DatePicker } from '@/Components/DatePicker'
import { Combobox } from '@/Components/Combobox'
import { Input } from '@/Components/Input'
import { Panel, PanelContent, PanelHeader, PanelItem, PanelTitle } from '@/Components/Panel'
import { AuthenticatedLayout } from '@/Layouts'
import { Head, useForm } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import { type SelectOption } from '@stacktrace/ui'

const form = useForm(() => ({
  text: '',
  date: undefined,
  select: '',
}))

const options = ref<Array<SelectOption>>([
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
])

const input = computed(() => JSON.stringify(form.data(), undefined, 2))

const save = () => {
  //
}
</script>
