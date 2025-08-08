import TimelineStep from '../components/ui/TimelineStep';

const steps = [
  { title: 'Discovery', description: 'We listen and learn about your goals.' },
  { title: 'Strategy', description: 'Define success metrics and creative plan.' },
  { title: 'Production', description: 'Capture and craft compelling media.' },
  { title: 'Launch', description: 'Deploy across channels for maximum reach.' },
  { title: 'Optimization', description: 'Measure results and iterate.' },
];

export default function Process() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 space-y-8">
      <h1 className="text-4xl font-display text-center mb-8">Process</h1>
      <div className="space-y-8">
        {steps.map((s, i) => (
          <TimelineStep key={s.title} step={i + 1} title={s.title} description={s.description} />
        ))}
      </div>
    </section>
  );
}
