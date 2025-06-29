"use client"

import { Cell, Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Organic Search", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Direct", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Social Media", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Email", value: 10, color: "hsl(var(--chart-4))" },
  { name: "Referral", value: 5, color: "hsl(var(--chart-5))" },
]

export function TrafficChart() {
  return (
    <ChartContainer
      config={{
        organic: { label: "Organic Search", color: "hsl(var(--chart-1))" },
        direct: { label: "Direct", color: "hsl(var(--chart-2))" },
        social: { label: "Social Media", color: "hsl(var(--chart-3))" },
        email: { label: "Email", color: "hsl(var(--chart-4))" },
        referral: { label: "Referral", color: "hsl(var(--chart-5))" },
      }}
      className="h-[300px]"
    >
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </PieChart>
    </ChartContainer>
  )
}
