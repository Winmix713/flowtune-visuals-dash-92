
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between glass-card p-6 rounded-lg border border-white/10 backdrop-blur-md">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gradient">Overview Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Analytics and insights for your workflow
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Period:</p>
            <Select defaultValue="7d">
              <SelectTrigger className="w-[120px] glass-card border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-card border-white/10 backdrop-blur-md">
                <SelectItem value="24h">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Badge variant="secondary" className="gap-1 px-2 backdrop-blur-sm bg-green-400/10 border-green-400/20">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>Live Data</span>
          </Badge>
        </div>
        <Button variant="outline" size="icon" className="glass-card border-white/10">
          <RefreshCw className="h-4 w-4" />
          <span className="sr-only">Refresh data</span>
        </Button>
        <Button variant="outline" size="icon" className="glass-card border-white/10">
          <Download className="h-4 w-4" />
          <span className="sr-only">Download report</span>
        </Button>
      </div>
    </div>
  );
}
