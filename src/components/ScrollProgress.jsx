import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrolled = scrollTop / (scrollHeight - clientHeight);
      setProgress(scrolled * 100);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-brand-yellow/30 z-50" aria-hidden="true">
      <div className="h-full bg-brand-yellow" style={{ width: `${progress}%` }} />
    </div>
  );
}
