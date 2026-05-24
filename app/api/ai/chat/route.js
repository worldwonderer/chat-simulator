import { DEEPSEEK_MODEL, createDeepSeekChatCompletion } from "../../../../lib/ai/deepseek.js";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const PRODUCTION_ORIGIN = "https://chat.vibecoco.ai";
const DEVELOPMENT_ALLOWED_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000"];

function getDefaultAllowedOrigins() {
  return process.env.NODE_ENV === "production" ? [PRODUCTION_ORIGIN] : [PRODUCTION_ORIGIN, ...DEVELOPMENT_ALLOWED_ORIGINS];
}

function readPositiveNumberEnv(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

const MAX_REQUEST_BODY_BYTES = readPositiveNumberEnv("AI_MAX_REQUEST_BODY_BYTES", 16 * 1024);
const RATE_LIMIT_WINDOW_MS = readPositiveNumberEnv("AI_RATE_LIMIT_WINDOW_MS", 60 * 1000);
const RATE_LIMIT_MAX_REQUESTS = readPositiveNumberEnv("AI_RATE_LIMIT_MAX_REQUESTS", 30);

const rateLimitBuckets = globalThis.__chatSimulatorAiRateLimitBuckets ?? new Map();
globalThis.__chatSimulatorAiRateLimitBuckets = rateLimitBuckets;

function corsHeadersFor(request) {
  const origin = request.headers.get("origin");
  if (!origin || !isOriginAllowed(request)) return {};

  return {
    "Access-Control-Allow-Origin": origin,
    Vary: "Origin",
  };
}

function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...init.headers,
    },
  });
}

function jsonForRequest(request, data, init = {}) {
  return json(data, {
    ...init,
    headers: {
      ...corsHeadersFor(request),
      ...init.headers,
    },
  });
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function createHttpError(status, code) {
  const error = new Error(code);
  error.status = status;
  error.code = code;
  return error;
}

function getAllowedOrigins() {
  const configuredOrigins = [process.env.APP_PUBLIC_URL, process.env.AI_ALLOWED_ORIGINS, process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""]
    .filter(Boolean)
    .flatMap((value) => String(value).split(","))
    .map((value) => value.trim().replace(/\/+$/, ""))
    .filter(Boolean);

  return new Set([...getDefaultAllowedOrigins(), ...configuredOrigins]);
}

function isOriginAllowed(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return getAllowedOrigins().has(origin.replace(/\/+$/, ""));
}

function getClientIdentifier(request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "anonymous";
}

function pruneExpiredBuckets(now) {
  if (rateLimitBuckets.size < 1000) return;

  for (const [clientId, bucket] of rateLimitBuckets) {
    if (bucket.expiresAt <= now) rateLimitBuckets.delete(clientId);
  }
}

function enforceRateLimit(request) {
  if (!Number.isFinite(RATE_LIMIT_MAX_REQUESTS) || RATE_LIMIT_MAX_REQUESTS <= 0) return;

  const now = Date.now();
  pruneExpiredBuckets(now);
  const clientId = getClientIdentifier(request);
  const bucket = rateLimitBuckets.get(clientId);

  if (!bucket || bucket.expiresAt <= now) {
    rateLimitBuckets.set(clientId, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return;
  }

  bucket.count += 1;
  if (bucket.count > RATE_LIMIT_MAX_REQUESTS) {
    throw createHttpError(429, "rate_limited");
  }
}

async function readJsonBody(request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_REQUEST_BODY_BYTES) {
    throw createHttpError(413, "request_too_large");
  }

  const text = await request.text();
  const actualLength = new TextEncoder().encode(text).length;
  if (actualLength > MAX_REQUEST_BODY_BYTES) {
    throw createHttpError(413, "request_too_large");
  }

  try {
    return JSON.parse(text);
  } catch {
    throw createHttpError(400, "invalid_json");
  }
}

function normalizeRequestPayload(payload) {
  if (!isPlainObject(payload)) {
    throw createHttpError(400, "invalid_request");
  }

  const targetLine = typeof payload.targetLine === "string" ? payload.targetLine.trim() : "";
  if (!targetLine) {
    throw createHttpError(400, "missing_target_line");
  }

  if (targetLine.length > 160) {
    throw createHttpError(400, "target_line_too_long");
  }

  return {
    player: isPlainObject(payload.player) ? payload.player : {},
    character: isPlainObject(payload.character) ? payload.character : {},
    scene: isPlainObject(payload.scene) ? payload.scene : {},
    targetLine,
    recentMessages: Array.isArray(payload.recentMessages) ? payload.recentMessages.slice(-8) : [],
    choiceHistory: Array.isArray(payload.choiceHistory) ? payload.choiceHistory.slice(-5) : [],
  };
}

export function OPTIONS(request) {
  if (!isOriginAllowed(request)) {
    return jsonForRequest(request, { generated: false, error: "origin_not_allowed" }, { status: 403 });
  }

  const origin = request.headers.get("origin");
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin || "https://chat.vibecoco.ai",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "600",
      "Cache-Control": "no-store",
      Vary: "Origin",
    },
  });
}

export async function POST(request) {
  if (!isOriginAllowed(request)) {
    return jsonForRequest(request, { generated: false, provider: "deepseek", model: DEEPSEEK_MODEL, error: "origin_not_allowed" }, { status: 403 });
  }

  let payload;

  try {
    enforceRateLimit(request);
    payload = normalizeRequestPayload(await readJsonBody(request));
  } catch (error) {
    return jsonForRequest(
      request,
      {
        generated: false,
        provider: "deepseek",
        model: DEEPSEEK_MODEL,
        error: error.code || "invalid_request",
      },
      { status: error.status || 400 },
    );
  }

  try {
    const result = await createDeepSeekChatCompletion(payload);
    return jsonForRequest(request, {
      generated: true,
      provider: "deepseek",
      model: result.model,
      content: result.content,
    });
  } catch (error) {
    return jsonForRequest(
      request,
      {
        generated: false,
        provider: "deepseek",
        model: DEEPSEEK_MODEL,
        error: error.code || "ai_generation_failed",
      },
      { status: error.status || 500 },
    );
  }
}
