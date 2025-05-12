
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  Settings, 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Zap, 
  BarChart, 
  Users,
  BookOpen,
  Code,
  Newspaper,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/5 backdrop-blur-lg supports-[backdrop-filter]:bg-background/5">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <span className="font-bold text-lg text-gradient">FlowTune</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Products <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[240px] glass-card border-white/10 backdrop-blur-lg">
              <DropdownMenuItem className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary" />
                <div>
                  <div>Automation</div>
                  <p className="text-xs text-muted-foreground">Automate your workflow processes</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3">
                <BarChart className="h-5 w-5 text-primary" />
                <div>
                  <div>Analytics</div>
                  <p className="text-xs text-muted-foreground">Get insights from your data</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div>Collaboration</div>
                  <p className="text-xs text-muted-foreground">Work together seamlessly</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Resources <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[240px] glass-card border-white/10 backdrop-blur-lg">
              <DropdownMenuItem className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <div>
                  <div>Documentation</div>
                  <p className="text-xs text-muted-foreground">Learn how to use FlowTune</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3">
                <Code className="h-5 w-5 text-primary" />
                <div>
                  <div>API</div>
                  <p className="text-xs text-muted-foreground">API references and guides</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3">
                <Newspaper className="h-5 w-5 text-primary" />
                <div>
                  <div>Blog</div>
                  <p className="text-xs text-muted-foreground">Latest updates and articles</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost">Pricing</Button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-sm">
              Login
            </Button>
            <Button className="button-gradient">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
