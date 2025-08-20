import { forwardRef } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = forwardRef(function Hero({ title, subtitle }, ref) {
  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-start min-h-screen text-center px-4 space-y-6 pt-80"
    >
      <h1 className="text-4xl sm:text-5xl font-display font-bold max-w-3xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-muted">{subtitle}</p>
      <Button as={Link} to="/contact">Start a Project</Button>
    </section>
  );
});

export default Hero;
