import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCaseBySlug } from '../lib/supabase';
import Stat from '../components/ui/Stat';
import Pill from '../components/ui/Pill';

function renderMarkdown(md) {
  return md.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl font-semibold mt-6 mb-2">
          {line.slice(3)}
        </h2>
      );
    }
    if (!line.trim()) return null;
    return (
      <p key={i} className="text-muted mb-2">
        {line}
      </p>
    );
  });
}

export default function CaseStudy() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getCaseBySlug(slug).then(setData);
  }, [slug]);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <article className="max-w-3xl mx-auto py-24 px-4 space-y-6">
      {data.hero_url && (
        <img
          src={data.hero_url}
          alt={data.title}
          className="w-full h-64 object-cover rounded"
          loading="lazy"
        />
      )}
      <h1 className="text-4xl font-display">{data.title}</h1>
      <div className="flex gap-2 flex-wrap">
        {data.tags?.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-8">
        <Stat label="Views" value={data.metrics.views} />
        <Stat label="Donations" value={`$${data.metrics.donations.toLocaleString()}`} />
        <Stat
          label="Conversion Lift"
          value={`${Math.round(data.metrics.conversion_lift * 100)}%`}
        />
      </div>
      <div>{renderMarkdown(data.body)}</div>
    </article>
  );
}
