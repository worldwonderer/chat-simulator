"use client";

import { useGameStore } from "./chat/store";
import IntroView from "./chat/screens/IntroView";
import PlayingView from "./chat/screens/PlayingView";
import EndingView from "./chat/screens/EndingView";
import PhoneShell from "./chat/PhoneShell";

export default function ChatSimulator() {
  const phase = useGameStore((state) => state.phase);

  return (
    <PhoneShell>
      {phase === "intro" ? <IntroView /> : phase === "playing" ? <PlayingView /> : <EndingView />}
    </PhoneShell>
  );
}
