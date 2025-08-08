import clsx from 'clsx';

export default function Chip({ children, className='' }) {
  return <span className={clsx('px-2 py-0.5 rounded bg-brand text-brand-ink text-xs', className)}>{children}</span>;
}
