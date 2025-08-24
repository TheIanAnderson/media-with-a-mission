import ServiceCard from './ServiceCard';
import Section from './Section';
import {
  Film,
  Presentation,
  MonitorSmartphone,
  Mail,
  BarChart3,
  PieChart,
  GraduationCap,
} from 'lucide-react';

// eslint-disable-next-line react-refresh/only-export-components
export const services = [
  {
    title: 'Fundraising Films & Campaign Videos',
    slug: 'fundraising-films',
    blurb: 'Cinematic stories that mobilize donors, boards, and communities.',
    tags: ['Video'],
    icon: Film,
  },
  {
    title: 'Live-Event Donation Displays (UpGive)',
    slug: 'live-event-donation-displays',
    blurb: 'Real-time giving visualizations that electrify the room.',
    tags: ['Events'],
    icon: Presentation,
  },
  {
    title: 'Nonprofit Websites',
    slug: 'nonprofit-websites',
    blurb: 'Fast, accessible sites your team can update without headaches.',
    tags: ['Web'],
    icon: MonitorSmartphone,
  },
  {
    title: 'Donor Communications',
    slug: 'donor-communications',
    blurb: 'Emails and landing pages that turn attention into action.',
    tags: ['Web'],
    icon: Mail,
  },
  {
    title: 'Strategy & Analytics',
    slug: 'strategy-analytics',
    blurb: 'From audience insights to measurable outcomes.',
    tags: ['Strategy'],
    icon: BarChart3,
    footerIcon: PieChart,
  },
  {
    title: 'Capacity-Building & Training',
    slug: 'capacity-building-training',
    blurb: 'Workshops and templates your staff will actually use.',
    tags: ['Training'],
    icon: GraduationCap,
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
            icon={s.icon}
            footerIcon={s.footerIcon}
          />
        ))}
      </div>
    </Section>
  );
}
