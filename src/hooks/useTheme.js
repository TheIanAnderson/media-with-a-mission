import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  );

  useEffect(() => {
    const handler = (e) => setTheme(e.detail);
    window.addEventListener('themechange', handler);
    return () => window.removeEventListener('themechange', handler);
  }, []);

  return theme;
}
