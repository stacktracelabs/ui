<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>
        Deploy your new project in one click.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form class="grid gap-4">
        <div class="grid gap-1.5">
          <Label for="project-name">Name</Label>
          <Input
            id="project-name"
            placeholder="Name of your project"
          />
        </div>
        <div class="grid gap-1.5">
          <Label for="framework">Framework</Label>
          <Select>
            <SelectTrigger
              id="framework"
              class="w-full"
            >
              <SelectValue placeholder="Select a framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nuxt">Nuxt</SelectItem>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="sveltekit">SvelteKit</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </CardContent>
    <CardFooter class="justify-between">
      <Button variant="outline">
        Cancel
      </Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/Components/Base/Card'
import { Input } from '@/Components/Base/Input'
import { Label } from '@/Components/Base/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/Base/Select'
</script>
