'use client';

import { useState } from 'react';
import { girlsById, tacticCatalog } from '../gameData';
import { useGameStore } from '../store';
import { useGameActions } from '../gameEngine';
import ImageShim from '../ui/ImageShim';
import { BookOpenIcon, PlayIcon, ShieldCheckIcon, TriangleAlertIcon } from '../ui/icons';

const BLOCKED_NAME_TOKENS = [
  '傻逼', '弱智', '白痴', '脑残', '爹', '妈', '爷爷', '奶奶', '霸霸', '霸',
  '畜生', '狗', '死', '操', '贱', '骚', '爸爸', '婊子', '爸', '爹爹',
];

export default function IntroView() {
  const [playerNameInput, setPlayerNameInput] = useState('');
  const [screen, setScreen] = useState('welcome');
  const setPlayerName = useGameStore((state) => state.setPlayerName);
  const initializeGirl = useGameStore((state) => state.initGirl);
  const { startGame } = useGameActions();

  const handleStart = () => {
    let nextPlayerName = playerNameInput.trim();
    const containsBlockedToken = BLOCKED_NAME_TOKENS.some((token) => nextPlayerName.includes(token));

    if (!nextPlayerName || containsBlockedToken) {
      nextPlayerName = '李雷';
    }

    setPlayerName(nextPlayerName);

    const girlIds = Object.keys(girlsById);
    const lastPlayedGirl = localStorage.getItem('LAST_PLAYED_GIRL');
    const eligibleGirls = girlIds.filter((girlId) => girlId !== lastPlayedGirl);
    const randomPool = eligibleGirls.length > 0 ? eligibleGirls : girlIds;
    const nextGirlId = randomPool[Math.floor(Math.random() * randomPool.length)];

    localStorage.setItem('LAST_PLAYED_GIRL', nextGirlId);
    initializeGirl(nextGirlId);
    startGame();
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-[var(--wechat-bg)] px-5 py-8 overflow-y-auto">
      {screen === 'welcome' && (
        <div className="w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <ImageShim src="/avatar-girl.png" alt="游戏角色" width={90} height={90} className="rounded-2xl object-cover shadow-xl ring-4 ring-white" />
              <span className="absolute -top-2 -right-2 text-white text-[16px] font-bold rounded-full px-1.5 py-0.5">❤️</span>
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground tracking-tight">聊天模拟器</h1>
              <p className="text-sm text-muted-foreground mt-1">仅供娱乐</p>
            </div>
          </div>

          <div className="w-full bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon size={16} className="text-amber-600 shrink-0" />
              <span className="text-sm font-semibold text-amber-800">游戏说明</span>
            </div>
            <p className="text-xs text-amber-700 leading-relaxed">
              本游戏<strong>剧情纯属娱乐，请勿代入剧情</strong>，所有名称和剧情都是虚构，请勿对应现实。 你将扮演纯情男大，通过选择回复消息来体验剧情。
            </p>
          </div>

          <div className="w-full grid grid-cols-3 gap-3">
            {[
              { icon: BookOpenIcon, label: '多重剧情', sub: '随机邂逅' },
              { icon: TriangleAlertIcon, label: '话术识别', sub: '熟能生巧' },
              { icon: ShieldCheckIcon, label: '多种结局', sub: '随心走向' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="bg-white rounded-2xl p-3 flex flex-col items-center gap-1 shadow-sm border border-border">
                <Icon size={20} className="text-[var(--wechat-green)]" />
                <span className="text-[11px] font-semibold text-foreground">{label}</span>
                <span className="text-[10px] text-muted-foreground">{sub}</span>
              </div>
            ))}
          </div>

          <button onClick={() => setScreen('name')} className="w-full bg-[var(--wechat-green)] text-white font-bold py-3.5 rounded-2xl text-base shadow-lg active:scale-95 transition-transform">
            开始游戏
          </button>

          <button onClick={() => setScreen('info')} className="text-xs text-muted-foreground underline-offset-2 underline">
            查看PUA手法解析
          </button>
        </div>
      )}

      {screen === 'name' && (
        <div className="w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-400">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--wechat-green)] flex items-center justify-center mx-auto mb-3 shadow-lg">
              <ImageShim src="/avatar-boy.jpg" alt="你的头像" width={64} height={64} className="rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-foreground">你叫什么名字？</h2>
            <p className="text-sm text-muted-foreground mt-1">每次开启游戏，你可能会遇到不同的女孩</p>
          </div>

          <div className="w-full">
            <input
              type="text"
              value={playerNameInput}
              onChange={(event) => setPlayerNameInput(event.target.value)}
              placeholder="输入你的名字（默认：李雷）"
              maxLength={2}
              className="w-full border-2 border-border bg-white rounded-2xl px-4 py-3.5 text-base text-center focus:border-[var(--wechat-green)] focus:outline-none transition-colors placeholder:text-muted-foreground"
              onKeyDown={(event) => event.key === 'Enter' && handleStart()}
              autoFocus
            />
            <p className="text-center text-xs text-muted-foreground mt-2">最多两个字</p>
          </div>

          <button onClick={handleStart} className="w-full bg-[var(--wechat-green)] text-white font-bold py-3.5 rounded-2xl text-base shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <PlayIcon size={18} />
            进入游戏
          </button>

          <button onClick={() => setScreen('welcome')} className="text-sm text-muted-foreground">
            返回
          </button>
        </div>
      )}

      {screen === 'info' && (
        <div className="w-full max-w-sm flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-400">
          <div className="text-center">
            <h2 className="text-lg font-bold text-foreground">PUA手法解析</h2>
            <p className="text-xs text-muted-foreground">了解这些套路，保护自己</p>
          </div>

          <div className="space-y-3">
            {tacticCatalog.map((tactic) => (
              <div key={tactic.name} className="bg-white rounded-2xl p-4 border border-border shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <TriangleAlertIcon size={13} className="text-amber-500 shrink-0" />
                  <span className="text-sm font-bold text-foreground">{tactic.desc}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">({tactic.name})</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{tactic.detail}</p>
              </div>
            ))}
          </div>

          <button onClick={() => setScreen('welcome')} className="w-full bg-[var(--wechat-green)] text-white font-bold py-3 rounded-2xl text-sm shadow active:scale-95 transition-transform">
            返回首页
          </button>
        </div>
      )}
    </div>
  );
}
