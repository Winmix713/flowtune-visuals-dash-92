
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  FileText,
  Calendar,
  HelpCircle,
  LineChart,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn(
        "w-full justify-start",
        active ? "bg-secondary font-medium" : "font-normal"
      )}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </Button>
  );
}

export function Sidebar() {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return null;
  }
  
  return (
    <div className="hidden md:block w-64 border-r bg-background h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2 p-4">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
        <SidebarItem icon={<BarChart3 size={18} />} label="Analytics" />
        <SidebarItem icon={<LineChart size={18} />} label="Performance" />
        <SidebarItem icon={<Users size={18} />} label="Users" />
        <SidebarItem icon={<Calendar size={18} />} label="Schedule" />
        <SidebarItem icon={<FileText size={18} />} label="Reports" />
        
        <div className="mt-auto">
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
          <SidebarItem icon={<HelpCircle size={18} />} label="Help" />
        </div>
      </div>
    </div>
  );
}
