export default function Footer() {
  const tagline = 'Story-Driven Media for Mission-Driven Impact';
  return (
    <footer className="bg-surface border-t border-border text-sm text-center py-6 space-y-2">
      <p className="text-muted">{tagline}</p>
      <p className="text-muted">© {new Date().getFullYear()} Media with a Mission. All rights reserved.</p>
    </footer>
  );
}
