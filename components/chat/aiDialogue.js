const AI_DIALOGUE_TIMEOUT_MS = 4500;

function compactVisibleMessage(message) {
  return {
    sender: message.sender,
    content: message.content,
  };
}

function shouldGenerateAiReply(rawMessage, fallbackContent) {
  const content = fallbackContent?.trim() || "";

  return (
    rawMessage.sender === "her" &&
    rawMessage.type !== "read" &&
    rawMessage.ai !== false &&
    !rawMessage.image &&
    !content.startsWith("[图片：") &&
    Boolean(content) &&
    typeof fetch === "function"
  );
}

async function fetchAiReply(payload) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), AI_DIALOGUE_TIMEOUT_MS);

  try {
    const response = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) return "";

    const data = await response.json();
    return typeof data.content === "string" ? data.content.trim() : "";
  } catch {
    return "";
  } finally {
    clearTimeout(timeout);
  }
}

export async function resolveHerMessageContent({ rawMessage, fallbackContent, scene, girl, state }) {
  if (!shouldGenerateAiReply(rawMessage, fallbackContent)) {
    return fallbackContent;
  }

  const generatedContent = await fetchAiReply({
    player: { name: state.playerName || "你" },
    character: girl,
    scene: {
      id: scene.id,
      title: scene.title,
      chapter: scene.chapter,
      timeLabel: scene.timeLabel ?? state.timeLabel,
      tactic: scene.puaTacticUsed,
    },
    targetLine: fallbackContent,
    recentMessages: state.visibleMessages.slice(-8).map(compactVisibleMessage),
    choiceHistory: state.choiceHistory.slice(-5),
  });

  return generatedContent || fallbackContent;
}
