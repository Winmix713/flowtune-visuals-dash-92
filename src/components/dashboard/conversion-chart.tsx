import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const conversionData = [
  { name: "Jan", rate: 2.4 },
  { name: "Feb", rate: 2.8 },
  { name: "Mar", rate: 3.2 },
  { name: "Apr", rate: 3.5 },
  { name: "May", rate: 3.0 },
  { name: "Jun", rate: 3.8 },
  { name: "Jul", rate: 3.6 },
];

export function ConversionChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Conversion Rate</CardTitle>
        <CardDescription>
          Monthly conversion rates over the past 7 months
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={conversionData}
              margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                tickFormatter={(value) => `${value}%`}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                formatter={(value: number) => [`${value.toFixed(1)}%`, "Conversion"]}
                contentStyle={{
                  backgroundColor: "hsl(var(--card), #fff)",
                  borderColor: "hsl(var(--border), #e5e7eb)",
                  borderRadius: "var(--radius, 0.5rem)",
                  fontSize: "0.875rem",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "0.75rem", paddingTop: 8 }} />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="hsl(var(--chart-1, #3b82f6))"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
