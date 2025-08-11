import { useEffect, useRef } from 'react';
import services from '../assets/data/services.json';
import site from '../assets/data/site.json';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ServicesSection from '../components/ServicesSection';
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
      <ServicesSection />
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-display font-bold">About Us</h2>
          <p className="text-muted text-lg">{site.about}</p>
        </div>
      </Section>
      <CTA />
    </div>
  );
}
