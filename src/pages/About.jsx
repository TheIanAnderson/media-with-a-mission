import site from '../assets/data/site.json';
import Section from '../components/Section';
import usePageMeta from '../hooks/usePageMeta';

export default function About() {
  usePageMeta({ title: 'About | Media with a Mission' });
  return (
    <Section className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-center mb-6">About</h1>
      <p className="text-lg text-muted whitespace-pre-line">{site.about}</p>
    </Section>
  );
}
