import services from '../assets/data/services.json';
import site from '../assets/data/site.json';
import ServiceCard from '../components/ServiceCard';
import Section from '../components/Section';
import CTA from '../components/CTA';
import usePageMeta from '../hooks/usePageMeta';

export default function Services() {
  usePageMeta({ title: 'Services | Media with a Mission' });
  return (
    <Section className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-center mb-6">Services</h1>
      <p className="text-center text-lg text-muted max-w-3xl mx-auto mb-10">
        {site.servicesIntro}
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} title={s.title} excerpt={s.excerpt} slug={s.slug} />
        ))}
      </div>
      <CTA />
    </Section>
  );
}
