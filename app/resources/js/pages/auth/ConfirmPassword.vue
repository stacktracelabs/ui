<template>
  <Head title="Confirm Password" />

  <GuestLayout>
    <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div class="flex flex-col space-y-2 text-center">
        <p class="text-sm text-muted-foreground">
          This is a secure area of the application. Please confirm your password before continuing.
        </p>
      </div>

      <form @submit.prevent="submit" class="grid gap-5">
        <FormControl label="Password" :error="form.errors.password" for="password">
          <Input v-model="form.password" autocomplete="current-password" type="password" required id="password" />
        </FormControl>

        <Button :processing="form.processing">Confirm</Button>
      </form>
    </div>
  </GuestLayout>
</template>

<script setup lang="ts">
import { useForm, Head } from '@inertiajs/vue3'
import { GuestLayout } from "@/layouts";
import { FormControl} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

const form = useForm({
  password: ''
})

const submit = () => {
  form.post(route('password.confirm'), {
    onFinish: () => {
      form.reset()
    }
  })
}
</script>
