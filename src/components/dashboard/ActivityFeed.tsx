
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ActivityItemProps {
  avatar: string;
  name: string;
  action: string;
  target: string;
  time: string;
  type: "added" | "removed" | "updated" | "completed";
}

function ActivityItem({ avatar, name, action, target, time, type }: ActivityItemProps) {
  const badgeVariant = {
    added: "success",
    removed: "destructive",
    updated: "default",
    completed: "secondary",
  }[type];
  
  const initials = name.split(" ").map((n) => n[0]).join("");
  
  return (
    <div className="flex items-start gap-4 rounded-md p-3 transition-colors hover:bg-muted/50">
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">
          <span className="font-semibold">{name}</span> {action}{" "}
          <span className="font-semibold">{target}</span>
        </p>
        <div className="flex items-center gap-2">
          <Badge variant={badgeVariant as any}>{type}</Badge>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>
      </div>
    </div>
  );
}

export function ActivityFeed() {
  const activities = [
    {
      avatar: "/placeholder.svg",
      name: "Alex Thompson",
      action: "created a new",
      target: "workflow",
      time: "2 minutes ago",
      type: "added" as const,
    },
    {
      avatar: "/placeholder.svg",
      name: "Sarah Chen",
      action: "completed a",
      target: "task",
      time: "15 minutes ago",
      type: "completed" as const,
    },
    {
      avatar: "/placeholder.svg",
      name: "Miguel Rodriguez",
      action: "updated the",
      target: "dashboard settings",
      time: "1 hour ago",
      type: "updated" as const,
    },
    {
      avatar: "/placeholder.svg",
      name: "Emily Johnson",
      action: "removed a",
      target: "user",
      time: "2 hours ago",
      type: "removed" as const,
    },
    {
      avatar: "/placeholder.svg",
      name: "Jamal Wilson",
      action: "created a new",
      target: "report",
      time: "3 hours ago",
      type: "added" as const,
    },
    {
      avatar: "/placeholder.svg",
      name: "Anna Kowalski",
      action: "updated the",
      target: "team settings",
      time: "yesterday",
      type: "updated" as const,
    },
  ];
  
  return (
    <Card className="h-full card-hover">
      <CardHeader className="pb-3">
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent className="space-y-0 p-0">
        <div className="space-y-1">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
