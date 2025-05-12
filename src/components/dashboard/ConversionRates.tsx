
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Completed", value: 540, color: "#10B981" },
  { name: "In Progress", value: 280, color: "#FBBF24" },
  { name: "Abandoned", value: 180, color: "#EF4444" },
];

export function ConversionRates() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Conversion Rates</CardTitle>
        <CardDescription>Workflow completion analytics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} workflows`, 'Count']} 
                labelFormatter={() => ''} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-success">54%</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-warning">28%</div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-destructive">18%</div>
            <div className="text-xs text-muted-foreground">Abandoned</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
