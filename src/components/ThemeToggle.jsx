
import React, { useEffect, useState } from 'react'
import { Toggle } from './ui/toggle'
import { Sun, SunMoon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Toggle 
      className="p-5"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Sun className='text-orange-300' /> : <SunMoon className='text-blue-300' />}
    </Toggle>
  )
}
