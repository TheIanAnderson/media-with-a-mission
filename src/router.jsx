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
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    element: <Service service={s} />,
  })),
  { path: '/work', element: <Work /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];
