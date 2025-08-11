import Section from '../components/Section';
import usePageMeta from '../hooks/usePageMeta';

export default function Work() {
  usePageMeta({ title: 'Work | Media with a Mission' });
  return (
    <Section className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">Work</h1>
      <p className="text-muted">Case studies coming soon.</p>
    </Section>
  );
}
