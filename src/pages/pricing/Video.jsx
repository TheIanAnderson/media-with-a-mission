import Card from '../../components/ui/Card';

export default function VideoPricing() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 space-y-8">
      <h1 className="text-4xl font-display text-center mb-8">Video Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="font-semibold mb-2">Mini Documentary</h3>
          <p className="text-3xl font-bold mb-4">$10k</p>
          <p className="text-muted text-sm">3-5 minute storytelling film.</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Campaign Package</h3>
          <p className="text-3xl font-bold mb-4">$15k</p>
          <p className="text-muted text-sm">Multiple edits for omnichannel use.</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Custom</h3>
          <p className="text-3xl font-bold mb-4">Let's chat</p>
          <p className="text-muted text-sm">Tailored for your mission.</p>
        </Card>
      </div>
    </section>
  );
}
