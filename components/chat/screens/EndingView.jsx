'use client';

import { tacticCatalog } from '../gameData';
import { useGameStore } from '../store';
import { cn } from '../ui/cn';
import EndingMetricCard from '../ui/EndingMetricCard';
import ImageShim from '../ui/ImageShim';
import { BookOpenIcon, HeartIcon, HouseIcon, ShieldCheckIcon, StarIcon } from '../ui/icons';

const ENDING_THEME_BY_TYPE = {
  good: {
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-300',
    icon: ShieldCheckIcon,
    iconColor: 'text-green-600',
    badge: '🌟 清醒结局',
    badgeBg: 'bg-green-100 text-green-700',
  },
  bad: {
    bg: 'from-gray-50 to-slate-50',
    border: 'border-gray-300',
    icon: HeartIcon,
    iconColor: 'text-gray-500',
    badge: '💔 沉沦结局',
    badgeBg: 'bg-gray-200 text-gray-700',
  },
};

export default function EndingView() {
  const { endingData, affection, anxiety, choiceHistory, resetGame, girlName, girlAvatar } = useGameStore();

  if (!endingData) return null;

  const theme = ENDING_THEME_BY_TYPE[endingData.type] ?? ENDING_THEME_BY_TYPE.bad;
  const sanityScore = Math.max(0, Math.round(100 - 0.5 * affection - 0.3 * anxiety));
  const resistanceCount = choiceHistory.filter((choice) => (choice.anxietyDelta ?? 0) < 0);
  const ThemeIcon = theme.icon;

  return (
    <div className="h-full overflow-y-auto bg-[var(--wechat-bg)] px-4 py-6 flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center pt-2 pb-1">
        <ImageShim src={girlAvatar} alt={girlName} width={60} height={60} className="rounded-2xl shadow-md border-2 border-white object-cover" />
        <p className="text-xs text-muted-foreground mt-2 tracking-widest">
          与 <span className="font-bold text-foreground">{girlName}</span> 的故事结局
        </p>
      </div>

      <div className={cn('rounded-3xl border-2 p-5 bg-gradient-to-b space-y-4 shadow-sm', theme.bg, theme.border)}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
            <ThemeIcon size={24} className={theme.iconColor} />
          </div>

          <div>
            <span className={cn('text-[11px] font-bold rounded-full px-2.5 py-0.5', theme.badgeBg)}>{theme.badge}</span>
            <h2 className="text-lg font-bold text-foreground mt-1.5 text-balance leading-tight">{endingData.title}</h2>
          </div>
        </div>

        <div className="bg-white/70 rounded-2xl p-4 shadow-inner border border-white/50">
          {endingData.desc.split('\n').map((paragraph, index) => (
            <p key={index} className={cn('text-sm text-foreground leading-relaxed', paragraph === '' && 'mt-2')}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <EndingMetricCard label="最终理智值" value={`${sanityScore}`} unit="分" color="text-green-600" />
        <EndingMetricCard label="沉沦指数" value={`${affection}`} unit="%" color="text-rose-500" />
        <EndingMetricCard label="反制次数" value={`${resistanceCount.length}`} unit="次" color="text-blue-600" />
      </div>

      <div className="bg-white rounded-2xl border border-border p-4 flex flex-col items-center gap-2 shadow-sm">
        <span className="text-sm font-bold text-foreground">本次心智博弈评分</span>
        <div className="flex items-center gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              size={24}
              className={cn('transition-all', star <= Math.ceil(sanityScore / 20) ? 'text-amber-400 fill-amber-400 scale-110' : 'text-gray-200')}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-1 px-2">
          {sanityScore >= 80
            ? '意志坚定，完美拆解一切套路与陷阱！'
            : sanityScore >= 60
              ? '略有上头，但在关键时刻守住了底线与框架'
              : sanityScore >= 40
                ? '深陷推拉，情绪和节奏被对方完全拿捏'
                : '彻底沦陷，自愿成为了这段关系里的牺牲品'}
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-border p-4 space-y-3 shadow-sm">
        <div className="flex items-center gap-1.5 mb-2">
          <BookOpenIcon size={15} className="text-[var(--wechat-green)]" />
          <span className="text-sm font-bold text-foreground">本剧本核心心理战术</span>
        </div>
        <div className="space-y-3">
          {tacticCatalog.map((tactic) => (
            <div key={tactic.name} className="border-l-[3px] border-amber-300 pl-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-foreground">{tactic.desc}</span>
                <span className="text-[10px] text-muted-foreground font-mono bg-gray-100 px-1 rounded">{tactic.name}</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{tactic.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-6 pt-2">
        <button onClick={resetGame} className="w-full bg-white border border-border text-foreground font-medium py-3 rounded-2xl text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
          <HouseIcon size={15} />
          返回首页
        </button>
      </div>
    </div>
  );
}
