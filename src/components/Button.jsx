import clsx from 'clsx';

export default function Button({ as = 'button', variant = 'primary', className = '', ...props }) {
  const Comp = as;
  const variants = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    ghost: 'btn btn-ghost',
  };
  return <Comp className={clsx(variants[variant] || variants.primary, className)} {...props} />;
}
