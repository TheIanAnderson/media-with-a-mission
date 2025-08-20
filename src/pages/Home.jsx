import { useEffect, useRef } from 'react';
import { services } from '../components/ServicesSection';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ServicesSection from '../components/ServicesSection';
import CTA from '../components/CTA';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  const heroRef = useRef(null);
  usePageMeta({
    title: 'Media with a Mission',
    description:
      'Media with a Mission produces cinematic videos and digital engagement tools for mission-driven organizations, helping them inspire supporters, amplify impact, and build lasting donor relationships.',
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
      <Hero
        ref={heroRef}
        title="Cinematic Storytelling and Digital Tools for Mission-Driven Organizations"
        subtitle="We create high-impact videos and engagement platforms that inspire supporters, amplify your mission, and build lasting donor relationships."
      />
      <ServicesSection />
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-display font-bold">About Us</h2>
          <p className="text-muted text-lg">
            Media with a Mission is a creative production studio specializing in high-impact content and engagement tools for mission-driven organizations. We leverage cinematic storytelling, interactive digital experiences, and audience engagement automation to connect supporters with the causes they care about most. Each project is strategically designed to elevate fundraising, enhance brand presence, and build lasting donor relationships through the authentic communication of real-world impact.
          </p>
        </div>
      </Section>
      <CTA />
    </div>
  );
}
