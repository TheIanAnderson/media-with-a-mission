import Section from '../components/Section';
import usePageMeta from '../hooks/usePageMeta';

export default function About() {
  usePageMeta({ title: 'About | Media with a Mission' });
  const aboutText =
    'Media with a Mission is a creative production studio specializing in high-impact content and engagement tools for mission-driven organizations. We leverage cinematic storytelling, interactive digital experiences, and audience engagement automation to connect supporters with the causes they care about most. Each project is strategically designed to elevate fundraising, enhance brand presence, and build lasting donor relationships through the authentic communication of real-world impact.';
  return (
    <Section className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-center mb-6">About</h1>
      <p className="text-lg text-muted whitespace-pre-line">{aboutText}</p>
    </Section>
  );
}
