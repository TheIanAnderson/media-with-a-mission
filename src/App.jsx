import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { syncCases } from './lib/supabase';
import { routes } from './router';

export default function App() {
  useEffect(() => {
    syncCases();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main className="pt-16">
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
