import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import MediaPlaceholder from '../components/MediaPlaceholder';
import CTA from '../components/CTA';
import FilterTabs from '../components/FilterTabs';
import {
  Sparkles,
  Video as VideoIcon,
  Presentation,
  Globe2,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

const cases = [
  {
    title: 'Senior Pet Sanctuary Launch',
    summary: 'Video + microsite that lifted donor conversion 31%.',
    tags: ['Video', 'Web'],
    type: 'Video',
  },
  {
    title: 'Community Food Drive',
    summary: 'Live event display that raised $275k in 20 minutes.',
    tags: ['Events'],
    type: 'Events',
  },
  {
    title: 'Shelter Renovation Appeal',
    summary: 'Documentary short that unlocked a 6‑figure match.',
    tags: ['Video'],
    type: 'Video',
  },
  {
    title: 'Health Portal Overhaul',
    summary: 'Accessible site that doubled mobile donations.',
    tags: ['Web'],
    type: 'Web',
  },
  {
    title: 'City Park Telethon',
    summary: 'Event stream hitting 40k concurrent viewers.',
    tags: ['Events', 'Video'],
    type: 'Events',
  },
  {
    title: 'Annual Report Microsite',
    summary: 'Interactive data hub with 3x session time.',
    tags: ['Web'],
    type: 'Web',
  },
];

export default function Work() {
  usePageMeta({ title: 'Selected Work | Media with a Mission' });
  const [filter, setFilter] = useState('All');
  const filters = [
    { label: 'All', icon: Sparkles },
    { label: 'Video', icon: VideoIcon },
    { label: 'Events', icon: Presentation },
    { label: 'Web', icon: Globe2 },
  ];
  const filtered = cases.filter((c) => filter === 'All' || c.type === filter);

  return (
    <div>
      <Section
        title="Selected work"
        subtitle="Sample outcomes from recent collaborations."
      >
        <FilterTabs tabs={filters} current={filter} onChange={setFilter} />
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((c) => (
            <div key={c.title} className="card p-6 flex flex-col">
              <MediaPlaceholder className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-muted mb-2">{c.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {c.tags.map((t) => {
                  const TagIcon = tagIcons[t];
                  return (
                    <span key={t} className="badge-terra flex items-center gap-1">
                      {TagIcon && (
                        <TagIcon className="w-3 h-3" aria-hidden="true" />
                      )}
                      {t}
                    </span>
                  );
                })}
              </div>
              <Link to="/work" className="btn btn-outline mt-auto">
                View project
                <ArrowRight className="w-4 h-4 ico-right" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CTA
            heading="Want results like these?"
            primary={{
              label: 'Start a conversation',
              href: '/contact',
              trailingIcon: ArrowRight,
            }}
          />
        </div>
      </Section>
    </div>
  );
}

const tagIcons = {
  Video: VideoIcon,
  Events: Presentation,
  Web: Globe2,
  Strategy: BarChart3,
};
