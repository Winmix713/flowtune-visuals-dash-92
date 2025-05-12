import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Bell, User, Menu, X } from "lucide-react";

const navLinks = ["Dashboard", "Analytics", "Reports", "Settings"];

export function Navbar({ className }: React.HTMLAttributes<HTMLElement>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur", className)}>
      <div className="container flex items-center justify-between h-16 mx-auto">
        {/* Left: Logo & Mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <h1 className="text-xl font-bold text-primary flex items-center gap-2">
            <span className="relative flex h-6 w-6 items-center justify-center">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-40" />
              <span className="relative h-4 w-4 rounded-full bg-primary" />
            </span>
            FlowTune
          </h1>
        </div>

        {/* Center: Main Nav (Desktop only) */}
        <nav className="hidden lg:flex gap-4">
          {navLinks.map(link => (
            <Button key={link} variant="ghost" className="text-sm font-medium">
              {link}
            </Button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="User menu">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background p-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Button key={link} variant="ghost" className="w-full justify-start text-sm font-medium">
                {link}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
