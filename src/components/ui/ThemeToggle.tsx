"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "light";
    setTheme(stored);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(next);
    root.style.colorScheme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="interactive flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-fg-muted hover:bg-surface-hover hover:text-fg"
    >
      {mounted ? (
        theme === "light" ? <Sun size={17} /> : <Moon size={17} />
      ) : (
        <span className="h-[17px] w-[17px]" />
      )}
    </button>
  );
}
