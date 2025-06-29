"use client"

import { Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", sales: 4000, target: 3800 },
  { month: "Feb", sales: 3000, target: 3200 },
  { month: "Mar", sales: 5000, target: 4500 },
  { month: "Apr", sales: 4500, target: 4200 },
  { month: "May", sales: 6000, target: 5500 },
  { month: "Jun", sales: 5500, target: 5800 },
  { month: "Jul", sales: 7000, target: 6500 },
  { month: "Aug", sales: 6500, target: 6800 },
  { month: "Sep", sales: 8000, target: 7500 },
  { month: "Oct", sales: 7500, target: 7800 },
  { month: "Nov", sales: 9000, target: 8500 },
  { month: "Dec", sales: 8500, target: 8800 },
]

export function SalesChart() {
  return (
    <ChartContainer
      config={{
        sales: {
          label: "Sales",
          color: "hsl(var(--chart-1))",
        },
        target: {
          label: "Target",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[400px]"
    >
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="var(--color-sales)"
          strokeWidth={2}
          dot={{ fill: "var(--color-sales)" }}
        />
        <Line
          type="monotone"
          dataKey="target"
          stroke="var(--color-target)"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ fill: "var(--color-target)" }}
        />
      </LineChart>
    </ChartContainer>
  )
}
