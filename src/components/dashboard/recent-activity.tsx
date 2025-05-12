import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Status = "success" | "warning" | "error";

interface Activity {
  id: string;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  action: string;
  target: string;
  date: string;
  status?: Status;
}

const recentActivities: Activity[] = [
  {
    id: "1",
    user: {
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    action: "created",
    target: "Dashboard Analytics Report",
    date: "2 hours ago",
    status: "success",
  },
  {
    id: "2",
    user: {
      name: "Sarah Parker",
      email: "sarah@example.com",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    action: "updated",
    target: "Q2 Performance Metrics",
    date: "5 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Michael Chen",
      email: "michael@example.com",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    action: "commented on",
    target: "Data Integration Strategy",
    date: "1 day ago",
  },
  {
    id: "4",
    user: {
      name: "Emma Wilson",
      email: "emma@example.com",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
    action: "deleted",
    target: "Outdated Metrics",
    date: "2 days ago",
    status: "error",
  },
  {
    id: "5",
    user: {
      name: "Ryan Thompson",
      email: "ryan@example.com",
      avatar: "https://i.pravatar.cc/150?u=5",
    },
    action: "shared",
    target: "Monthly Performance Report",
    date: "3 days ago",
    status: "warning",
  },
];

function getBadgeVariant(status: Status | undefined): "default" | "outline" | "destructive" | null {
  if (!status) return null;
  switch (status) {
    case "success":
      return "default";
    case "warning":
      return "outline";
    case "error":
      return "destructive";
  }
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentActivities.map((activity) => {
            const badgeVariant = getBadgeVariant(activity.status);
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage
                    src={activity.user.avatar}
                    alt={activity.user.name}
                  />
                  <AvatarFallback>
                    {activity.user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">
                      {activity.user.name}
                    </p>
                    {badgeVariant && (
                      <Badge variant={badgeVariant} className="text-xs capitalize">
                        {activity.status}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span>{activity.action}</span>{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
