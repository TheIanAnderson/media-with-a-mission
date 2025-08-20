import { services } from '../components/ServicesSection';
import ServiceCard from '../components/ServiceCard';
import Section from '../components/Section';
import CTA from '../components/CTA';
import usePageMeta from '../hooks/usePageMeta';

export default function Services() {
  usePageMeta({ title: 'Services | Media with a Mission' });
  const servicesIntro =
    'We craft media experiences that guide donors from awareness to action, combining premium storytelling with engagement platforms that clearly communicate your impact and accelerate your mission.';
  return (
    <Section className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-center mb-6">Services</h1>
      <p className="text-center text-lg text-muted max-w-3xl mx-auto mb-10">{servicesIntro}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} title={s.title} excerpt={s.excerpt} slug={s.slug} />
        ))}
      </div>
      <CTA />
    </Section>
  );
}
