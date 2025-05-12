
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
    <Card className="col-span-4 glass-card card-hover">
      <CardHeader>
        <CardTitle>Activity Overview</CardTitle>
        <CardDescription>
          User activity across the platform over the last 7 months
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div className="h-[300px] w-full chart-highlight">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={activityData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorPageviews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/40" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.05)",
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
                stroke="hsl(var(--chart-1))"
                fill="url(#colorUsers)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stackId="1"
                stroke="hsl(var(--chart-2))"
                fill="url(#colorSessions)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="pageviews"
                stackId="1"
                stroke="hsl(var(--chart-3))"
                fill="url(#colorPageviews)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
