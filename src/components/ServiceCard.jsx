import { Link } from 'react-router-dom';
import MediaPlaceholder from './MediaPlaceholder';

export default function ServiceCard({ title, blurb, href, tags = [] }) {
  return (
    <Link
      to={href}
      className="card block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
    >
      <MediaPlaceholder className="w-full" />
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted flex-1">{blurb}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((t) => (
              <span key={t} className="badge-terra">
                {t}
              </span>
            ))}
          </div>
        )}
        <span className="link-cta mt-2">Learn more →</span>
      </div>
    </Link>
  );
}
