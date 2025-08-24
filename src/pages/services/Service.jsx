import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Section from '../../components/Section';
import MediaPlaceholder from '../../components/MediaPlaceholder';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter';
import usePageMeta from '../../hooks/usePageMeta';
import {
  CheckCircle2,
  Search,
  PenTool,
  Clapperboard,
  Video as VideoIcon,
  Mail,
  ShieldCheck,
  Folder,
  Rocket,
  BarChart3,
  ArrowRight,
  Clock,
  Users,
  DollarSign,
} from 'lucide-react';

export default function Service({ service }) {
  usePageMeta({
    title: `${service?.title || 'Service'} | Media with a Mission`,
    description: service?.blurb,
  });

  const process = [
    { title: 'Discover', copy: 'We map goals, audiences, and constraints.', icon: Search },
    {
      title: 'Design',
      copy: 'Scripts, storyboards, or wireframes tailored to your supporters.',
      icon: PenTool,
    },
    { title: 'Produce', copy: 'Lean crews, high standards, clear approvals.', icon: Clapperboard },
    {
      title: 'Launch & Optimize',
      copy: 'Rollout, analytics, and iteration tied to outcomes.',
      icon: Rocket,
    },
  ];

  return (
    <article>
      <section className="section hero-overlay text-center py-24 relative">
        <MediaPlaceholder className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 space-y-4 section-narrow">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
            {service?.icon && (
              <service.icon
                className="w-10 h-10 ico-wrap"
                aria-hidden="true"
              />
            )}
            {service?.title || 'Service'}
          </h1>
          <p className="text-lg">{service?.blurb}</p>
          <div className="flex justify-center gap-4">
            <Button as={Link} to="/contact" variant="primary">
              Talk to us
              <ArrowRight className="w-4 h-4 ico-right" aria-hidden="true" />
            </Button>
            <Button as={Link} to="/work" variant="outline">
              See related work
              <ArrowRight className="w-4 h-4 ico-right" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <Section title="Overview">
        <Reveal>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-1" aria-hidden="true" />
              <span>Best for appeals, capital campaigns, year‑end.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-1" aria-hidden="true" />
              <span>Aligns stakeholders around a clear call to action.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-1" aria-hidden="true" />
              <span>Built for fundraising events and digital launches.</span>
            </li>
          </ul>
        </Reveal>
      </Section>

      <Section title="Deliverables">
        <Reveal>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Search className="w-4 h-4" aria-hidden="true" /> Strategy session
            </li>
            <li className="flex items-center gap-2">
              <PenTool className="w-4 h-4" aria-hidden="true" /> Scripting
            </li>
            <li className="flex items-center gap-2">
              <Clapperboard className="w-4 h-4" aria-hidden="true" /> Production day(s)
            </li>
            <li className="flex items-center gap-2">
              <VideoIcon className="w-4 h-4" aria-hidden="true" /> Edits and captions
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" /> Accessible exports
            </li>
            <li className="flex items-center gap-2">
              <Folder className="w-4 h-4" aria-hidden="true" /> Handoff
            </li>
          </ul>
        </Reveal>
      </Section>

      <Section title="Process">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.title} className="card p-4 text-center">
                <p.icon
                  className="w-8 h-8 mx-auto mb-2 ico-wrap"
                  aria-hidden="true"
                />
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section title="Outcomes" icon={BarChart3}>
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
            <ArrowRight className="w-4 h-4 ico-right" aria-hidden="true" />
          </Button>
          <p className="text-sm text-muted flex items-center gap-1">
            <Clock className="w-4 h-4" aria-hidden="true" /> Typical timeline: 4–8 weeks
          </p>
          <p className="text-sm text-muted flex items-center gap-1">
            <Users className="w-4 h-4" aria-hidden="true" /> Team needed: client + our roles
          </p>
          <p className="text-sm text-muted flex items-center gap-1">
            <DollarSign className="w-4 h-4" aria-hidden="true" /> Budget guidance: TBD
          </p>
        </div>
      </Section>
    </article>
  );
}
