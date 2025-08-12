import { Link } from 'react-router-dom';

export default function ServiceCard({ title, excerpt, slug, icon }) {
  return (
    <Link
      to={`/services/${slug}`}
      className="block border border-border rounded-lg p-6 hover:shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      {icon && (
        <img
          src={icon}
          alt="Service icon"
          className="w-8 h-8 mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted mb-4">{excerpt}</p>
      <span className="text-brand font-medium">Learn more →</span>
    </Link>
  );
}
