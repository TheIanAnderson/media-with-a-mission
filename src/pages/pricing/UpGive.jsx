// src/pages/UpGive.jsx
import usePageMeta from '../hooks/usePageMeta';

function FeatureCard({ title, children }) {
  return (
    <div
      className="rounded-xl border p-6 bg-card"
      style={{ borderColor: 'var(--border)' }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted leading-relaxed">{children}</p>
    </div>
  );
}

export default function UpGive() {
  usePageMeta({
    title: 'UpGive Live Displays',
    description:
      'Real-time, branded event screens that celebrate donors, show progress, and drive friendly competition.',
    image: undefined,
  });

  return (
    <div className="py-16">
      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          UpGive Live Displays
        </h1>
        <p className="text-lg text-muted">
          Turn every donation into a moment on screen. UpGive’s real‑time displays
          recognize donors instantly, showcase progress, and spark friendly
          competition—without tech headaches.
        </p>
      </header>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard title="Real‑Time Results">
          Names, amounts, and team totals animate onto the screen the moment a
          gift lands—keeping energy high and momentum visible for everyone in the
          room.
        </FeatureCard>
        <FeatureCard title="Branded for Your Event">
          Choose from a library of animated layouts that match your theme, or ask
          us to tailor one just for you. Colors, logos, and type lock to your
          brand so the experience feels native to your organization.
        </FeatureCard>
        <FeatureCard title="Zero Technical Hurdles">
          Designed for quick setup: open a link, plug into your projector, and go.
          We handle the plumbing so your team can focus on donors, not devices.
        </FeatureCard>
      </section>

      {/* What shows up on screen */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div
          className="rounded-2xl border p-8 bg-card"
          style={{ borderColor: 'var(--border)' }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            What appears on the screen
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted">
            <li className="leading-relaxed">
              • Live thermometer, goal markers, and total raised that update in
              sync with new gifts.
            </li>
            <li className="leading-relaxed">
              • Donor spotlights: name and gift amount animate in, then gracefully
              dismiss.
            </li>
            <li className="leading-relaxed">
              • Team vs. team scoreboards (e.g., Cats vs. Dogs) for gamified
              challenges.
            </li>
            <li className="leading-relaxed">
              • Leaderboards by table, class, department, or chapter—pick what
              motivates your crowd.
            </li>
            <li className="leading-relaxed">
              • Event‑themed animations and subtle motion that keep attention on
              the action without distracting from stage remarks.
            </li>
            <li className="leading-relaxed">
              • Optional raffle/auction callouts, paddles‑up moments, and timed
              bursts for matching gifts.
            </li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="rounded-xl border p-6 bg-card"
            style={{ borderColor: 'var(--border)' }}
          >
            <h3 className="text-lg font-semibold mb-2">1) Guests text & give</h3>
            <p className="text-muted">
              Your audience uses a simple keyword to donate. No app installs,
              just SMS and a secure checkout.
            </p>
          </div>
          <div
            className="rounded-xl border p-6 bg-card"
            style={{ borderColor: 'var(--border)' }}
          >
            <h3 className="text-lg font-semibold mb-2">2) We verify & log</h3>
            <p className="text-muted">
              Donations are validated, attributed to teams/tables, and queued for
              a smooth on‑screen reveal.
            </p>
          </div>
          <div
            className="rounded-xl border p-6 bg-card"
            style={{ borderColor: 'var(--border)' }}
          >
            <h3 className="text-lg font-semibold mb-2">3) Celebrate live</h3>
            <p className="text-muted">
              Names and totals animate in, goal bars climb, and friendly
              competition takes over the room.
            </p>
          </div>
        </div>
      </section>

      {/* Add‑on options for displays */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
          Optional add‑ons for the screen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard title="Automated Follow‑Ups">
            Send instant thank‑you texts, receipts, and post‑event nudges. Pair
            on‑screen recognition with SMS to build lasting relationships.
          </FeatureCard>
          <FeatureCard title="Recurring & Fee‑Covering Toggles">
            Let donors opt into monthly support and cover processing fees—helping
            you keep more of every gift while growing predictable revenue.
          </FeatureCard>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <div
          className="rounded-2xl border p-8 bg-card"
          style={{ borderColor: 'var(--border)' }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            Ready to see UpGive in action?
          </h2>
          <p className="text-muted mt-2">
            We’ll spin up a demo link you can drop straight into your AV setup.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-3 rounded-lg font-medium"
              style={{
                backgroundColor: 'var(--brand)',
                color: 'var(--brand-ink)',
                border: '1px solid var(--brand)',
              }}
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
