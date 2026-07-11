<template>
  <ChartContainer :config="chartConfig" class="min-h-64 w-full max-w-xl">
    <VisXYContainer :data="chartData">
      <VisGroupedBar
        :x="(datum: ChartDatum) => datum.month"
        :y="[(datum: ChartDatum) => datum.desktop, (datum: ChartDatum) => datum.mobile]"
        :color="[chartConfig.desktop.color, chartConfig.mobile.color]"
        :rounded-corners="4"
      />
    </VisXYContainer>
  </ChartContainer>
</template>

<script setup lang="ts">
import { VisGroupedBar, VisXYContainer } from '@unovis/vue'
import { ChartContainer, type ChartConfig } from '@/Components/Base/Chart'

const chartData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 173, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

type ChartDatum = typeof chartData[number]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig
</script>
