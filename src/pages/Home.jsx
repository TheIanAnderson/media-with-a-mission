import { motion as Motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <section className="text-center py-32 space-y-12">
      <Motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-display font-bold"
      >
        Storytelling for Impact
      </Motion.h1>
      <p className="max-w-xl mx-auto text-muted">
        Media with a Mission partners with nonprofits to amplify change through cinematic video and web tools.
      </p>
      <Button as="a" href="/contact" variant="primary">
        Start a Project
      </Button>
      <div className="mt-24 flex items-center justify-center gap-8 opacity-75">
        <img src="/vite.svg" alt="Client" className="h-8 w-auto" loading="lazy" />
        <img src="/vite.svg" alt="Client" className="h-8 w-auto" loading="lazy" />
        <img src="/vite.svg" alt="Client" className="h-8 w-auto" loading="lazy" />
      </div>
    </section>
  );
}
