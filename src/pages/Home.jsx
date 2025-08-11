import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import OrbsBackground from '../components/OrbsBackground';
import logoLight from '../assets/MWM-logo-light-mode.png';
import logoDark from '../assets/MWM-logo-dark-mode.png';
import useTheme from '../hooks/useTheme';

export default function Home() {
  const theme = useTheme();
  const logoRef = useRef(null);
  const [logoStyle, setLogoStyle] = useState({});
  const [initialRect, setInitialRect] = useState(null);

  useEffect(() => {
    if (logoRef.current) {
      setInitialRect(logoRef.current.getBoundingClientRect());
    }
    const onScroll = () => {
      const hasScrolled = window.scrollY > 50;
      if (hasScrolled) {
        const logo = logoRef.current;
        const navLogo = document.getElementById('navbar-logo');
        if (logo && navLogo) {
          const rect = logo.getBoundingClientRect();
          const navRect = navLogo.getBoundingClientRect();
          setLogoStyle({
            position: 'fixed',
            top: rect.top,
            left: rect.left,
            width: rect.width,
            transform: `translate(${navRect.left - rect.left}px, ${navRect.top - rect.top}px) scale(${navRect.width / rect.width})`,
            opacity: 0,
            transition: 'transform 300ms ease, opacity 300ms ease',
            pointerEvents: 'none',
          });
        }
      } else {
        setLogoStyle({
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 1,
          transition: 'transform 300ms ease, opacity 300ms ease',
        });
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
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
        <OrbsBackground />
        <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
          <div
            className="relative"
            style={{ height: initialRect ? initialRect.height : undefined }}
          >
            <img
              ref={logoRef}
              src={logoSrc}
              alt="Media with a Mission"
              className="w-64"
              style={logoStyle}
              onLoad={() => {
                if (logoRef.current) {
                  setInitialRect(logoRef.current.getBoundingClientRect());
                }
              }}
            />
          </div>
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
