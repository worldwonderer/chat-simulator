const DEFAULT_DEEPSEEK_BASE_URL = "https://api.deepseek.com";
const DEFAULT_DEEPSEEK_TIMEOUT_MS = 8000;

export const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";

const SYSTEM_PROMPT = [
  "你是一个中文互动式聊天剧情模拟器的 AI 对话引擎。",
  "根据传入的角色、剧情节点、玩家选择历史和目标台词，生成一条可以直接展示在聊天气泡里的女主回复。",
  "必须保留原目标台词的剧情功能、关系张力和隐含心理战术，不改变剧情走向、选项、结局判定或 UI 文案结构。",
  "只输出回复正文；不要输出解释、引号、Markdown、JSON、角色名前缀、旁白或系统提示。",
  "长度不超过原目标台词的 1.4 倍，且最多 80 个中文字符。",
  "保持虚构娱乐语境，不输出现实诈骗操作指引、露骨性内容或针对现实个人的攻击。",
].join("\n");

function getDeepSeekEndpoint() {
  const baseUrl = (process.env.DEEPSEEK_BASE_URL || DEFAULT_DEEPSEEK_BASE_URL).replace(/\/+$/, "");
  const endpoint = new URL("/chat/completions", `${baseUrl}/`);

  if (endpoint.protocol !== "https:") {
    const error = new Error("DEEPSEEK_BASE_URL must use https");
    error.status = 500;
    error.code = "invalid_deepseek_base_url";
    throw error;
  }

  return endpoint.toString();
}

function getDeepSeekTimeoutMs() {
  const value = Number(process.env.DEEPSEEK_TIMEOUT_MS || process.env.AI_TIMEOUT_MS || DEFAULT_DEEPSEEK_TIMEOUT_MS);
  return Number.isFinite(value) && value > 0 ? value : DEFAULT_DEEPSEEK_TIMEOUT_MS;
}

function requireApiKey() {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    const error = new Error("DEEPSEEK_API_KEY is not configured");
    error.status = 503;
    error.code = "missing_api_key";
    throw error;
  }
  return apiKey;
}

function clampText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function compactMessage(message) {
  return {
    sender: clampText(message?.sender, 16),
    content: clampText(message?.content, 120),
  };
}

function buildUserPrompt(context) {
  const payload = {
    player: {
      name: clampText(context.player?.name || "你", 12),
    },
    character: {
      id: clampText(context.character?.id, 32),
      name: clampText(context.character?.name, 16),
      description: clampText(context.character?.description, 220),
      tags: Array.isArray(context.character?.tags) ? context.character.tags.slice(0, 6).map((tag) => clampText(tag, 32)) : [],
    },
    scene: {
      id: clampText(context.scene?.id, 64),
      title: clampText(context.scene?.title, 48),
      chapter: context.scene?.chapter,
      timeLabel: clampText(context.scene?.timeLabel, 32),
      tactic: clampText(context.scene?.tactic, 48),
    },
    targetLine: clampText(context.targetLine, 160),
    recentMessages: Array.isArray(context.recentMessages) ? context.recentMessages.slice(-8).map(compactMessage) : [],
    choiceHistory: Array.isArray(context.choiceHistory)
      ? context.choiceHistory.slice(-5).map((choice) => ({
          badgeText: clampText(choice?.badgeText, 24),
          affectionDelta: Number(choice?.affectionDelta || 0),
          anxietyDelta: Number(choice?.anxietyDelta || 0),
        }))
      : [],
  };

  return [
    "请基于以下 JSON 生成一条女主消息。",
    "如果信息不足，就在不改变原意的前提下自然润色 targetLine。",
    JSON.stringify(payload),
  ].join("\n");
}

function normalizeGeneratedContent(value, fallbackLine) {
  let content = typeof value === "string" ? value.trim() : "";
  if (!content) return "";

  content = content
    .replace(/^```(?:json|text)?/i, "")
    .replace(/```$/i, "")
    .trim()
    .replace(/^([“”"'`]+)|([“”"'`]+)$/g, "")
    .replace(/^(她|女主|回复|消息|assistant)\s*[:：]\s*/i, "")
    .trim();

  if (!content) return "";

  const maxLength = Math.min(80, Math.max(12, Math.ceil(String(fallbackLine || "").length * 1.4)));
  return content.slice(0, maxLength);
}

export async function createDeepSeekChatCompletion(context) {
  const apiKey = requireApiKey();
  const fallbackLine = context.targetLine || "";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), getDeepSeekTimeoutMs());

  let response;

  try {
    response = await fetch(getDeepSeekEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: buildUserPrompt(context) },
        ],
        thinking: { type: "disabled" },
        temperature: 0.72,
        max_tokens: 120,
        stream: false,
      }),
      cache: "no-store",
      signal: controller.signal,
    });
  } catch (error) {
    const wrappedError = new Error(error.name === "AbortError" ? "DeepSeek request timed out" : "DeepSeek request failed");
    wrappedError.status = error.name === "AbortError" ? 504 : 502;
    wrappedError.code = error.name === "AbortError" ? "deepseek_timeout" : "deepseek_request_failed";
    throw wrappedError;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const error = new Error(`DeepSeek request failed with ${response.status}`);
    error.status = response.status >= 500 ? 502 : response.status;
    error.code = "deepseek_request_failed";
    throw error;
  }

  const data = await response.json();
  const rawContent = data?.choices?.[0]?.message?.content;
  const content = normalizeGeneratedContent(rawContent, fallbackLine);

  if (!content) {
    const error = new Error("DeepSeek returned empty content");
    error.status = 502;
    error.code = "empty_ai_content";
    throw error;
  }

  return {
    content,
    model: DEEPSEEK_MODEL,
  };
}
