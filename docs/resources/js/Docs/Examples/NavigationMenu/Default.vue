<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-96 gap-2 p-4">
            <li>
              <NavigationMenuLink href="/docs">
                <span class="font-medium">Introduction</span>
                <span class="text-muted-foreground">Learn how StackTrace UI is structured.</span>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink href="/docs/installation">
                <span class="font-medium">Installation</span>
                <span class="text-muted-foreground">Configure the registry and add components.</span>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/docs/components/button" :class="navigationMenuTriggerStyle()">
          Components
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/Components/Base/NavigationMenu'
</script>
