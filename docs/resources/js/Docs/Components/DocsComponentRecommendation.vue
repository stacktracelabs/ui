<template>
    <Alert>
        <LightbulbIcon />
        <AlertTitle>{{ title }}</AlertTitle>
        <AlertDescription>
            <p><slot /></p>
            <p>
                Recommended component:
                <Link :href="componentHref">{{ componentName }}</Link>
            </p>
        </AlertDescription>
    </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/Components/Base/Alert'
import { Link } from '@inertiajs/vue3'
import { LightbulbIcon } from '@lucide/vue'

defineProps<{
    title: string
    componentHref: string
    componentName: string
}>()
</script>
