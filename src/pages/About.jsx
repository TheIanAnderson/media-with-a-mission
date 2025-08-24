import Section from '../components/Section';
import CTA from '../components/CTA';
import MediaPlaceholder from '../components/MediaPlaceholder';
import usePageMeta from '../hooks/usePageMeta';
import {
  Heart,
  PenTool,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function About() {
  usePageMeta({ title: 'About | Media with a Mission' });

  const approach = [
    {
      title: 'Story First',
      copy: 'We lead with narrative to create emotional clarity.',
      icon: Heart,
    },
    {
      title: 'Design for Clarity',
      copy: 'Minimalist interfaces that guide action.',
      icon: PenTool,
    },
    {
      title: 'Outcomes You Can Measure',
      copy: 'Metrics aligned to each campaign’s goal.',
      icon: BarChart3,
    },
  ];

  const team = [
    { name: 'Alex R.', role: 'Creative Director', bio: 'Focused on authentic storytelling.' },
    { name: 'Jamie P.', role: 'Producer', bio: 'Keeps projects moving and on budget.' },
    { name: 'Morgan L.', role: 'Developer', bio: 'Builds accessible, fast web tools.' },
  ];

  const values = [
    'Transparency',
    'Accessibility',
    'Stewardship',
    'Creativity',
    'Iteration',
    'Partnership',
  ];

  return (
    <div>
      <Section title="Mission" subtitle="Story-driven media for mission-driven impact.">
        <p className="text-lg">
          We help nonprofits grow fundraising through cinematic stories and usable digital tools.
        </p>
      </Section>
      <Section title="Our approach">
        <div className="grid gap-6 md:grid-cols-3">
          {approach.map((a) => (
            <div key={a.title} className="card p-6">
              {a.icon && (
                <a.icon
                  className="w-7 h-7 mb-2 ico-wrap"
                  aria-hidden="true"
                />
              )}
              <h3 className="font-semibold mb-2">{a.title}</h3>
              <p className="text-muted text-sm">{a.copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Team" icon={Users}>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="text-center space-y-2">
              <MediaPlaceholder className="mx-auto w-32 h-32 rounded-full" ratio="1/1" />
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-muted">{t.role}</p>
              <p className="text-sm text-muted">{t.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Values">
        <ul className="grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <li key={v} className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-muted" aria-hidden="true" />
              {v}
            </li>
          ))}
        </ul>
      </Section>
      <Section overline="Partners">
        <div className="flex flex-wrap justify-center gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <MediaPlaceholder key={i} className="w-32 h-16" ratio="4/1" />
          ))}
        </div>
      </Section>
      <Section>
        <CTA
          heading="Meet with our team"
          primary={{
            label: 'Book a discovery call',
            href: '/contact',
            trailingIcon: ArrowRight,
          }}
        />
      </Section>
    </div>
  );
}
