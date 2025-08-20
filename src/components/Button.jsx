import clsx from 'clsx';

export default function Button({ as = 'button', variant = 'primary', className = '', ...props }) {
  const Comp = as;
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-brand text-brand-ink hover:bg-yellow-400 focus:ring-brand',
    secondary: 'bg-surface text-text border border-border hover:bg-card focus:ring-border',
  };
  return <Comp className={clsx(base, variants[variant], className)} {...props} />;
}
