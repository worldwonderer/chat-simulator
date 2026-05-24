"use client";

import * as React from "react";
import { girlsById, scenes } from "./gameData";
import { endingPools } from "./endingPools";
import { useGameStore } from "./store";
import { resolveHerMessageContent } from "./aiDialogue";

let messageCounter = 0;
let runToken = 0;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function appendMessage(message) {
  return {
    ...message,
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `smsg_${(messageCounter += 1)}_${Date.now()}`,
  };
}

export function findScene(sceneId) {
  return scenes.find((scene) => scene.id === sceneId);
}

function resolveEnding(scene) {
  if (scene.endingData) {
    return { title: scene.endingData.title, desc: scene.endingData.desc };
  }

  let girlId = "lin";
  if (scene.id.startsWith("tan_")) girlId = "tan";
  else if (scene.id.startsWith("su_")) girlId = "su";
  else if (scene.id.startsWith("shen_")) girlId = "shen";
  else if (scene.id.startsWith("chen_")) girlId = "chen";

  const endingType = scene.endingType === "good" ? "good" : "bad";
  const pool = endingPools[girlId][endingType];
  let index = 0;

  if (typeof window !== "undefined" && window.crypto) {
    const buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);
    index = buffer[0] % pool.length;
  } else {
    index = Math.floor(Math.random() * pool.length);
  }

  return pool[index];
}

export async function runScene(scene, token) {
  if (token !== runToken) return;

  useGameStore.setState((state) => ({
    currentSceneId: scene.id,
    chapter: scene.chapter,
    timeLabel: scene.timeLabel ?? state.timeLabel,
    showChoices: false,
    currentChoices: [],
    lastChoiceBadge: null,
  }));

  const messages = scene.messages ?? [];
  if (messages.length === 0) {
    if (scene.autoNext) {
      await delay(800);
      if (token !== runToken) return;
      const nextScene = findScene(scene.autoNext);
      if (nextScene) await runScene(nextScene, token);
    }
    return;
  }

  for (const rawMessage of messages) {
    if (token !== runToken) return;

    const { playerName } = useGameStore.getState();
    let content = rawMessage.content ? rawMessage.content.replace(/\{name\}/g, playerName ?? "你") : "";

    if (rawMessage.type === "silent") {
      await delay(rawMessage.delay ?? 500);
      continue;
    }

    if (rawMessage.sender === "her" && rawMessage.type !== "read") {
      let textLength = content.replace(/\[TIME\]/g, "").length;
      if (content.includes("[图片") || rawMessage.image) textLength = 5;
      const typingDelay = rawMessage.delay ?? Math.min(4500, Math.max(1200, 120 * textLength + 400));
      const state = useGameStore.getState();
      const girl = girlsById[state.currentGirlId] ?? { id: state.currentGirlId, name: state.girlName };

      useGameStore.setState({ isTyping: true });
      const aiContentPromise = resolveHerMessageContent({ rawMessage, fallbackContent: content, scene, girl, state });
      const [resolvedContent] = await Promise.all([
        Promise.race([aiContentPromise, delay(typingDelay).then(() => content)]),
        delay(typingDelay),
      ]);
      if (token !== runToken) return;
      content = resolvedContent;
      useGameStore.setState({ isTyping: false });
    } else if (rawMessage.sender === "system") {
      await delay(rawMessage.delay ?? 800);
    } else {
      await delay(rawMessage.delay ?? 600);
    }

    if (token !== runToken) return;

    useGameStore.setState((state) => ({
      visibleMessages: [
        ...state.visibleMessages,
        appendMessage({
          id: "raw",
          sender: rawMessage.sender,
          type: rawMessage.type ?? "text",
          content,
          image: rawMessage.image,
          badgeText: rawMessage.badgeText,
        }),
      ],
    }));
  }

  if (token !== runToken) return;

  if (scene.isEnding) {
    await delay(1200);
    if (token !== runToken) return;
    const ending = resolveEnding(scene);
    useGameStore.setState({
      phase: "ending",
      endingData: {
        title: ending.title,
        desc: ending.desc,
        type: scene.endingType ?? "bad",
      },
    });
    return;
  }

  if (scene.choices?.length) {
    await delay(300);
    if (token !== runToken) return;
    useGameStore.setState({ showChoices: true, currentChoices: scene.choices });
    return;
  }

  if (scene.autoNext) {
    await delay(900);
    if (token !== runToken) return;
    const nextScene = findScene(scene.autoNext);
    if (nextScene) await runScene(nextScene, token);
  }
}

export function useGameActions() {
  return {
    startGame: React.useCallback(() => {
      const token = (runToken += 1);
      const { currentGirlId } = useGameStore.getState();
      const firstSceneId = girlsById[currentGirlId]?.firstScene ?? "scene_01";

      useGameStore.setState({
        phase: "playing",
        currentSceneId: firstSceneId,
        visibleMessages: [],
        affection: 20,
        anxiety: 0,
        chapter: 1,
        timeLabel: "",
        puaAlerts: [],
        choiceHistory: [],
        showChoices: false,
        currentChoices: [],
        lastChoiceBadge: null,
        endingData: null,
        isTyping: false,
      });

      setTimeout(() => {
        const nextScene = findScene(firstSceneId);
        if (nextScene) runScene(nextScene, token);
      }, 80);
    }, []),
    selectChoice: React.useCallback((choice) => {
      const token = (runToken += 1);
      const { playerName } = useGameStore.getState();
      const renderedReply = (choice.replyText ?? choice.text)
        .replace(/\{name\}/g, playerName ?? "你")
        .replace(/^[（(][^）)]+[）)]\s*/, "")
        .replace(/\s*[（(][^）)]+[）)]$/, "")
        .trim();

      const renderedMessages = renderedReply
        ? [
            appendMessage({
              id: "raw",
              sender: "me",
              type: "text",
              content: renderedReply,
              badgeText: choice.badgeText,
            }),
          ]
        : [];

      useGameStore.setState((state) => ({
        showChoices: false,
        currentChoices: [],
        lastChoiceBadge: choice.badgeText ?? null,
        isTyping: false,
        affection: Math.max(0, Math.min(100, state.affection + (choice.affectionDelta ?? 0))),
        anxiety: Math.max(0, Math.min(100, state.anxiety + (choice.anxietyDelta ?? 0))),
        choiceHistory: [
          ...state.choiceHistory,
          {
            sceneId: state.currentSceneId,
            choiceId: choice.id,
            badgeText: choice.badgeText,
            affectionDelta: choice.affectionDelta ?? 0,
            anxietyDelta: choice.anxietyDelta ?? 0,
          },
        ],
        visibleMessages: [...state.visibleMessages, ...renderedMessages],
      }));

      setTimeout(() => {
        const nextScene = findScene(choice.nextScene);
        if (nextScene) runScene(nextScene, token);
      }, 600);
    }, []),
  };
}
