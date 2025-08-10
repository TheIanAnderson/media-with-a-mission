import Card from '../../components/ui/Card';

export default function UpGivePricing() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 space-y-8">
      <h1 className="text-4xl font-display text-center mb-8">UpGive Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="font-semibold mb-2">Event Display</h3>
          <p className="text-3xl font-bold mb-4">$2k</p>
          <p className="text-muted text-sm">Single-screen leaderboard.</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Campaign Package</h3>
          <p className="text-3xl font-bold mb-4">$3k</p>
          <p className="text-muted text-sm">Display plus live support.</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Custom</h3>
          <p className="text-3xl font-bold mb-4">Let's chat</p>
          <p className="text-muted text-sm">Tailored event integrations.</p>
        </Card>
      </div>
    </section>
  );
}
