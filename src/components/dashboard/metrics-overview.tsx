import { MetricCard } from "./metric-card";
import { Activity, Users, LineChart, BarChart } from "lucide-react";

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Users"
        value="2,847"
        icon={<Users className="h-5 w-5" />}
        change={{ value: 12.5, trend: "up" }}
        description="Compared to last month"
      />
      <MetricCard
        title="Active Sessions"
        value="485"
        icon={<Activity className="h-5 w-5" />}
        change={{ value: 3.2, trend: "up" }}
        description="Current live activity"
      />
      <MetricCard
        title="Conversion Rate"
        value="3.6%"
        icon={<BarChart className="h-5 w-5" />}
        change={{ value: 0.8, trend: "down" }}
        description="Week-over-week"
      />
      <MetricCard
        title="Avg. Session Time"
        value="4m 38s"
        icon={<LineChart className="h-5 w-5" />}
        change={{ value: 1.1, trend: "up" }}
        description="Based on last 7 days"
      />
    </div>
  );
}
