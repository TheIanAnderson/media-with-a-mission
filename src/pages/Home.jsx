import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import OrbsBackground from '../components/OrbsBackground';
import logoLight from '../assets/MWM-logo-light-mode.png';
import logoDark from '../assets/MWM-logo-dark-mode.png';

export default function Home() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  );
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = (e) => setTheme(e.detail);
    window.addEventListener('themechange', handler);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('themechange', handler);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
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
      href: '/services/upgive',
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
  const logoSrc = theme === 'dark' ? logoDark : logoLight;
  return (
    <div>
      <img
        src={logoSrc}
        alt="Media with a Mission"
        className={`fixed z-40 transition-all duration-500 transform ${
          scrolled
            ? 'top-3 left-3 w-8 opacity-0 pointer-events-none'
            : 'top-1/2 left-1/2 w-48 -translate-x-1/2 -translate-y-1/2 opacity-100'
        }`}
      />
      <section className="relative overflow-hidden py-32 text-center">
        <OrbsBackground />
        <div className="relative z-10 space-y-6 px-4">
          <h1 className="text-5xl font-display font-bold">
            Storytelling for Impact
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted">
            Media with a Mission partners with nonprofits to amplify change
            through cinematic video and web tools.
          </p>
          <Button as={Link} to="/contact" variant="primary">
            Start a Project
          </Button>
        </div>
      </section>
      <section
        className="py-24 px-4 text-center bg-brand text-brand-ink"
        id="services"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display mb-2">Services</h2>
          <p className="mb-8">How we can help.</p>
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
