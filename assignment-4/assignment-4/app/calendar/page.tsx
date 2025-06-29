"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { CalendarView } from "@/components/calendar-view"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, CalendarIcon, Clock } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Team Meeting",
    time: "10:00 AM",
    date: "Today",
    type: "meeting",
  },
  {
    id: 2,
    title: "Project Review",
    time: "2:00 PM",
    date: "Today",
    type: "review",
  },
  {
    id: 3,
    title: "Client Call",
    time: "9:00 AM",
    date: "Tomorrow",
    type: "call",
  },
  {
    id: 4,
    title: "Design Workshop",
    time: "3:00 PM",
    date: "Tomorrow",
    type: "workshop",
  },
]

const getEventBadge = (type: string) => {
  switch (type) {
    case "meeting":
      return <Badge variant="default">Meeting</Badge>
    case "review":
      return <Badge variant="secondary">Review</Badge>
    case "call":
      return <Badge variant="outline">Call</Badge>
    case "workshop":
      return (
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          Workshop
        </Badge>
      )
    default:
      return <Badge variant="secondary">Event</Badge>
  }
}

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground">Manage your schedule and upcoming events.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Calendar View
                </CardTitle>
                <CardDescription>View and manage your events in calendar format</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendarView />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
                <CardDescription>Your next scheduled events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        {getEventBadge(event.type)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {event.date} at {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Events Today</span>
                  <span className="text-2xl font-bold">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">This Week</span>
                  <span className="text-2xl font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">This Month</span>
                  <span className="text-2xl font-bold">28</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
