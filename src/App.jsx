import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { routes } from './router';
import LogoLockup from './components/LogoLockup';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollProgress />
      <LogoLockup />
      <Header />
      <main id="main" className="pt-16">
        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
