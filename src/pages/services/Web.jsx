import Button from '../../components/ui/Button';

export default function Web() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 space-y-6 text-center">
      <h1 className="text-4xl font-display">Web Tools & Sites</h1>
      <p className="text-muted">Squarespace or Next.js sites focused on outcomes.</p>
      <Button as="a" href="/contact">Start a Project</Button>
    </section>
  );
}
