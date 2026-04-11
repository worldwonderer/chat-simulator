import { chaptersByNumber } from '../gameData';
import { cn } from './cn';

export default function GameStatusBar({ affection, anxiety, chapter }) {
  const chapterLabel = chaptersByNumber[chapter] ?? '进行中';

  return (
    <div className="shrink-0 bg-[#111] px-4 py-[7px] flex items-center gap-3 border-b border-white/10">
      <span className="text-[10px] text-white/45 whitespace-nowrap shrink-0 leading-none">{chapterLabel}</span>
      <div className="w-px h-3 bg-white/15 shrink-0" />

      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        <span className="text-[10px] text-[#ff7b8a] shrink-0 leading-none">好感</span>
        <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-[#ff7b8a] transition-all duration-700" style={{ width: `${Math.max(2, affection)}%` }} />
        </div>
        <span className="text-[10px] text-white/35 tabular-nums w-5 text-right leading-none shrink-0">{affection}</span>
      </div>

      <div className="w-px h-3 bg-white/15 shrink-0" />

      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        <span className="text-[10px] text-[#ffb347] shrink-0 leading-none">焦虑</span>
        <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className={cn('h-full rounded-full transition-all duration-700', anxiety >= 70 ? 'bg-[#ff4444]' : 'bg-[#ffb347]')}
            style={{ width: `${Math.max(2, anxiety)}%` }}
          />
        </div>
        <span className="text-[10px] text-white/35 tabular-nums w-5 text-right leading-none shrink-0">{anxiety}</span>
      </div>
    </div>
  );
}
