
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    trend: "up" | "down" | "neutral";
  };
  description?: string;
  className?: string;
}

export function MetricCard({
  title,
  value,
  icon,
  change,
  description,
  className,
}: MetricCardProps) {
  const renderTrendIcon = () => {
    if (!change) return null;
    switch (change.trend) {
      case "up":
        return <ArrowUpIcon className="mr-1 h-3 w-3" />;
      case "down":
        return <ArrowDownIcon className="mr-1 h-3 w-3" />;
      case "neutral":
        return <MinusIcon className="mr-1 h-3 w-3" />;
    }
  };

  const trendClasses = {
    up: "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30",
    down: "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30",
    neutral: "text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30",
  };

  return (
    <Card className={cn(
      "overflow-hidden glass-card transition-all hover:shadow-md dark:shadow-[0_0_25px_rgba(255,255,255,0.03)]", 
      className
    )}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-3xl font-bold mt-2 tracking-tight dark:text-white dark:text-shadow-sm">{value}</h3>
          </div>
          <div className="rounded-md dark:glass-card bg-secondary p-2 text-muted-foreground">
            {icon}
          </div>
        </div>

        {change && (
          <div className="mt-4 flex items-center">
            <div
              className={cn(
                "flex items-center text-xs font-semibold px-2 py-1 rounded-full",
                trendClasses[change.trend]
              )}
            >
              {renderTrendIcon()}
              {Math.abs(change.value)}%
            </div>
            {description && (
              <p className="ml-2 text-xs text-muted-foreground leading-tight">
                {description}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
