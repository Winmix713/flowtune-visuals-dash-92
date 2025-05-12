import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const activityData = [
  { date: "Jan", users: 2400, sessions: 4000, pageviews: 2400 },
  { date: "Feb", users: 1398, sessions: 3000, pageviews: 2210 },
  { date: "Mar", users: 9800, sessions: 2000, pageviews: 2290 },
  { date: "Apr", users: 3908, sessions: 2780, pageviews: 2000 },
  { date: "May", users: 4800, sessions: 1890, pageviews: 2181 },
  { date: "Jun", users: 3800, sessions: 2390, pageviews: 2500 },
  { date: "Jul", users: 4300, sessions: 3490, pageviews: 2100 },
];

export function ActivityChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Activity Overview</CardTitle>
        <CardDescription>
          User activity across the platform over the last 7 months
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={activityData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card), #fff)",
                  borderColor: "hsl(var(--border), #e5e7eb)",
                  borderRadius: "var(--radius, 0.5rem)",
                  fontSize: "0.875rem",
                }}
              />
              <Legend
                wrapperStyle={{
                  fontSize: "0.75rem",
                  paddingTop: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stackId="1"
                stroke="hsl(var(--chart-1, #3b82f6))"
                fill="hsl(var(--chart-1, #3b82f6))"
                fillOpacity={0.4}
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stackId="1"
                stroke="hsl(var(--chart-2, #10b981))"
                fill="hsl(var(--chart-2, #10b981))"
                fillOpacity={0.4}
              />
              <Area
                type="monotone"
                dataKey="pageviews"
                stackId="1"
                stroke="hsl(var(--chart-3, #f59e0b))"
                fill="hsl(var(--chart-3, #f59e0b))"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
