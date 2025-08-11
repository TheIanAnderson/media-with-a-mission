import { useEffect, useRef } from 'react';
import services from '../assets/data/services.json';
import site from '../assets/data/site.json';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  const heroRef = useRef(null);
  usePageMeta({
    title: 'Media with a Mission',
    description: site.metaDescription,
    image: services[0].heroImage.src,
  });

  useEffect(() => {
    document.body.classList.remove('logo-pinned');
    if (!('IntersectionObserver' in window) || !heroRef.current) {
      document.body.classList.add('logo-pinned');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.remove('logo-pinned');
        } else {
          document.body.classList.add('logo-pinned');
        }
      },
      { threshold: 0.9 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero ref={heroRef} title={site.hero.headline} subtitle={site.hero.subtext} />
      <Section className="angled-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-10">Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} title={s.title} excerpt={s.excerpt} slug={s.slug} />
            ))}
          </div>
        </div>
      </Section>
      <Section className="angled-section">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-display font-bold">About Us</h2>
          <p className="text-muted text-lg">{site.about}</p>
        </div>
      </Section>
      <CTA />
    </div>
  );
}
