
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface UsageItemProps {
  name: string;
  value: number;
  max: number;
  color: string;
}

function UsageItem({ name, value, max, color }: UsageItemProps) {
  const percentage = (value / max) * 100;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground">
          {value} / {max}
        </div>
      </div>
      <Progress value={percentage} className={cn("h-2", color)} />
    </div>
  );
}

export function UsageStats() {
  const usageItems = [
    {
      name: "API Requests",
      value: 850000,
      max: 1000000,
      color: "bg-chart-1",
    },
    {
      name: "Storage",
      value: 256,
      max: 500,
      color: "bg-chart-2",
    },
    {
      name: "Active Users",
      value: 425,
      max: 500,
      color: "bg-chart-3",
    },
    {
      name: "Workflows",
      value: 45,
      max: 100,
      color: "bg-chart-4",
    },
    {
      name: "Automation Credits",
      value: 2750,
      max: 5000,
      color: "bg-chart-5",
    },
  ];
  
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Usage Statistics</CardTitle>
        <CardDescription>Current usage across your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {usageItems.map((item, index) => (
          <UsageItem key={index} {...item} />
        ))}
      </CardContent>
    </Card>
  );
}
