
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Sparkles, 
  ChevronDown, 
  Zap, 
  BarChart, 
  Users,
  BookOpen,
  Code,
  Newspaper,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/5 backdrop-blur-lg supports-[backdrop-filter]:bg-background/5">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg glow-text-blue">FlowTune</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 glass-card border-white/10">
                Products <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[240px] glass-card border-white/10 backdrop-blur-lg">
              <div className="p-1 space-y-1">
                <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5">
                  <Zap className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Automation</div>
                    <p className="text-xs text-muted-foreground">Automate your workflow processes</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5">
                  <BarChart className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Analytics</div>
                    <p className="text-xs text-muted-foreground">Get insights from your data</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Collaboration</div>
                    <p className="text-xs text-muted-foreground">Work together seamlessly</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 glass-card border-white/10">
                Resources <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[240px] glass-card border-white/10 backdrop-blur-lg">
              <div className="p-1 space-y-1">
                <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Documentation</div>
                    <p className="text-xs text-muted-foreground">Learn how to use FlowTune</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5">
                  <Code className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">API</div>
                    <p className="text-xs text-muted-foreground">API references and guides</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5">
                  <Newspaper className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Blog</div>
                    <p className="text-xs text-muted-foreground">Latest updates and articles</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="glass-card border-white/10">
            Pricing
          </Button>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-sm glass-card border-white/10">
              Login
            </Button>
            <Button className="button-gradient">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-white/10 p-4">
          <div className="space-y-3">
            <div className="py-2">
              <h5 className="mb-2 text-sm font-medium text-muted-foreground">Products</h5>
              <div className="space-y-2 pl-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Zap className="mr-2 h-4 w-4" />
                  <span>Automation</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BarChart className="mr-2 h-4 w-4" />
                  <span>Analytics</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Collaboration</span>
                </Button>
              </div>
            </div>
            
            <div className="py-2">
              <h5 className="mb-2 text-sm font-medium text-muted-foreground">Resources</h5>
              <div className="space-y-2 pl-2">
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>Documentation</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Code className="mr-2 h-4 w-4" />
                  <span>API</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Newspaper className="mr-2 h-4 w-4" />
                  <span>Blog</span>
                </Button>
              </div>
            </div>
            
            <Button variant="ghost" className="w-full justify-start">
              Pricing
            </Button>
            
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full glass-card border-white/10">
                Login
              </Button>
              <Button className="w-full button-gradient">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
