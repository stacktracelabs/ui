<template>
  <ComponentReferencePage
    title="Sonner"
    description="An opinionated toast system for transient application feedback."
    registry-name="sonner"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Mount Toaster once near the application root and call toast from vue-sonner. The StackTrace wrapper also listens for Laravel Inertia flash toasts."
    :features="['Success, error, warning, info, and loading states.', 'Actions, promises, and custom content.', 'Laravel flash-message integration.']"
    api="Exports Toaster, which forwards vue-sonner props and applies StackTrace theme variables and icons."
    source-url="https://shadcn-vue.com/docs/components/sonner"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Sonner/Default.vue'
import exampleSource from '@/Docs/Examples/Sonner/Default.vue?raw'
</script>
