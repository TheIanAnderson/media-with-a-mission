import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Section from '../../components/Section';
import MediaPlaceholder from '../../components/MediaPlaceholder';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter';
import usePageMeta from '../../hooks/usePageMeta';

export default function Service({ service }) {
  usePageMeta({
    title: `${service?.title || 'Service'} | Media with a Mission`,
    description: service?.blurb,
  });

  const process = [
    { title: 'Discover', copy: 'We map goals, audiences, and constraints.' },
    {
      title: 'Design',
      copy: 'Scripts, storyboards, or wireframes tailored to your supporters.',
    },
    { title: 'Produce', copy: 'Lean crews, high standards, clear approvals.' },
    {
      title: 'Launch & Optimize',
      copy: 'Rollout, analytics, and iteration tied to outcomes.',
    },
  ];

  return (
    <article>
      <section className="section hero-overlay text-center py-24 relative">
        <MediaPlaceholder className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 space-y-4 section-narrow">
          <h1 className="text-4xl font-bold">{service?.title || 'Service'}</h1>
          <p className="text-lg">{service?.blurb}</p>
          <div className="flex justify-center gap-4">
            <Button as={Link} to="/contact" variant="primary">
              Talk to us
            </Button>
            <Button as={Link} to="/work" variant="outline">
              See related work
            </Button>
          </div>
        </div>
      </section>

      <Section title="Overview">
        <Reveal>
          <ul className="list-disc list-inside space-y-2">
            <li>Best for appeals, capital campaigns, year‑end.</li>
            <li>Aligns stakeholders around a clear call to action.</li>
            <li>Built for fundraising events and digital launches.</li>
          </ul>
        </Reveal>
      </Section>

      <Section title="Deliverables">
        <Reveal>
          <ul className="list-disc list-inside space-y-2">
            <li>Strategy session</li>
            <li>Scripting</li>
            <li>Production day(s)</li>
            <li>Edits and captions</li>
            <li>Accessible exports</li>
            <li>Handoff</li>
          </ul>
        </Reveal>
      </Section>

      <Section title="Process">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.title} className="card p-4 text-center">
                <MediaPlaceholder className="w-12 h-12 mx-auto mb-2" ratio="1/1" />
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section title="Outcomes">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-4 text-center">
            {['Metric one', 'Metric two', 'Metric three', 'Metric four'].map((m) => (
              <div key={m}>
                <Counter value={0} />
                <p className="text-sm mt-2">{m}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted mt-4">
            (replace with real metrics)
          </p>
        </Reveal>
      </Section>

      <Section title="Gallery/Examples">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <MediaPlaceholder key={i} ratio="16/9" />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section title="FAQ">
        <Reveal>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold">How much does it cost?</dt>
              <dd className="text-muted">
                Pricing varies by scope; reach out for a quote.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">How long does it take?</dt>
              <dd className="text-muted">Typical timeline 4–8 weeks.</dd>
            </div>
            <div>
              <dt className="font-semibold">How many revisions?</dt>
              <dd className="text-muted">Two rounds of revisions are included.</dd>
            </div>
            <div>
              <dt className="font-semibold">Is it accessible?</dt>
              <dd className="text-muted">
                Captions and accessible exports are standard.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Who owns the final files?</dt>
              <dd className="text-muted">
                You do—everything is delivered upon completion.
              </dd>
            </div>
          </dl>
        </Reveal>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-4">
          <Button as={Link} to="/contact" variant="primary">
            Talk to us
          </Button>
          <p className="text-sm text-muted">Typical timeline: 4–8 weeks</p>
          <p className="text-sm text-muted">Team needed: client + our roles</p>
        </div>
      </Section>
    </article>
  );
}
