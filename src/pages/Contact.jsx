import { useState } from 'react';
import Button from '../components/ui/Button';
import { insertLead } from '../lib/supabase';

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());
    try {
      await insertLead(payload);
      setStatus('success');
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
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
        <input
          name="budget_range"
          placeholder="Budget range"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <input
          name="timeline"
          placeholder="Timeline"
          className="w-full p-3 rounded bg-surface border border-border"
        />
        <Button type="submit">Submit</Button>
      </form>
      {status === 'success' && (
        <p className="mt-4 text-ok">Thanks! We'll be in touch.</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-400">Something went wrong. Try again.</p>
      )}
    </section>
  );
}
