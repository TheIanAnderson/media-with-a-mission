import { lazy } from 'react';
import { services } from './components/ServicesSection';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Service = lazy(() => import('./pages/services/Service'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  {
    path: '/services/storytelling',
    element: <Service service={services.find((s) => s.slug === 'storytelling')} />,
  },
  {
    path: '/services/downgreat',
    element: <Service service={services.find((s) => s.slug === 'downgreat')} />,
  },
  {
    path: '/services/upgive',
    element: <Service service={services.find((s) => s.slug === 'upgive')} />,
  },
  { path: '/work', element: <Work /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];
