"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 150 },
  { day: "Wed", users: 180 },
  { day: "Thu", users: 165 },
  { day: "Fri", users: 200 },
  { day: "Sat", users: 140 },
  { day: "Sun", users: 110 },
]

export function UserActivityChart() {
  return (
    <ChartContainer
      config={{
        users: {
          label: "Active Users",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <BarChart data={data}>
        <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="users" fill="var(--color-users)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
