import { useEffect, useState } from 'react';
import Section from '../components/Section';
import usePageMeta from '../hooks/usePageMeta';
import { getCaseList } from '../lib/supabase';
import casePlaceholder from '../assets/images/case-study-placeholder.webp';

export default function Work() {
  usePageMeta({ title: 'Work | Media with a Mission' });
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCaseList().then(setCases);
  }, []);

  return (
    <Section className="max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-center mb-6">Work</h1>
      {cases.length ? (
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.slug} className="space-y-2">
              <img
                src={c.hero_url || casePlaceholder}
                alt={c.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-muted text-sm">{c.summary}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">Case studies coming soon.</p>
      )}
    </Section>
  );
}
