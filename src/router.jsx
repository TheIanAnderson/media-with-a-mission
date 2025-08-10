import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Video = lazy(() => import('./pages/services/Video'));
const Web = lazy(() => import('./pages/services/Web'));
const UpGive = lazy(() => import('./pages/services/UpGive'));
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Process = lazy(() => import('./pages/Process'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const VideoPricing = lazy(() => import('./pages/pricing/Video'));
const WebPricing = lazy(() => import('./pages/pricing/Web'));
const UpGivePricing = lazy(() => import('./pages/pricing/UpGive'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/services/video', element: <Video /> },
  { path: '/services/web', element: <Web /> },
  { path: '/services/upgive', element: <UpGive /> },
  { path: '/work', element: <Work /> },
  { path: '/work/:slug', element: <CaseStudy /> },
  { path: '/process', element: <Process /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/pricing/video', element: <VideoPricing /> },
  { path: '/pricing/web', element: <WebPricing /> },
  { path: '/pricing/upgive', element: <UpGivePricing /> },
  { path: '/contact', element: <Contact /> },
];
