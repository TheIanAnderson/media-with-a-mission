import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section border-t border-border text-sm">
      <div className="section-narrow space-y-6">
        <nav className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/work" className="hover:underline">
            Work
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <form className="max-w-sm mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 p-2 rounded border border-border bg-card"
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-primary">
            Join
          </button>
        </form>
        <p className="text-center text-muted">
          © {year} Media with a Mission. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
