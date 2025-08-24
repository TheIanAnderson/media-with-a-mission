import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServicesSection, { services } from '../components/ServicesSection';
import Section from '../components/Section';
import CTA from '../components/CTA';
import Counter from '../components/Counter';
import MediaPlaceholder from '../components/MediaPlaceholder';
import Reveal from '../components/Reveal';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  const heroRef = useRef(null);
  usePageMeta({
    title: 'Media with a Mission | Fundraising media for nonprofits',
    description: 'Story-driven videos and web tools that grow nonprofit fundraising.',
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

  const cases = [
    {
      title: 'Senior Pet Sanctuary Launch',
      outcome: 'Video + microsite that lifted donor conversion 31%.',
      tags: ['Video', 'Web'],
    },
    {
      title: 'Community Food Drive',
      outcome: 'Live event display that raised $275k in 20 minutes.',
      tags: ['Events'],
    },
    {
      title: 'Shelter Renovation Appeal',
      outcome: 'Documentary short that unlocked a 6‑figure match.',
      tags: ['Video'],
    },
  ];

  const steps = [
    {
      title: 'Discover',
      copy: 'We map goals, audiences, and constraints to define the right ask.',
    },
    {
      title: 'Design',
      copy: 'Scripts, storyboards, and UI/UX tailored to your supporters.',
    },
    {
      title: 'Produce',
      copy: 'Lean crews, high standards, clear approvals.',
    },
    {
      title: 'Launch & Optimize',
      copy: 'Rollout, analytics, and iteration tied to outcomes.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center text-center text-white h-screen hero-overlay"
      >
        <MediaPlaceholder className="absolute inset-0 w-full h-full parallax" />
        <div className="relative z-10 space-y-4 px-4">
          <h1 className="text-5xl font-bold">Media with a Mission</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Story-driven videos and web tools that grow nonprofit fundraising.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/work" className="btn btn-primary">
              See our work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <Section overline="Trusted by mission-driven teams">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <MediaPlaceholder key={i} className="w-32 h-16" ratio="4/1" />
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Services */}
      <ServicesSection items={services} />

      {/* Impact stats */}
      <Section>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div>
              <Counter value={120} />
              <p className="mt-2">Campaigns produced</p>
            </div>
            <div>
              <Counter value={500000} />
              <p className="mt-2">Funds helped raise</p>
            </div>
            <div>
              <Counter value={38} />
              <p className="mt-2">Average engagement lift</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted mt-4">(replace with real metrics)</p>
          <p className="text-center text-xs text-muted mt-2">
            Self-reported client outcomes (2022–2025).
          </p>
        </Reveal>
      </Section>

      {/* Case studies */}
      <Section title="Featured case studies">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <div key={c.title} className="card p-6 flex flex-col">
                <MediaPlaceholder className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted mb-2">{c.outcome}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map((t) => (
                    <span key={t} className="badge-terra">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/work" className="btn btn-outline mt-auto">
                  View project
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Process */}
      <Section title="Our process">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.title}
                className="card p-6 text-center flex flex-col items-center"
              >
                <MediaPlaceholder className="w-16 h-16 mb-4" ratio="1/1" />
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-muted text-sm">{s.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Testimonial */}
      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <MediaPlaceholder
              className="w-24 h-24 rounded-full mx-auto"
              ratio="1/1"
            />
            <blockquote className="text-xl font-semibold">
              “Our gala finally felt modern—and donors could see their impact in
              real time.”
            </blockquote>
            <p className="text-muted">— Taylor M., Development Director</p>
          </div>
        </Reveal>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTA
          heading="Ready to grow your fundraising?"
          primary={{ label: 'Book a discovery call', href: '/contact' }}
          secondary={{ label: 'See our work', href: '/work' }}
        />
      </Section>
    </div>
  );
}
