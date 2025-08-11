import Card from '../../components/ui/Card';

export default function WebPricing() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 space-y-8">
      <h1 className="text-4xl font-display text-center mb-8">Web Tools & Sites Pricing</h1>
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
    </section>
  );
}
