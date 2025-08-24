import ServiceCard from '../components/ServiceCard';
import { services } from '../components/ServicesSection';
import Section from '../components/Section';
import CTA from '../components/CTA';
import usePageMeta from '../hooks/usePageMeta';

export default function Services() {
  usePageMeta({
    title: 'Services | Media with a Mission',
    description:
      'Story-driven videos, live-event tools, and web experiences that move supporters to act.',
  });

  const intro =
    'We craft media experiences that guide donors from awareness to action.';

  return (
    <div>
      <Section title="Services that move supporters to act." subtitle={intro}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              blurb={s.blurb}
              tags={s.tags}
              href={`/services/${s.slug}`}
            />
          ))}
        </div>
        <div className="mt-12">
          <CTA
            heading="Not sure where to begin?"
            primary={{ label: 'Start with a 20-minute consult', href: '/contact' }}
          />
        </div>
      </Section>
    </div>
  );
}
