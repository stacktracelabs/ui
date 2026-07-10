<template>
    <WorkbenchLayout>
        <Head title="Workbench" />

        <section class="flex max-w-3xl flex-col gap-4">
            <Badge variant="outline" class="w-fit">Local environment only</Badge>
            <h1 class="text-4xl font-semibold tracking-tight text-balance">Backend component workbench</h1>
            <p class="text-lg leading-8 text-muted-foreground text-pretty">
                Exercise StackTrace UI against real Laravel data, actions, links, menus, and Inertia requests without shipping these routes in the deployed documentation app.
            </p>
        </section>

        <section class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Card v-for="item in demos" :key="item.href">
                <CardHeader>
                    <CardTitle>{{ item.title }}</CardTitle>
                    <CardDescription>{{ item.description }}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button :as="Link" :href="item.href" variant="outline">
                        Open demo
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                </CardFooter>
            </Card>
        </section>
    </WorkbenchLayout>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import { Button } from '@/Components/Base/Button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/Base/Card'
import WorkbenchLayout from '@/Docs/Layouts/WorkbenchLayout.vue'
import type { AppPageProps } from '@/Types'
import { Head, Link, usePage } from '@inertiajs/vue3'
import { ArrowRightIcon } from '@lucide/vue'

const demos = usePage<AppPageProps>().props.workbench.navigation.filter(item => item.href !== '/workbench')
</script>
