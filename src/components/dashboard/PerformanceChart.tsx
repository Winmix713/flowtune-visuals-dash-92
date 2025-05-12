
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const performanceData = [
  { date: "Jan", users: 5000, sessions: 7400, conversions: 1400 },
  { date: "Feb", users: 6000, sessions: 8000, conversions: 1500 },
  { date: "Mar", users: 8500, sessions: 10000, conversions: 1800 },
  { date: "Apr", users: 7800, sessions: 9500, conversions: 1700 },
  { date: "May", users: 8800, sessions: 11000, conversions: 2000 },
  { date: "Jun", users: 10000, sessions: 12500, conversions: 2300 },
  { date: "Jul", users: 9500, sessions: 11800, conversions: 2100 },
  { date: "Aug", users: 11000, sessions: 13500, conversions: 2500 },
  { date: "Sep", users: 12500, sessions: 15000, conversions: 2800 },
  { date: "Oct", users: 11700, sessions: 14200, conversions: 2600 },
  { date: "Nov", users: 13800, sessions: 16500, conversions: 3100 },
  { date: "Dec", users: 15000, sessions: 18000, conversions: 3500 },
];

export function PerformanceChart() {
  const [activeTab, setActiveTab] = useState("line");
  
  return (
    <Card className="w-full card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>User engagement metrics over time</CardDescription>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            defaultValue="line"
            className="w-[200px]"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="line">Line</TabsTrigger>
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {activeTab === "line" && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#6366F1"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="sessions"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="conversions"
                  stroke="#EC4899"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
          
          {activeTab === "area" && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="users"
                  stackId="1"
                  stroke="#6366F1"
                  fill="#6366F133"
                />
                <Area
                  type="monotone"
                  dataKey="sessions"
                  stackId="1"
                  stroke="#8B5CF6"
                  fill="#8B5CF633"
                />
                <Area
                  type="monotone"
                  dataKey="conversions"
                  stackId="1"
                  stroke="#EC4899"
                  fill="#EC489933"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
          
          {activeTab === "bar" && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#6366F1" />
                <Bar dataKey="sessions" fill="#8B5CF6" />
                <Bar dataKey="conversions" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
