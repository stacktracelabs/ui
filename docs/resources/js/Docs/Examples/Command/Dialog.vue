<template>
  <div class="flex flex-col items-center gap-3">
    <Button
      variant="outline"
      @click="open = true"
    >
      Open command menu
    </Button>
    <p class="text-sm text-muted-foreground">
      You can also press
      <kbd class="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">
        ⌘/Ctrl J
      </kbd>
    </p>

    <CommandDialog
      v-model:open="open"
      title="Command menu"
      description="Search for a page or action."
    >
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">Calendar</CommandItem>
          <CommandItem value="search emoji">Search emoji</CommandItem>
          <CommandItem value="calculator">Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile">Profile</CommandItem>
          <CommandItem value="billing">Billing</CommandItem>
          <CommandItem value="settings">Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/Components/Base/Command'
import { onKeyStroke } from '@vueuse/core'
import { ref } from 'vue'

const open = ref(false)

onKeyStroke('j', (event) => {
  if (!event.metaKey && !event.ctrlKey) {
    return
  }

  event.preventDefault()
  open.value = !open.value
})
</script>
