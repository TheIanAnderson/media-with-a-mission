export default function Section({
  overline,
  title,
  subtitle,
  icon: Icon,
  children,
  className = '',
}) {
  return (
    <section className={`section ${className}`}>
      <div className="section-narrow">
        {overline && (
          <div className="badge-terra mb-4 inline-block flex items-center gap-1">
            {overline}
          </div>
        )}
        {title && (
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            {Icon && (
              <Icon
                className="w-6 h-6 opacity-80 ico-wrap"
                aria-hidden="true"
              />
            )}
            {title}
          </h2>
        )}
        {subtitle && <p className="text-muted mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
