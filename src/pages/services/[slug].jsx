import { useParams, Link } from 'react-router-dom';
import services from '../../assets/data/services.json';
import details from '../../assets/data/serviceDetails.json';
import Button from '../../components/ui/Button';
import usePageMeta from '../../hooks/usePageMeta';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const detail = details[slug];

  usePageMeta({
    title: service ? `${service.title} | Media with a Mission` : 'Service | Media with a Mission',
    description: detail?.overview,
    image: service?.heroImage?.src,
  });

  if (!service || !detail) {
    return <div className="p-8">Service not found.</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-24 px-4 space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-display font-bold">{service.title}</h1>
        <p className="text-muted text-lg">{detail.overview}</p>
        <img
          src={service.heroImage.src}
          alt={service.heroImage.alt || service.title}
          className="w-full rounded"
        />
      </header>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
        <ul className="list-disc list-inside space-y-2">
          {detail.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Value Proposition</h2>
        <p className="text-muted">{detail.valueProp}</p>
      </section>
      <Button as={Link} to="/contact" className="mt-4">
        {detail.ctaText}
      </Button>
    </article>
  );
}
