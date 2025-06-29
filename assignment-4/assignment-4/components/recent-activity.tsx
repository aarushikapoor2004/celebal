"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: "John Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "created a new project",
    target: "Website Redesign",
    time: "2 minutes ago",
    type: "create",
  },
  {
    id: 2,
    user: "Sarah Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "updated task status",
    target: "Mobile App Development",
    time: "5 minutes ago",
    type: "update",
  },
  {
    id: 3,
    user: "Mike Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "completed milestone",
    target: "API Integration",
    time: "10 minutes ago",
    type: "complete",
  },
  {
    id: 4,
    user: "Emily Davis",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "added new comment",
    target: "Design Review",
    time: "15 minutes ago",
    type: "comment",
  },
  {
    id: 5,
    user: "Alex Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "uploaded files",
    target: "Documentation",
    time: "20 minutes ago",
    type: "upload",
  },
]

const getActivityBadge = (type: string) => {
  switch (type) {
    case "create":
      return (
        <Badge variant="default" className="text-xs">
          New
        </Badge>
      )
    case "update":
      return (
        <Badge variant="secondary" className="text-xs">
          Updated
        </Badge>
      )
    case "complete":
      return (
        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
          Done
        </Badge>
      )
    case "comment":
      return (
        <Badge variant="outline" className="text-xs">
          Comment
        </Badge>
      )
    case "upload":
      return (
        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
          Upload
        </Badge>
      )
    default:
      return (
        <Badge variant="secondary" className="text-xs">
          Activity
        </Badge>
      )
  }
}

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
            <AvatarFallback>
              {activity.user
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium leading-none">{activity.user}</p>
              {getActivityBadge(activity.type)}
            </div>
            <p className="text-sm text-muted-foreground">
              {activity.action} <span className="font-medium">{activity.target}</span>
            </p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
