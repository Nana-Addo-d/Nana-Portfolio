'use client';

import { JSX, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export default function ThemeToggle(): JSX.Element | null {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until the client is mounted
  }

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Sun Icon (Light Mode Indicator) */}
      <Sun
        className={`h-5 w-5 transition-opacity ${
          resolvedTheme === 'dark' ? 'opacity-50' : 'opacity-100'
        }`}
      />
      {/* Switch Component */}
      <Switch
        checked={resolvedTheme === 'dark'}
        onCheckedChange={handleThemeToggle}
        aria-label="Toggle theme"
      />
      {/* Moon Icon (Dark Mode Indicator) */}
      <Moon
        className={`h-5 w-5 transition-opacity ${
          resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-50'
        }`}
      />
    </div>
  );
}
