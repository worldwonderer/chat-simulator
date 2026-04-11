'use client';

import { useState } from 'react';
import { useGameStore } from '../store';
import { cn } from './cn';

const CHOICE_BADGE_COLORS = ['bg-[#07c160]', 'bg-[#1aad19]', 'bg-[#0b8a52]', 'bg-[#3fbe8c]'];

export default function ChoicePanel({ choices, onSelect, disabled = false }) {
  const { playerName } = useGameStore();
  const displayName = playerName || '你';
  const [revealedChoiceId, setRevealedChoiceId] = useState(null);

  return (
    <div className="shrink-0 bg-[#f0f0f0] border-t border-[#d9d9d9] pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-center py-[7px] border-b border-[#e5e5e5]">
        <span className="text-[11px] text-[#aaa]">{revealedChoiceId ? '判定结果揭晓...' : '选择你的回复方式'}</span>
      </div>

      <div className="flex flex-col divide-y divide-[#e5e5e5] max-h-[45vh] overflow-y-auto overscroll-contain">
        {choices.map((choice, index) => {
          const isSelected = revealedChoiceId === choice.id;
          const hasRevealedSelection = revealedChoiceId !== null;

          return (
            <button
              key={choice.id}
              disabled={disabled || hasRevealedSelection}
              onClick={() => {
                if (!disabled && !revealedChoiceId) {
                  setRevealedChoiceId(choice.id);
                  setTimeout(() => onSelect(choice), 999);
                }
              }}
              className={cn(
                'option-card w-full flex items-center justify-between px-4 py-[12px] transition-all duration-300 text-left',
                !hasRevealedSelection && 'bg-white active:bg-[#ececec]',
                hasRevealedSelection && isSelected && 'bg-[#e8f6e8]',
                hasRevealedSelection && !isSelected && 'bg-[#f9f9f9] opacity-50',
              )}
            >
              <div className="flex items-start gap-3 pr-3">
                <span
                  className={cn(
                    'shrink-0 w-[22px] h-[22px] mt-[1px] rounded-full flex items-center justify-center text-[11px] font-bold text-white transition-colors',
                    CHOICE_BADGE_COLORS[index % CHOICE_BADGE_COLORS.length],
                    hasRevealedSelection && !isSelected && 'bg-[#ccc]',
                  )}
                >
                  {choice.label}
                </span>
                <span className="text-[14px] text-[#1a1a1a] leading-snug">{choice.text.replace(/\{name\}/g, displayName)}</span>
              </div>

              {hasRevealedSelection && choice.badgeText ? (
                <span
                  className={cn(
                    'shrink-0 text-[11px] font-medium px-2 py-0.5 rounded border whitespace-nowrap animate-in fade-in zoom-in duration-300',
                    isSelected
                      ? 'text-[#07c160] bg-[#07c160]/10 border-[#07c160]/30'
                      : 'text-[#888] bg-[#f0f0f0] border-[#e0e0e0]',
                  )}
                >
                  {choice.badgeText}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
