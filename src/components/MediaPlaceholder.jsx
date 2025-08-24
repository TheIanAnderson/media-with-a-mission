import clsx from 'clsx';

export default function MediaPlaceholder({ ratio = '16/9', className = '' }) {
  return (
    <div
      className={clsx('flex items-center justify-center border border-border text-sm text-muted', className)}
      style={{ aspectRatio: ratio }}
    >
      (to be uploaded from asset folder)
    </div>
  );
}
