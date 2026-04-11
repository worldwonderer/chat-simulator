"use client";

import * as React from "react";
import { i, l } from "./gameData";
import { m } from "./endingPools";
import { h } from "./store";

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

export function o(sceneId) {
  return l.find((scene) => scene.id === sceneId);
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
  const pool = m[girlId][endingType];
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

export async function g(scene, token) {
  if (token !== runToken) return;

  h.setState({
    currentSceneId: scene.id,
    chapter: scene.chapter,
    timeLabel: scene.timeLabel ?? "",
    showChoices: false,
    currentChoices: [],
    lastChoiceBadge: null,
  });

  const messages = scene.messages ?? [];
  if (messages.length === 0) {
    if (scene.autoNext) {
      await delay(800);
      if (token !== runToken) return;
      const nextScene = o(scene.autoNext);
      if (nextScene) await g(nextScene, token);
    }
    return;
  }

  for (const rawMessage of messages) {
    if (token !== runToken) return;

    const { playerName } = h.getState();
    const content = rawMessage.content ? rawMessage.content.replace(/\{name\}/g, playerName ?? "你") : "";

    if (rawMessage.type === "silent") {
      await delay(rawMessage.delay ?? 500);
      continue;
    }

    if (rawMessage.sender === "her" && rawMessage.type !== "read") {
      let textLength = content.replace(/\[TIME\]/g, "").length;
      if (content.includes("[图片") || rawMessage.image) textLength = 5;
      const typingDelay = rawMessage.delay ?? Math.min(4500, Math.max(1200, 120 * textLength + 400));
      h.setState({ isTyping: true });
      await delay(typingDelay);
      if (token !== runToken) return;
      h.setState({ isTyping: false });
    } else if (rawMessage.sender === "system") {
      await delay(rawMessage.delay ?? 800);
    } else {
      await delay(rawMessage.delay ?? 600);
    }

    if (token !== runToken) return;

    h.setState((state) => ({
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
    h.setState({
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
    h.setState({ showChoices: true, currentChoices: scene.choices });
    return;
  }

  if (scene.autoNext) {
    await delay(900);
    if (token !== runToken) return;
    const nextScene = o(scene.autoNext);
    if (nextScene) await g(nextScene, token);
  }
}

export function u() {
  return {
    startGame: React.useCallback(() => {
      const token = (runToken += 1);
      const { currentGirlId } = h.getState();
      const firstSceneId = i[currentGirlId]?.firstScene ?? "scene_01";

      h.setState({
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
        const nextScene = o(firstSceneId);
        if (nextScene) g(nextScene, token);
      }, 80);
    }, []),
    selectChoice: React.useCallback((choice) => {
      const token = (runToken += 1);
      const { playerName } = h.getState();
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

      h.setState((state) => ({
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
          },
        ],
        visibleMessages: [...state.visibleMessages, ...renderedMessages],
      }));

      setTimeout(() => {
        const nextScene = o(choice.nextScene);
        if (nextScene) g(nextScene, token);
      }, 600);
    }, []),
  };
}
