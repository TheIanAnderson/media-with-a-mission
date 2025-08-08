import clsx from 'clsx';

export default function Card({ className='', ...props }) {
  return <div className={clsx('bg-card border border-border rounded-lg p-6', className)} {...props} />;
}
