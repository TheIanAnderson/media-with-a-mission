import Button from '../../components/ui/Button';

export default function Video() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 space-y-6 text-center">
      <h1 className="text-4xl font-display">Story-Driven Video</h1>
      <p className="text-muted">Short films that move people to act.</p>
      <Button as="a" href="/contact">Start a Project</Button>
    </section>
  );
}
