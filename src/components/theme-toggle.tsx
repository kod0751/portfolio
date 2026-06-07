"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function ThemeToggleInner() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="size-9"
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
      <span className="sr-only">테마 변경</span>
    </Button>
  );
}

export const ThemeToggle = dynamic(() => Promise.resolve(ThemeToggleInner), {
  ssr: false,
  loading: () => (
    <Button variant="ghost" size="icon" className="size-9" disabled>
      <span className="sr-only">테마 변경</span>
    </Button>
  ),
});
