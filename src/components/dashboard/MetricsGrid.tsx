
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Users, BarChart, Activity, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  description?: string;
}

function MetricCard({ title, value, change, icon, description }: MetricCardProps) {
  const isPositive = change >= 0;
  
  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="flex items-center text-xs text-muted-foreground">
          <span
            className={`mr-1 flex items-center ${
              isPositive ? "text-success" : "text-danger"
            }`}
          >
            {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {Math.abs(change)}%
          </span>
          <span>vs previous period</span>
        </p>
        {description && <p className="mt-2 text-xs text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
}

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Active Users"
        value="2,742"
        change={12.2}
        icon={<Users className="h-4 w-4" />}
        description="Total users active in the last 24 hours"
      />
      <MetricCard
        title="Conversion Rate"
        value="64.5%"
        change={-2.4}
        icon={<TrendingUp className="h-4 w-4" />}
        description="Average completion of all workflow processes"
      />
      <MetricCard
        title="Efficiency Score"
        value="89.7"
        change={5.1}
        icon={<Activity className="h-4 w-4" />}
        description="Overall system performance indicator"
      />
      <MetricCard
        title="Total Sessions"
        value="24,395"
        change={18.4}
        icon={<BarChart className="h-4 w-4" />}
        description="Number of sessions in the current period"
      />
    </div>
  );
}
