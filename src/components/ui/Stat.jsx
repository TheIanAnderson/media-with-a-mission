export default function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-brand">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}
