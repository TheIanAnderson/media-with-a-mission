export default function TimelineStep({ step, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-brand text-brand-ink flex items-center justify-center font-bold">
          {step}
        </div>
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}
