
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
  gradientClass: string;
  glowClass: string;
} {
  switch (status) {
    case "healthy":
      return {
        icon: CircleCheck,
        iconColor: "text-green-500 dark:text-green-400",
        badgeVariant: "default",
        progressColor: "bg-green-500",
        bgColor: "bg-green-100/10 dark:bg-green-950/30",
        gradientClass: "from-green-500/20 to-transparent dark:from-green-500/30",
        glowClass: "dark:shadow-[0_0_15px_rgba(52,211,153,0.15)]",
      };
    case "warning":
      return {
        icon: AlertTriangle,
        iconColor: "text-yellow-500 dark:text-yellow-400",
        badgeVariant: "outline",
        progressColor: "bg-yellow-500",
        bgColor: "bg-yellow-100/10 dark:bg-yellow-950/30",
        gradientClass: "from-yellow-500/20 to-transparent dark:from-yellow-500/30",
        glowClass: "dark:shadow-[0_0_15px_rgba(251,191,36,0.15)]",
      };
    case "critical":
      return {
        icon: Clock,
        iconColor: "text-red-500 dark:text-red-400",
        badgeVariant: "destructive",
        progressColor: "bg-red-500",
        bgColor: "bg-red-100/10 dark:bg-red-950/30",
        gradientClass: "from-red-500/20 to-transparent dark:from-red-500/30",
        glowClass: "dark:shadow-[0_0_15px_rgba(239,68,68,0.2)]",
      };
  }
}

function StatusItemCard({ item }: { item: StatusItem }) {
  const config = getStatusConfig(item.status);
  const Icon = config.icon;

  return (
    <div className="space-y-2 relative backdrop-blur-sm glass-card p-4 rounded-lg border border-white/10 overflow-hidden transition-all hover:shadow-lg" style={{ backdropFilter: "blur(12px)" }}>
      {/* Decorative corner gradient */}
      <div
        className={`absolute top-0 left-0 w-24 h-24 rounded-br-[100px] bg-gradient-to-br ${config.gradientClass} ${config.glowClass}`}
      ></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="absolute top-4 left-4">
              <Icon className={`h-4 w-4 ${config.iconColor}`} />
            </div>
            <span className="font-medium text-sm ml-8">{item.name}</span>
          </div>
          <Badge variant={config.badgeVariant} className="text-xs capitalize">
            {item.status}
          </Badge>
        </div>
        <div className="flex justify-between items-center text-xs text-muted-foreground mt-4">
          <span>Uptime: {item.uptime}%</span>
          <span>Response: {item.responseTime}</span>
        </div>
        <Progress
          value={item.uptime}
          className={config.bgColor}
          indicatorClassName={config.progressColor}
        />
      </div>
    </div>
  );
}

export function StatusOverview() {
  return (
    <Card className="glass-card border-white/10 dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-gradient">System Status</CardTitle>
            <CardDescription>Current service status and uptime</CardDescription>
          </div>
          <Badge variant="outline" className="text-xs border-white/20 backdrop-blur-sm">
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
