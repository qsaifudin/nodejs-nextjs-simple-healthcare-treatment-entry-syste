// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-end">
      <Button className="mr-1" size="sm"  variant="flat" onClick={() => setTheme("light")}>Light</Button>
      <Button className="mr-1" size="sm" variant="flat" onClick={() => setTheme("dark")}>Dark</Button>
      <Button size="sm" variant="flat" onClick={() => setTheme("modern")}>Modern</Button>
    </div>
  );
}
