<template>
  <ComponentReferencePage
    title="Dialog"
    description="A modal window layered over the page for focused content and actions."
    registry-name="dialog"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Every dialog needs a DialogTitle and should include DialogDescription when the action needs further context. Use DialogScrollContent for long content and DialogClose for explicit closing actions."
    :features="['Controlled and uncontrolled open state.', 'Focus trapping and escape-key dismissal.', 'Standard and scrollable content variants.']"
    api="Compose DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, and DialogClose under Dialog."
    source-url="https://shadcn-vue.com/docs/components/dialog"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Dialog/Default.vue'
import exampleSource from '@/Docs/Examples/Dialog/Default.vue?raw'
</script>
