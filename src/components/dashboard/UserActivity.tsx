
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weeklyData = [
  { day: "Mon", desktop: 120, mobile: 80, tablet: 50 },
  { day: "Tue", desktop: 150, mobile: 100, tablet: 60 },
  { day: "Wed", desktop: 180, mobile: 120, tablet: 70 },
  { day: "Thu", desktop: 170, mobile: 110, tablet: 65 },
  { day: "Fri", desktop: 190, mobile: 130, tablet: 75 },
  { day: "Sat", desktop: 110, mobile: 140, tablet: 80 },
  { day: "Sun", desktop: 90, mobile: 150, tablet: 85 },
];

const monthlyData = [
  { day: "Week 1", desktop: 820, mobile: 650, tablet: 350 },
  { day: "Week 2", desktop: 950, mobile: 700, tablet: 380 },
  { day: "Week 3", desktop: 880, mobile: 680, tablet: 360 },
  { day: "Week 4", desktop: 1000, mobile: 720, tablet: 400 },
];

const quarterlyData = [
  { day: "Jan", desktop: 2400, mobile: 1800, tablet: 1100 },
  { day: "Feb", desktop: 2200, mobile: 1700, tablet: 1000 },
  { day: "Mar", desktop: 2600, mobile: 1900, tablet: 1200 },
  { day: "Apr", desktop: 2350, mobile: 1850, tablet: 1150 },
  { day: "May", desktop: 2500, mobile: 2000, tablet: 1250 },
  { day: "Jun", desktop: 2700, mobile: 2100, tablet: 1300 },
  { day: "Jul", desktop: 2900, mobile: 2200, tablet: 1350 },
  { day: "Aug", desktop: 2800, mobile: 2150, tablet: 1325 },
  { day: "Sep", desktop: 3000, mobile: 2300, tablet: 1400 },
  { day: "Oct", desktop: 3200, mobile: 2400, tablet: 1450 },
  { day: "Nov", desktop: 3300, mobile: 2500, tablet: 1500 },
  { day: "Dec", desktop: 3500, mobile: 2600, tablet: 1550 },
];

export function UserActivity() {
  const [period, setPeriod] = React.useState("weekly");
  
  const data = {
    weekly: weeklyData,
    monthly: monthlyData,
    quarterly: quarterlyData,
  }[period];
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Sessions by device type</CardDescription>
          </div>
          <Tabs value={period} onValueChange={setPeriod} defaultValue="weekly">
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="desktop" name="Desktop" fill="#6366F1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mobile" name="Mobile" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tablet" name="Tablet" fill="#EC4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
