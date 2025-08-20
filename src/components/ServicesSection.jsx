import Section from './Section';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

// eslint-disable-next-line react-refresh/only-export-components
export const services = [
  {
    title: 'Story-Driven, Cinematic Storytelling',
    slug: 'storytelling',
    excerpt: 'High-impact fundraising films with strategic storytelling.',
    heroImage: {
      src: 'https://via.placeholder.com/1200x600?text=Storytelling',
      alt: 'Story-Driven, Cinematic Storytelling',
    },
    overview:
      'We produce high-impact fundraising films that combine cinematic visuals with strategic storytelling, designed to inspire action and build lasting donor relationships. Our approach avoids clichés, overused tropes, and emotionally charged gimmicks—focusing instead on measurable transformation and the stories that matter most to your mission.',
    deliverables: [
      'Creative Consultation: One-on-one call with our experienced creative directors to align on goals, audience, and key outcomes.',
      'Pre-Production Storyboarding: A detailed visual and narrative roadmap to ensure clarity, impact, and alignment with your mission.',
      'On-Site Production: One to two full days of professional filming at your location.',
      'Cinematic Fundraising Film: A fully produced, 2–5 minute video optimized for fundraising events, donor outreach, and digital campaigns.',
    ],
    valueProp:
      'Our creative directors are trained to craft content that resonates without causing donor fatigue. Every frame and every word serve your mission—showcasing authentic stories backed by the metrics of transformation that inspire confidence and action.',
    ctaText: 'Book your story consultation',
  },
  {
    title: 'DownGreat – Websites That Put You in Control',
    slug: 'downgreat',
    excerpt: 'Mission-focused websites your team can update instantly.',
    heroImage: {
      src: 'https://via.placeholder.com/1200x600?text=DownGreat',
      alt: 'DownGreat – Websites That Put You in Control',
    },
    overview:
      'Many nonprofits are stuck with beautiful but uneditable websites—locked into expensive retainers with developers who control every update. DownGreat fixes that. We design mission-focused, brand-aligned websites on easy-to-manage platforms like Squarespace and WordPress, so your team can make updates instantly without relying on outside help. The result: a site that’s visually compelling, donor-ready, and completely yours.',
    deliverables: [
      'Discovery & Planning Session: Align mission priorities, brand voice, and audience needs.',
      'Custom Template Design: Professionally designed on Squarespace or WordPress for easy editing and long-term flexibility.',
      'Brand-Aligned Visuals: Layouts, typography, and imagery that reflect your identity and reinforce your mission.',
      'Fundraising-Ready Features: Donation pages, event listings, volunteer signups, and impact showcases.',
      'Launch & Training: Step-by-step guidance so your team can confidently update and expand the site without ongoing developer costs.',
    ],
    valueProp:
      'DownGreat delivers professional, mission-aligned sites with the simplicity and control your team needs, eliminating costly retainers and long turnaround times.',
    ctaText: 'Request a site plan',
  },
  {
    title: 'UpGive – Live Giving Displays That Gamify Fundraising',
    slug: 'upgive',
    excerpt: 'Large-screen, real-time displays that energize generosity.',
    heroImage: {
      src: 'https://via.placeholder.com/1200x600?text=UpGive',
      alt: 'UpGive – Live Giving Displays That Gamify Fundraising',
    },
    overview:
      'UpGive turns your fundraising events into immersive, high-energy experiences—enthusiastically aligned with your event’s theme or your nonprofit’s branding. Our large-screen, real-time displays highlight donor names, giving amounts, and team progress, creating an engaging, visual narrative that matches the event atmosphere and energizes generosity.',
    deliverables: [
      'Event Integration Planning',
      'Custom-Themed Display Design',
      'Real-Time Donation Tracking',
      'Gamification Elements (leaderboards, progress bars, goal tracking)',
      'On-Site Operation',
    ],
    valueProp:
      'UpGive transforms fundraising from static recognition into an interactive experience that drives excitement and deeper engagement.',
    ctaText: 'Reserve your event date',
  },
];

export default function ServicesSection() {
  return (
    <Section className="services-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-10">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} title={s.title} excerpt={s.excerpt} slug={s.slug} />
          ))}
        </div>
      </div>
    </Section>
  );
}
