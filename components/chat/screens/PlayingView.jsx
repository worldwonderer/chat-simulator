'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useGameStore } from '../store';
import { useGameActions } from '../gameEngine';
import ChoicePanel from '../ui/ChoicePanel';
import ConversationHeader from '../ui/ConversationHeader';
import GameStatusBar from '../ui/GameStatusBar';
import MessageBubble from '../ui/MessageBubble';
import StatusBar from '../ui/StatusBar';
import TypingIndicatorBubble from '../ui/TypingIndicatorBubble';
import { ChevronDownIcon, MicIcon, PlusIcon, SmileIcon } from '../ui/icons';

export default function PlayingView() {
  const {
    visibleMessages,
    isTyping,
    showChoices,
    currentChoices,
    affection,
    anxiety,
    chapter,
    playerName,
    girlName,
    girlAvatar,
  } = useGameStore();
  const { selectChoice } = useGameActions();
  const scrollContainerRef = useRef(null);
  const bottomRef = useRef(null);
  const [showNewMessageNotice, setShowNewMessageNotice] = useState(false);
  const autoScrollEnabledRef = useRef(true);

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    autoScrollEnabledRef.current = distanceFromBottom < 80;
    setShowNewMessageNotice(distanceFromBottom > 120);
  }, []);

  useEffect(() => {
    if (autoScrollEnabledRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      setShowNewMessageNotice(false);
    } else {
      setShowNewMessageNotice(true);
    }
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    if (showChoices) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        setShowNewMessageNotice(false);
      }, 50);
    }
  }, [showChoices]);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowNewMessageNotice(false);
    autoScrollEnabledRef.current = true;
  }, []);

  const handleSelectChoice = useCallback((choice) => selectChoice(choice), [selectChoice]);

  return (
    <div className="h-full flex flex-col bg-[var(--wechat-bg)] overflow-hidden">
      <StatusBar />
      <ConversationHeader name={girlName} avatar={girlAvatar} isTyping={isTyping} />
      <GameStatusBar affection={affection} anxiety={anxiety} chapter={chapter} />

      <div ref={scrollContainerRef} onScroll={handleScroll} className="flex-1 overflow-y-auto overscroll-contain">
        {visibleMessages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            playerName={playerName || '我'}
            girlName={girlName}
            girlAvatar={girlAvatar}
          />
        ))}
        {isTyping && <TypingIndicatorBubble girlName={girlName} girlAvatar={girlAvatar} />}
        <div ref={bottomRef} className="h-4" />
      </div>

      {showNewMessageNotice && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-[130px] left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/95 border border-[#ddd] shadow-md rounded-full px-3 py-1.5 text-[12px] text-[#555] z-10 active:bg-[#f0f0f0] transition-all"
        >
          <ChevronDownIcon size={13} strokeWidth={2.5} />
          查看新消息
        </button>
      )}

      {showChoices ? (
        <div className="shrink-0 animate-slide-up">
          <ChoicePanel choices={currentChoices} onSelect={handleSelectChoice} />
        </div>
      ) : (
        <div className="shrink-0 bg-[#f5f5f5] border-t border-[#e0e0e0] px-2 py-[7px] flex items-center gap-1.5">
          <button className="p-1.5 rounded-md active:bg-black/10">
            <MicIcon size={24} className="text-[#555]" strokeWidth={1.8} />
          </button>
          <div className="flex-1 bg-white rounded-[5px] border border-[#ddd] px-3 h-[36px] flex items-center text-[13px] text-[#c0c0c0] shadow-inner">
            {isTyping ? '对方正在输入…' : '选择下方选项回复'}
          </div>
          <button className="p-1.5 rounded-md active:bg-black/10">
            <SmileIcon size={22} className="text-[#555]" strokeWidth={1.8} />
          </button>
          <button className="p-1.5 rounded-md active:bg-black/10">
            <PlusIcon size={22} className="text-[#555]" strokeWidth={1.8} />
          </button>
        </div>
      )}
    </div>
  );
}
