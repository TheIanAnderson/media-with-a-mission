import Card from '../components/ui/Card';

export default function Pricing() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 space-y-8">
      <h1 className="text-4xl font-display text-center mb-8">Pricing</h1>
      <p className="text-muted text-center">
        Larger up-front fee, no retainer. Paid add-ons powered by Stripe coming soon.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="font-semibold mb-2">Squarespace Clone</h3>
          <p className="text-3xl font-bold mb-4">$5k</p>
          <p className="text-muted text-sm">Adapt our proven template.</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Squarespace Rebuild</h3>
          <p className="text-3xl font-bold mb-4">$7.5k</p>
          <p className="text-muted text-sm">Refresh with custom tweaks.</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Custom</h3>
          <p className="text-3xl font-bold mb-4">Let's chat</p>
          <p className="text-muted text-sm">Next.js apps & more.</p>
        </Card>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <details className="border border-border rounded p-4">
          <summary className="font-medium">Do you require retainers?</summary>
          <p className="mt-2 text-sm text-muted">No, we work on a per-project basis.</p>
        </details>
        <details className="border border-border rounded p-4">
          <summary className="font-medium">Are paid add-ons available?</summary>
          <p className="mt-2 text-sm text-muted">Stripe-powered add-ons are coming soon.</p>
        </details>
      </div>
    </section>
  );
}
