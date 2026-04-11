import { cn } from './cn';

export default function EndingMetricCard({ label, value, unit, color }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-3 flex flex-col items-center gap-1.5 shadow-sm">
      <span className="text-[11px] text-muted-foreground font-medium">{label}</span>
      <div className="flex items-baseline gap-0.5">
        <span className={cn('text-2xl font-black font-mono tracking-tight', color)}>{value}</span>
        <span className="text-xs text-muted-foreground font-medium">{unit}</span>
      </div>
    </div>
  );
}
