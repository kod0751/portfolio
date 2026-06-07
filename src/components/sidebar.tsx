"use client";

import { cn } from "@/lib/utils";
import { Home, FolderOpen, User, Mail, FileText } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "about", label: "About", icon: Home },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "skills", label: "Skills", icon: FileText },
  { id: "experience", label: "Experience", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="fixed left-4 top-4 h-[calc(100vh-2rem)] w-64 border border-sidebar-border bg-sidebar rounded-2xl p-6 flex flex-col shadow-lg">
      <div className="mb-10">
        <h1 className="text-xl font-bold text-sidebar-foreground">Portfolio</h1>
        <p className="text-sm text-muted-foreground mt-1">Frontend Developer</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                  )}
                >
                  <Icon className="size-5" />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-primary" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="pt-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground">© 2024 Portfolio</p>
      </div>
    </aside>
  );
}
