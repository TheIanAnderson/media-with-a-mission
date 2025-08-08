import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCaseList } from '../lib/supabase';
import Card from '../components/ui/Card';
import Pill from '../components/ui/Pill';

export default function Work() {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    getCaseList().then(setCases);
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-display mb-8 text-center">Our Work</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <Link key={c.slug} to={`/work/${c.slug}`}>
            <Card className="hover:shadow-lg transition-shadow">
              {c.hero_url && (
                <img
                  src={c.hero_url}
                  alt={c.title}
                  className="rounded mb-4 w-full h-40 object-cover"
                  loading="lazy"
                />
              )}
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <p className="text-sm text-muted mb-2 line-clamp-2">{c.summary}</p>
              <div className="flex gap-2 flex-wrap">
                {c.tags?.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
