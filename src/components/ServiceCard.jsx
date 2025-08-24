import { Link } from 'react-router-dom';
import MediaPlaceholder from './MediaPlaceholder';
import { Video, Presentation, Globe2, BarChart3 } from 'lucide-react';

export default function ServiceCard({
  title,
  blurb,
  href,
  tags = [],
  icon: Icon,
  footerIcon: FooterIcon,
}) {
  const tagIcons = {
    Video,
    Events: Presentation,
    Web: Globe2,
    Strategy: BarChart3,
  };
  return (
    <Link
      to={href}
      className="card block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ico-wrap-hover group"
    >
      <MediaPlaceholder className="w-full" />
      <div className="p-6 flex flex-col gap-2">
        {Icon && (
          <Icon
            className="w-7 h-7 mb-2 ico-wrap group-focus-visible:scale-110 motion-reduce:group-focus-visible:scale-100"
            aria-hidden="true"
          />
        )}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted flex-1">{blurb}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((t) => {
              const IconTag = tagIcons[t];
              return (
                <span key={t} className="badge-terra flex items-center gap-1">
                  {IconTag && <IconTag className="w-3 h-3" aria-hidden="true" />}
                  {t}
                </span>
              );
            })}
          </div>
        )}
        <div className="flex items-center gap-2 mt-2">
          <span className="link-cta">Learn more →</span>
          {FooterIcon && (
            <FooterIcon className="w-4 h-4 text-muted" aria-hidden="true" />
          )}
        </div>
      </div>
    </Link>
  );
}
