import { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import usePageMeta from '../hooks/usePageMeta';
import locationIcon from '../assets/icons/location.svg';

export default function Contact() {
  usePageMeta({ title: 'Contact | Media with a Mission' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Section className="max-w-xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-center mb-6">Start a Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          name="name"
          placeholder="Name"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <textarea
          name="message"
          placeholder="How can we help?"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <Button type="submit">{sent ? 'Sent!' : 'Submit'}</Button>
      </form>
      <div className="text-center mt-8 text-muted">
        Or email us at <a href="mailto:info@mediawithamission.com" className="underline">info@mediawithamission.com</a>
        <div className="flex items-center justify-center gap-2 mt-2">
          <img
            src={locationIcon}
            alt="Location icon"
            className="w-4 h-4"
          />
          <span>Anytown, USA</span>
        </div>
      </div>
    </Section>
  );
}
