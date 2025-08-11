import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import navItems from '../assets/data/navigation.json';

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      document.body.classList.add('logo-pinned');
    }
  }, [location.pathname]);

  const nav = navItems;
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur border-b border-border shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-24">
        <div className="w-28 h-24" aria-hidden="true" />
        <nav className="hidden md:flex gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.path}
              to={n.path}
              className={({ isActive }) =>
                `hover:text-brand transition-colors ${
                  isActive ? 'text-brand' : 'text-muted'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden text-text"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-bg border-t border-border px-4 pb-4">
          {nav.map((n) => (
            <NavLink
              key={n.path}
              to={n.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-muted hover:text-brand"
            >
              {n.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
