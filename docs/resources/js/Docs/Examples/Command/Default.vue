<template>
  <Command class="w-full max-w-md rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="Calendar">
          <CalendarIcon />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem value="Search emoji">
          <ScanFaceIcon />
          <span>Search emoji</span>
        </CommandItem>
        <CommandItem value="Launch">
          <RocketIcon />
          <span>Launch</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="Profile">
          <FileUserIcon />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem value="Mail">
          <SendIcon />
          <span>Mail</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem value="Settings">
          <SettingsIcon />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>

<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/Components/Base/Command'
import {
  CalendarIcon,
  FileUserIcon,
  RocketIcon,
  ScanFaceIcon,
  SendIcon,
  SettingsIcon,
} from '@lucide/vue'
</script>
