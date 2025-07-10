<template>
  <Head title="Profile" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">Profile</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <UpdateProfileInformationForm
          :must-verify-email="mustVerifyEmail"
          :status="status"
        />

        <UpdatePasswordForm  />

        <DeleteUserForm />
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { AuthenticatedLayout } from '@/layouts'
import DeleteUserForm from './partials/DeleteUserForm.vue'
import UpdatePasswordForm from './partials/UpdatePasswordForm.vue'
import UpdateProfileInformationForm from './partials/UpdateProfileInformationForm.vue'

defineProps<{
  mustVerifyEmail?: boolean;
  status?: string;
}>()
</script>
