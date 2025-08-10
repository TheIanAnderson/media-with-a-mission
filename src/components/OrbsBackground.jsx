import { motion as Motion, useReducedMotion } from 'framer-motion';

const orbs = [
  { size: 240, top: '10%', left: '-5%', color: 'var(--brand)', opacity: 0.15, duration: 20 },
  { size: 300, top: '60%', left: '70%', color: 'var(--info)', opacity: 0.1, duration: 30 },
  { size: 180, top: '40%', left: '30%', color: 'var(--brand)', opacity: 0.1, duration: 25 },
];

export default function OrbsBackground() {
  const reduce = useReducedMotion();
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {orbs.map((o, i) => (
        <Motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{ width: o.size, height: o.size, top: o.top, left: o.left, background: o.color, opacity: o.opacity }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{ repeat: Infinity, duration: o.duration, repeatType: 'reverse' }}
        />
      ))}
    </div>
  );
}
