'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { Computer, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="w-7 h-7 flex justify-center items-center border rounded-xl shadow shadow-black/70 dark:shadow-white/70 animate-pulse disabled:cursor-wait transition-all">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
    );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text-primary cursor-pointer w-7 h-7 flex justify-center items-center border border-black/40 dark:border-white/40 rounded-xl shadow shadow-black/70 dark:shadow-white/70">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
            <Moon className="absolute h-4  w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-primary w-40 border-zinc-500/40">
          <DropdownMenuItem
            onClick={() => setTheme('light')}
            className="gap-2 cursor-pointer"
            disabled={theme === 'light'}
          >
            <Sun className="h-4  w-4 text-primary" /> Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('dark')}
            className="gap-2 cursor-pointer"
            disabled={theme === 'dark'}
          >
            <Moon className="h-4  w-4 text-primary" /> Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('system')}
            className="gap-2 cursor-pointer"
            disabled={theme === 'system'}
          >
            <Computer className="h-4  w-4 text-primary" /> System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
