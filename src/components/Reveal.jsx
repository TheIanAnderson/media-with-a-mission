import clsx from 'clsx';
import useInView from '../hooks/useInView';

export default function Reveal({ as = 'div', children, className = '' }) {
  const Comp = as;
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <Comp ref={ref} className={clsx('reveal', inView && 'in', className)}>
      {children}
    </Comp>
  );
}
