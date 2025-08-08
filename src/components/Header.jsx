import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/process', label: 'Process' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/upgive', label: 'UpGive' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Media with a Mission" className="h-8 w-auto" />
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
