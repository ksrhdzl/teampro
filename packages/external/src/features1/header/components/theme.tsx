'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/button';

export const Theme = () => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    setTimeout(() => {
      const r = document.querySelector(':root') as HTMLElement;
      if (newTheme === 'dark') {
        r.style.setProperty(
          '--background',
          r.style.getPropertyValue('--dark-background'),
        );
        r.style.setProperty('--main', r.style.getPropertyValue('--dark-main'));
      } else {
        r.style.setProperty(
          '--background',
          r.style.getPropertyValue('--light-background'),
        );
        r.style.setProperty('--main', r.style.getPropertyValue('--light-main'));
      }
    }, 0);
  };

  return (
    <>
      <Button
        variant={'outline'}
        className="h-8 hover:translate-x-[2px]! hover:translate-y-[2px]!"
        onClick={handleThemeChange}
      >
        <Sun className="hidden stroke-foreground dark:inline" />
        <Moon className="inline stroke-foreground dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};
