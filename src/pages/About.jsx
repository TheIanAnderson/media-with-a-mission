import site from '../assets/data/site.json';
import Section from '../components/Section';
import usePageMeta from '../hooks/usePageMeta';
import ceoImg from '../assets/images/ceo-placeholder.webp';
import teamImg from '../assets/images/team-placeholder.webp';

export default function About() {
  usePageMeta({ title: 'About | Media with a Mission' });
  return (
    <>
      <Section className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-center mb-6">About</h1>
        <p className="text-lg text-muted whitespace-pre-line">{site.about}</p>
      </Section>
      <Section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-display font-bold text-center">CEO Note</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={ceoImg}
            alt="Placeholder headshot for CEO"
            className="w-32 h-32 rounded-full"
          />
          <p className="text-muted">
            Our mission is to empower organizations with media that inspires action.
          </p>
        </div>
      </Section>
      <Section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-center mb-6">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { name: 'Jordan', role: 'Producer' },
            { name: 'Riley', role: 'Editor' },
            { name: 'Casey', role: 'Designer' },
          ].map((m) => (
            <div key={m.name} className="text-center space-y-2">
              <img
                src={teamImg}
                alt={`Placeholder headshot for ${m.name}`}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="font-medium">{m.name}</h3>
              <p className="text-sm text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
