import { Link } from 'react-router-dom';

export default function ServiceCard({ title, excerpt, slug }) {
  return (
    <Link
      to={`/services/${slug}`}
      className="block border border-border rounded-lg p-6 hover:shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted mb-4">{excerpt}</p>
      <span className="text-brand font-medium">Learn more →</span>
    </Link>
  );
}
