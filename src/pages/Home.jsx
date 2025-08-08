import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import OrbsBackground from '../components/OrbsBackground';

export default function Home() {
  const showMission = true; // toggle to show mission statement vs boilerplate
  const services = [
    {
      title: 'Story-Driven Video',
      tagline: 'Short films that move people to act.',
      href: '/services/video',
    },
    {
      title: 'Web Tools & Sites',
      tagline: 'Squarespace or Next.js sites focused on outcomes.',
      href: '/services/web',
    },
    {
      title: 'UpGive: Event Giving Display',
      tagline: 'Gamified giving displays for events.',
      href: '/upgive',
    },
  ];
  const showcase = [
    {
      title: 'Hope Campaign',
      caption: 'Short film',
      image: 'https://picsum.photos/seed/1/400/300',
    },
    {
      title: 'Education Portal',
      caption: 'Web platform',
      image: 'https://picsum.photos/seed/2/400/300',
    },
    {
      title: 'Event Impact',
      caption: 'Live display',
      image: 'https://picsum.photos/seed/3/400/300',
    },
  ];
  return (
    <div>
      <section className="relative overflow-hidden py-32 text-center">
        <OrbsBackground />
        <div className="relative z-10 space-y-6 px-4">
          {showMission ? (
            <h1 className="text-5xl font-display font-bold">
              Storytelling for Impact
            </h1>
          ) : (
            <p className="max-w-xl mx-auto text-lg text-muted">
              Media with a Mission partners with nonprofits to amplify change
              through cinematic video and web tools.
            </p>
          )}
          <Button as={Link} to="/contact" variant="primary">
            Start a Project
          </Button>
        </div>
      </section>
      <div aria-hidden="true" className="h-16 bg-brand -skew-y-1" />
      <section className="py-24 px-4 text-center max-w-6xl mx-auto" id="services">
        <h2 className="text-4xl font-display mb-2">Services</h2>
        <p className="text-muted mb-8">How we can help.</p>
        <div className="grid gap-6 sm:grid-cols-3 text-left">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted flex-grow">{s.tagline}</p>
              <Button
                as={Link}
                to={s.href}
                className="mt-4 transform transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display mb-2">Showcase</h2>
          <p className="text-muted mb-8">A few recent projects.</p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {showcase.map((item) => (
              <a
                key={item.title}
                href="/work"
                className="group block rounded-lg overflow-hidden bg-card border border-border transition-transform transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted text-sm">{item.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
