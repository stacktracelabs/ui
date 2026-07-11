<template>
  <Carousel class="w-full max-w-xs">
    <CarouselContent>
      <CarouselItem v-for="number in 5" :key="number">
        <Card>
          <CardContent class="flex aspect-square items-center justify-center p-6">
            <span class="text-4xl font-semibold">{{ number }}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/Components/Base/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/Components/Base/Carousel'
</script>
