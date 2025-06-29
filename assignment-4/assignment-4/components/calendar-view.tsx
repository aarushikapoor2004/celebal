"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

const events = {
  "2024-01-15": [
    { title: "Team Meeting", type: "meeting" },
    { title: "Project Review", type: "review" },
  ],
  "2024-01-16": [{ title: "Client Call", type: "call" }],
  "2024-01-17": [
    { title: "Design Workshop", type: "workshop" },
    { title: "Code Review", type: "review" },
  ],
  "2024-01-20": [{ title: "Sprint Planning", type: "meeting" }],
}

export function CalendarView() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selectedEvents, setSelectedEvents] = React.useState<any[]>([])

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      const dateKey = selectedDate.toISOString().split("T")[0]
      setSelectedEvents(events[dateKey as keyof typeof events] || [])
    }
  }

  const getEventBadge = (type: string) => {
    switch (type) {
      case "meeting":
        return (
          <Badge variant="default" className="text-xs">
            Meeting
          </Badge>
        )
      case "review":
        return (
          <Badge variant="secondary" className="text-xs">
            Review
          </Badge>
        )
      case "call":
        return (
          <Badge variant="outline" className="text-xs">
            Call
          </Badge>
        )
      case "workshop":
        return (
          <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
            Workshop
          </Badge>
        )
      default:
        return (
          <Badge variant="secondary" className="text-xs">
            Event
          </Badge>
        )
    }
  }

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-md border"
        modifiers={{
          hasEvents: (date) => {
            const dateKey = date.toISOString().split("T")[0]
            return dateKey in events
          },
        }}
        modifiersStyles={{
          hasEvents: {
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
            borderRadius: "6px",
          },
        }}
      />

      {selectedEvents.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium">Events for {date?.toLocaleDateString()}</h4>
          <div className="space-y-2">
            {selectedEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-2 border rounded">
                <span className="text-sm">{event.title}</span>
                {getEventBadge(event.type)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
