"use client";

import * as React from "react";
import { girlsById } from "./gameData";

function createStore(initializer) {
  let state;
  const listeners = new Set();

  const setState = (updater, replace) => {
    const nextState = typeof updater === "function" ? updater(state) : updater;
    if (Object.is(nextState, state)) return;

    const previousState = state;
    const shouldReplace = replace ?? (typeof nextState !== "object" || nextState === null);
    state = shouldReplace ? nextState : Object.assign({}, state, nextState);

    listeners.forEach((listener) => listener(state, previousState));
  };

  const getState = () => state;

  const api = {
    setState,
    getState,
    getInitialState: () => initialState,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };

  const initialState = (state = initializer(setState, getState, api));
  return api;
}

function createStoreHook(initializer) {
  const store = createStore(initializer);
  const useStore = (selector = (value) => value) => {
    const slice = React.useSyncExternalStore(
      store.subscribe,
      React.useCallback(() => selector(store.getState()), [selector]),
      React.useCallback(() => selector(store.getInitialState()), [selector]),
    );
    React.useDebugValue(slice);
    return slice;
  };

  return Object.assign(useStore, store);
}

export const useGameStore = createStoreHook((setState) => ({
  phase: "intro",
  playerName: "",
  currentGirlId: "lin",
  girlName: girlsById.lin.name,
  girlAvatar: girlsById.lin.avatar,
  currentSceneId: girlsById.lin.firstScene,
  visibleMessages: [],
  affection: 20,
  anxiety: 0,
  chapter: 1,
  timeLabel: "",
  puaAlerts: [],
  choiceHistory: [],
  isTyping: false,
  showChoices: false,
  currentChoices: [],
  lastChoiceBadge: null,
  endingData: null,
  setPlayerName: (playerName) => setState({ playerName }),
  initGirl: (girlId) =>
    setState({
      currentGirlId: girlId,
      girlName: girlsById[girlId].name,
      girlAvatar: girlsById[girlId].avatar,
    }),
  resetGame: () =>
    setState({
      phase: "intro",
      playerName: "",
      visibleMessages: [],
      affection: 20,
      anxiety: 0,
      chapter: 1,
      timeLabel: "",
      puaAlerts: [],
      choiceHistory: [],
      isTyping: false,
      showChoices: false,
      currentChoices: [],
      lastChoiceBadge: null,
      endingData: null,
    }),
  setPhase: (phase) => setState({ phase }),
}));
