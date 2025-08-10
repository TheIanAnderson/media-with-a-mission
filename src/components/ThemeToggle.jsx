import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return (
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
  }, [theme]);

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="p-2 rounded-full border border-border hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
