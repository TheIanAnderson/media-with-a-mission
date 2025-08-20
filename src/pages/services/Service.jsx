import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import usePageMeta from '../../hooks/usePageMeta';

export default function Service({ service }) {
  usePageMeta({
    title: `${service.title} | Media with a Mission`,
    description: service.overview,
    image: service.heroImage.src,
  });

  return (
    <article className="max-w-3xl mx-auto py-24 px-4 space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-display font-bold">{service.title}</h1>
        <p className="text-muted text-lg">{service.overview}</p>
        <img
          src={service.heroImage.src}
          alt={service.heroImage.alt || service.title}
          className="w-full rounded"
        />
      </header>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
        <ul className="list-disc list-inside space-y-2">
          {service.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Value Proposition</h2>
        <p className="text-muted">{service.valueProp}</p>
      </section>
      <Button as={Link} to="/contact" className="mt-4">
        {service.ctaText}
      </Button>
    </article>
  );
}
