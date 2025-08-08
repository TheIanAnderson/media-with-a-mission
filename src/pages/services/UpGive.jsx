import { motion as Motion } from 'framer-motion';
import Button from '../../components/ui/Button';

export default function UpGive() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-4 space-y-8 text-center">
      <h1 className="text-4xl font-display">UpGive</h1>
      <p className="text-muted max-w-xl mx-auto">
        Gamified giving displays that energize live events.
      </p>
      <div className="h-64 bg-surface border border-border rounded flex items-center justify-center">
        <Motion.div
          className="w-32 h-32 bg-brand"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </div>
      <ul className="list-disc list-inside text-left space-y-2 max-w-md mx-auto text-muted">
        <li>Real-time donation tally</li>
        <li>Leaderboard and goals</li>
        <li>Plug into existing forms</li>
      </ul>
      <Button as="a" href="/contact">Request a Demo</Button>
    </section>
  );
}
