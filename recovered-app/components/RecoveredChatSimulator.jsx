"use client";

import * as n from "react/jsx-runtime";
import { useGameStore } from "./recovered/RecoveredCore";
import IntroView from "./recovered/screens/IntroView";
import PlayingView from "./recovered/screens/PlayingView";
import EndingView from "./recovered/screens/EndingView";
import RecoveredPhoneShell from "./recovered/RecoveredPhoneShell";

export default function RecoveredChatSimulator() {
  const phase = useGameStore((state) => state.phase);

  return n.jsx(RecoveredPhoneShell, {
    children:
      phase === "intro"
        ? n.jsx(IntroView, {})
        : phase === "playing"
          ? n.jsx(PlayingView, {})
          : n.jsx(EndingView, {}),
  });
}
