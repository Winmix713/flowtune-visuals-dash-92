import { useState, useEffect } from "react";
import { ArrowUpRight, Download, RefreshCcw, Bell, Filter } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { MetricsOverview } from "@/components/dashboard/metrics-overview";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { ConversionChart } from "@/components/dashboard/conversion-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatusOverview } from "@/components/dashboard/status-overview";
import { StrategicPlan } from "@/components/strategic-plan";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-6 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor your business performance and analytics
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <RefreshCcw className="h-4 w-4" />
                <span>Refresh</span>
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">
                  Notifications
                  <span className="relative ml-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                </TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm" className="gap-1 text-primary">
                <span>View All</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {isLoading ? (
                <div className="grid gap-4 animate-pulse">
                  <div className="h-6 bg-muted rounded-md w-1/3" />
                  <div className="h-48 bg-muted rounded-md" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-muted rounded-md" />
                    <div className="h-32 bg-muted rounded-md" />
                  </div>
                </div>
              ) : (
                <>
                  <MetricsOverview />
                  <div className="grid gap-6 md:grid-cols-4">
                    <ActivityChart />
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-2 lg:col-span-4 space-y-6">
                      <PerformanceChart />
                      <ConversionChart />
                    </div>
                    <div className="col-span-2 lg:col-span-3 space-y-6">
                      <RecentActivity />
                      <StatusOverview />
                    </div>
                  </div>
                  <div className="mt-8">
                    <StrategicPlan />
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
