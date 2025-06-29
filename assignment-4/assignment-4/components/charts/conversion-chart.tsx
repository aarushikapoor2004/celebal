"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { step: "Visitors", count: 10000, percentage: 100 },
  { step: "Product Views", count: 7500, percentage: 75 },
  { step: "Add to Cart", count: 3000, percentage: 30 },
  { step: "Checkout", count: 1500, percentage: 15 },
  { step: "Purchase", count: 750, percentage: 7.5 },
]

export function ConversionChart() {
  return (
    <ChartContainer
      config={{
        count: {
          label: "Users",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <BarChart data={data} layout="horizontal">
        <XAxis type="number" hide />
        <YAxis dataKey="step" type="category" width={100} fontSize={12} tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="count" fill="var(--color-count)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
