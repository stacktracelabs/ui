<template>
  <form class="grid w-full max-w-md gap-6">
    <FormControl
      for="form-role"
      label="Role"
      help="Choose the permission set for this account."
    >
      <FormSelect
        id="form-role"
        v-model="role"
        :options="roles"
        placeholder="Select a role"
        name="role"
      />
    </FormControl>

    <FormControl
      for="form-country"
      label="Country"
      help="Search when the option list is long."
    >
      <FormCombobox
        id="form-country"
        v-model="country"
        :options="countries"
        placeholder="Select a country"
        search-label="Search countries…"
      />
    </FormControl>
  </form>
</template>

<script setup lang="ts">
import {
  FormCombobox,
  FormControl,
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
