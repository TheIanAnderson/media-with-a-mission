import site from '../assets/data/site.json';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border text-sm text-center py-6 space-y-2">
      <p className="text-muted">{site.tagline}</p>
      <p className="text-muted">© {new Date().getFullYear()} Media with a Mission. All rights reserved.</p>
    </footer>
  );
}
