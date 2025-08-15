import { useEffect, useRef } from 'react';
import services from '../assets/data/services.json';
import site from '../assets/data/site.json';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ServicesSection from '../components/ServicesSection';
import CTA from '../components/CTA';
import featureImpact from '../assets/icons/feature-impact.svg';
import featureSpeed from '../assets/icons/feature-speed.svg';
import featureSupport from '../assets/icons/feature-support.svg';
import logoPlaceholder from '../assets/images/logo-placeholder.webp';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  const heroRef = useRef(null);
  usePageMeta({
    title: 'Media with a Mission',
    description: site.metaDescription,
    image: services[0].heroImage.src,
  });

  const features = [
    {
      icon: featureImpact,
      title: 'Impactful Stories',
      description: 'Communicate mission clearly.',
    },
    {
      icon: featureSpeed,
      title: 'Fast Turnaround',
      description: 'Deliverables on schedule.',
    },
    {
      icon: featureSupport,
      title: 'Ongoing Support',
      description: 'We stand with your team.',
    },
  ];

  const testimonials = [
    { quote: 'MWM brought our mission to life.', name: 'Alex P.' },
    { quote: 'Their tools boosted our donations.', name: 'Sam R.' },
  ];

  const logos = [logoPlaceholder, logoPlaceholder, logoPlaceholder];

  useEffect(() => {
    document.body.classList.remove('logo-pinned');
    const heroEl = heroRef.current;
    const heading = heroEl?.querySelector('h1');
    const logo = document.querySelector('.logo-lockup');

    if (!heroEl || !heading || !logo) {
      document.body.classList.add('logo-pinned');
      return;
    }

    // Calculate where the large logo ends so we can pin before overlap
    const largeLogoBottom = logo.offsetTop + logo.offsetHeight;

    const handleScroll = () => {
      const headingTop = heading.getBoundingClientRect().top;
      if (headingTop <= largeLogoBottom + 10) {
        document.body.classList.add('logo-pinned');
      } else {
        document.body.classList.remove('logo-pinned');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
      <Section>
        <div className="max-w-6xl mx-auto text-center grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="space-y-2">
              <img src={f.icon} alt={`${f.title} icon`} className="w-12 h-12 mx-auto" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-muted text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-display font-bold">Trusted by</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Placeholder partner logo"
                className="h-12"
              />
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-display font-bold">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="p-4 border border-border rounded bg-surface"
              >
                <p className="text-muted mb-2">“{t.quote}”</p>
                <cite className="not-italic font-medium">— {t.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>
      <CTA />
    </div>
  );
}
