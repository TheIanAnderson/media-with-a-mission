import clsx from 'clsx';

export default function Tab({ tabs, active, onChange }) {
  return (
    <div className="flex border-b border-border mb-6">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={clsx('px-4 py-2 -mb-px border-b-2', active === t ? 'border-brand text-brand' : 'border-transparent text-muted hover:text-text')}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
