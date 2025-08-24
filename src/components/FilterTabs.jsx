import clsx from 'clsx';

export default function FilterTabs({ tabs = [], current, onChange }) {
  return (
    <div className="flex justify-center gap-2 mb-8">
      {tabs.map((t) => (
        <button
          key={t.label}
          onClick={() => onChange(t.label)}
          className={clsx(
            'btn btn-ghost flex items-center gap-1',
            current === t.label && 'underline'
          )}
        >
          {t.icon && <t.icon className="w-4 h-4" aria-hidden="true" />}
          {t.label}
        </button>
      ))}
    </div>
  );
}
