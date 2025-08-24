import ServiceCard from '../components/ServiceCard';
import { services } from '../components/ServicesSection';
import Section from '../components/Section';
import CTA from '../components/CTA';
import usePageMeta from '../hooks/usePageMeta';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

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
      <Section
        overline={
          <span className="flex items-center gap-1">
            Services
            <Sparkles className="w-4 h-4 opacity-80" aria-hidden="true" />
          </span>
        }
        title="Services that move supporters to act."
        subtitle={intro}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              blurb={s.blurb}
              tags={s.tags}
              href={`/services/${s.slug}`}
              icon={s.icon}
              footerIcon={s.footerIcon}
            />
          ))}
        </div>
        <div className="mt-12">
          <CTA
            heading="Not sure where to begin?"
            primary={{
              label: 'Start with a 20-minute consult',
              href: '/contact',
              icon: Calendar,
              trailingIcon: ArrowRight,
            }}
          />
        </div>
      </Section>
    </div>
  );
}
