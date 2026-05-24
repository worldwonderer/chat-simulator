function getCurrentTimeLabel() {
  return new Date().toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function resolveStatusBarLabel(time) {
  const explicitLabel = typeof time === 'string' ? time.trim() : '';
  if (!explicitLabel) return getCurrentTimeLabel();

  return explicitLabel.match(/\d{2}:\d{2}$/)?.[0] ?? explicitLabel;
}

export default function StatusBar({ time }) {
  const label = resolveStatusBarLabel(time);

  return (
    <div className="flex items-center justify-between px-5 bg-[var(--wechat-bar)] text-white h-[28px] shrink-0">
      <span className="text-[13px] font-semibold tracking-wide tabular-nums">{label}</span>
      <div className="flex items-center gap-[5px]">
        <div className="flex items-end gap-[2px] h-[11px]">
          {[4, 6, 8, 10].map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}px`, width: '3px' }}
              className={`rounded-[1px] ${index < 3 ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
          <path d="M7 8.5a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 7 8.5z" fill="white" />
          <path d="M3.5 6.3A4.95 4.95 0 0 1 7 5c1.3 0 2.5.47 3.5 1.3" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d="M1 3.7A8.4 8.4 0 0 1 7 1.5c2.3 0 4.4.9 6 2.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5" />
        </svg>
        <div className="flex items-center gap-[1px]">
          <div className="relative w-[22px] h-[11px] rounded-[2.5px] border border-white/80 p-[1.5px]">
            <div className="w-[75%] h-full bg-white rounded-[1.5px]" />
          </div>
          <div className="w-[1.5px] h-[5px] bg-white/70 rounded-r-sm" />
        </div>
      </div>
    </div>
  );
}
