
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CircleCheck,
  Clock,
  AlertTriangle,
  LucideIcon,
} from "lucide-react";

type SystemStatus = "healthy" | "warning" | "critical";

interface StatusItem {
  name: string;
  status: SystemStatus;
  uptime: number;
  responseTime: string;
}

const statusItems: StatusItem[] = [
  {
    name: "API Gateway",
    status: "healthy",
    uptime: 99.9,
    responseTime: "240ms",
  },
  {
    name: "Authentication Service",
    status: "healthy",
    uptime: 99.7,
    responseTime: "180ms",
  },
  {
    name: "Database Cluster",
    status: "warning",
    uptime: 98.2,
    responseTime: "450ms",
  },
  {
    name: "Storage Service",
    status: "healthy",
    uptime: 99.8,
    responseTime: "320ms",
  },
  {
    name: "Analytics Engine",
    status: "critical",
    uptime: 93.5,
    responseTime: "1240ms",
  },
];

function getStatusConfig(status: SystemStatus): {
  icon: LucideIcon;
  iconColor: string;
  badgeVariant: "default" | "outline" | "destructive";
  progressColor: string;
  bgColor: string;
} {
  switch (status) {
    case "healthy":
      return {
        icon: CircleCheck,
        iconColor: "text-green-500",
        badgeVariant: "default",
        progressColor: "bg-green-500",
        bgColor: "bg-green-100 dark:bg-green-950",
      };
    case "warning":
      return {
        icon: AlertTriangle,
        iconColor: "text-yellow-500",
        badgeVariant: "outline",
        progressColor: "bg-yellow-500",
        bgColor: "bg-yellow-100 dark:bg-yellow-950",
      };
    case "critical":
      return {
        icon: Clock,
        iconColor: "text-red-500",
        badgeVariant: "destructive",
        progressColor: "bg-red-500",
        bgColor: "bg-red-100 dark:bg-red-950",
      };
  }
}

function StatusItemCard({ item }: { item: StatusItem }) {
  const config = getStatusConfig(item.status);
  const Icon = config.icon;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 ${config.iconColor}`} />
          <span className="font-medium text-sm">{item.name}</span>
        </div>
        <Badge variant={config.badgeVariant} className="text-xs capitalize">
          {item.status}
        </Badge>
      </div>
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>Uptime: {item.uptime}%</span>
        <span>Response: {item.responseTime}</span>
      </div>
      <Progress
        value={item.uptime}
        className={config.bgColor}
        indicatorClassName={config.progressColor}
      />
    </div>
  );
}

export function StatusOverview() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current service status and uptime</CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            Updated 3m ago
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {statusItems.map((item, index) => (
            <StatusItemCard key={index} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
