export default function Section({ overline, title, subtitle, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="section-narrow">
        {overline && <div className="badge-terra mb-4 inline-block">{overline}</div>}
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
        {subtitle && <p className="text-muted mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
