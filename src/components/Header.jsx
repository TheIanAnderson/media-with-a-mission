import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoLight from '../assets/MWM-logo-light-mode.png';
import logoDark from '../assets/MWM-logo-dark-mode.png';
import ThemeToggle from './ThemeToggle';
import useTheme from '../hooks/useTheme';

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const showLogo = scrolled || location.pathname !== '/';
  const nav = [
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/process', label: 'Process' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <Link
          to="/"
          className={`block transition-opacity duration-300 ${
            showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            id="navbar-logo"
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Media with a Mission"
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `hover:text-brand ${isActive ? 'text-brand' : 'text-muted'}`
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
              key={n.to}
              to={n.to}
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
