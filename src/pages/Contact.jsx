import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import usePageMeta from '../hooks/usePageMeta';

export default function Contact() {
  usePageMeta({
    title: 'Contact | Media with a Mission',
    description: 'Tell us about your goals; we’ll recommend the most effective path.',
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    setSent(true);
  }

  return (
    <Section
      title="Let’s talk."
      subtitle="Tell us about your goals; we’ll recommend the most effective path."
    >
      <div className="grid gap-8 md:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-4 md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name *
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full p-3 rounded border border-border bg-card"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 rounded border border-border bg-card"
              />
            </div>
            <div>
              <label htmlFor="org" className="block mb-1">
                Organization
              </label>
              <input
                id="org"
                name="organization"
                className="w-full p-3 rounded border border-border bg-card"
              />
            </div>
            <div>
              <label htmlFor="project" className="block mb-1">
                Project type
              </label>
              <select
                id="project"
                name="project"
                className="w-full p-3 rounded border border-border bg-card"
              >
                <option>Video</option>
                <option>Event</option>
                <option>Web</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="block mb-1">
                Timeline
              </label>
              <input
                id="timeline"
                name="timeline"
                className="w-full p-3 rounded border border-border bg-card"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block mb-1">
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full p-3 rounded border border-border bg-card"
              >
                <option>Under $10k</option>
                <option>$10k–$50k</option>
                <option>$50k+</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 rounded border border-border bg-card"
            />
          </div>
          <Button type="submit" variant="primary">
            {sent ? 'Sent!' : 'Submit'}
          </Button>
        </form>
        <aside className="space-y-4">
          <div>
            <p className="text-sm">Prefer email?</p>
            <a href="mailto:info@mediawithamission.com" className="link-cta">
              info@mediawithamission.com
            </a>
            <p className="text-xs text-muted">We typically reply within 2 business days.</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Quick links</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                <Link to="/services" className="link-cta">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="link-cta">
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
