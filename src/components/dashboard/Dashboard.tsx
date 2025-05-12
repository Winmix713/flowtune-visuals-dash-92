
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { UsageStats } from "@/components/dashboard/UsageStats";
import { UserActivity } from "@/components/dashboard/UserActivity";
import { ConversionRates } from "@/components/dashboard/ConversionRates";
import { useToast } from "@/hooks/use-toast";

export function Dashboard() {
  const { toast } = useToast();

  React.useEffect(() => {
    // Welcome toast notification
    toast({
      title: "Welcome to FlowTune",
      description: "Your analytics dashboard has been loaded successfully.",
      duration: 3000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 md:p-6">
          <div className="space-y-6 animate-fade-in">
            <DashboardHeader />
            <MetricsGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PerformanceChart />
              </div>
              <div>
                <ActivityFeed />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UsageStats />
              <ConversionRates />
            </div>
            <UserActivity />
          </div>
        </div>
      </div>
    </div>
  );
}
