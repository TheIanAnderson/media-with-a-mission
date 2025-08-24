import ServiceCard from './ServiceCard';
import Section from './Section';

// eslint-disable-next-line react-refresh/only-export-components
export const services = [
  {
    title: 'Fundraising Films & Campaign Videos',
    slug: 'fundraising-films',
    blurb: 'Cinematic stories that mobilize donors, boards, and communities.',
    tags: ['Video'],
  },
  {
    title: 'Live-Event Donation Displays (UpGive)',
    slug: 'live-event-donation-displays',
    blurb: 'Real-time giving visualizations that electrify the room.',
    tags: ['Events'],
  },
  {
    title: 'Nonprofit Websites',
    slug: 'nonprofit-websites',
    blurb: 'Fast, accessible sites your team can update without headaches.',
    tags: ['Web'],
  },
  {
    title: 'Donor Communications',
    slug: 'donor-communications',
    blurb: 'Emails and landing pages that turn attention into action.',
    tags: ['Web'],
  },
  {
    title: 'Strategy & Analytics',
    slug: 'strategy-analytics',
    blurb: 'From audience insights to measurable outcomes.',
    tags: ['Strategy'],
  },
  {
    title: 'Capacity-Building & Training',
    slug: 'capacity-building-training',
    blurb: 'Workshops and templates your staff will actually use.',
    tags: ['Training'],
  },
];

export default function ServicesSection({ items = services }) {
  return (
    <Section overline="What we do" title="Services">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <ServiceCard
            key={s.slug}
            title={s.title}
            blurb={s.blurb}
            tags={s.tags}
            href={`/services/${s.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
