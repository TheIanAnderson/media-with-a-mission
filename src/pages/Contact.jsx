import { useState } from 'react';
import Button from '../components/ui/Button';
import { createLead } from '../lib/leads';
import { toast } from '../lib/toast';

export default function Contact() {
  const services = [
    'Story-Driven Video',
    'Web Tools & Sites',
    'UpGive: Event Giving Display',
  ];
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());
    const selected = form.getAll('services');
    if (selected.length === 0) {
      toast('Select at least one service', 'error');
      return;
    }
    try {
      setSubmitting(true);
      await createLead({ ...payload, services: selected });
      e.target.reset();
      toast("Thanks! We'll be in touch.", 'success');
    } catch (err) {
      console.error(err);
      toast('Something went wrong. Try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="max-w-xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-display text-center mb-8">Start a Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <input
          name="org"
          placeholder="Organization"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <input
          name="phone"
          placeholder="Phone"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <textarea
          name="notes"
          placeholder="Project description"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <fieldset className="space-y-2">
          <legend className="font-medium">Which services are you interested in?</legend>
          {services.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="services" value={s} />
              <span>{s}</span>
            </label>
          ))}
        </fieldset>
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </section>
  );
}
