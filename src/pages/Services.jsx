import { useState } from 'react';
import Tab from '../components/ui/Tab';
import Button from '../components/ui/Button';

const data = {
  'Story-Driven Video': {
    desc: 'Short films that move people to act.',
    bullets: ['Raise awareness', 'Boost donations', 'Share your mission'],
  },
  'Web Tools & Sites': {
    desc: 'Squarespace or Next.js sites focused on outcomes.',
    bullets: ['Fast launch', 'Metrics tracking', 'Flexible CMS'],
  },
  'UpGive: Event Giving Display': {
    desc: 'Gamified giving displays for events.',
    bullets: ['Real-time tally', 'Leaderboards', 'Audience engagement'],
  },
};

export default function Services() {
  const [active, setActive] = useState(Object.keys(data)[0]);
  const current = data[active];
  return (
    <section className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-display mb-8 text-center">Services</h1>
      <Tab tabs={Object.keys(data)} active={active} onChange={setActive} />
      <div className="space-y-4">
        <p className="text-muted">{current.desc}</p>
        <ul className="list-disc list-inside space-y-2 text-muted">
          {current.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <Button as="a" href="/contact">Start a Project</Button>
      </div>
    </section>
  );
}
