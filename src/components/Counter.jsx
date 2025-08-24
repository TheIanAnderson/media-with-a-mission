import { useEffect, useState } from 'react';

export default function Counter({ value, durationMs = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }
    let start;
    let frame;
    function step(timestamp) {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, durationMs]);

  return <span>{count.toLocaleString()}</span>;
}
