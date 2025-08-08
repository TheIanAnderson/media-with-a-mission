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

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/services/video', element: <Video /> },
  { path: '/services/web', element: <Web /> },
  { path: '/upgive', element: <UpGive /> },
  { path: '/work', element: <Work /> },
  { path: '/work/:slug', element: <CaseStudy /> },
  { path: '/process', element: <Process /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/contact', element: <Contact /> },
];
