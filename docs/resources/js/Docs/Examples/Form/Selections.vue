<template>
  <form class="grid w-full max-w-md gap-6">
    <FormItem role="group" aria-labelledby="form-role-label">
      <FormLabel id="form-role-label">Role</FormLabel>
      <FormSelect
        v-model="role"
        :options="roles"
        placeholder="Select a role"
        name="role"
      />
      <FormDescription>Choose the permission set for this account.</FormDescription>
    </FormItem>

    <FormItem role="group" aria-labelledby="form-country-label">
      <FormLabel id="form-country-label">Country</FormLabel>
      <FormCombobox
        v-model="country"
        :options="countries"
        placeholder="Select a country"
        search-label="Search countries…"
      />
      <FormDescription>Search when the option list is long.</FormDescription>
    </FormItem>
  </form>
</template>

<script setup lang="ts">
import {
  FormCombobox,
  FormDescription,
  FormItem,
  FormLabel,
  FormSelect,
} from '@/Components/Base/Form'
import { ref } from 'vue'

const roles = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' },
]

const countries = [
  { label: 'Austria', value: 'at' },
  { label: 'Czechia', value: 'cz' },
  { label: 'Slovakia', value: 'sk' },
]

const role = ref<string>()
const country = ref<string | null>(null)
</script>
