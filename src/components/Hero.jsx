import { forwardRef } from 'react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Hero = forwardRef(function Hero({ title, subtitle }, ref) {
  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-start min-h-screen text-center px-4 space-y-6 pt-80"
    >
      <h1 className="text-4xl sm:text-5xl font-display font-bold max-w-3xl glow animate-fade-in">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-muted animate-fade-in animate-delay-200">
        {subtitle}
      </p>
      <Button as={Link} to="/contact" className="animate-fade-in animate-delay-400">
        Start a Project
      </Button>
    </section>
  );
});

export default Hero;
