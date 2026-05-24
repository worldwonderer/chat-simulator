process.env.DEEPSEEK_API_KEY = 'test-key';
process.env.DEEPSEEK_MODEL = 'deepseek-v4-flash';
process.env.DEEPSEEK_BASE_URL = 'https://api.deepseek.com';
process.env.AI_ALLOWED_ORIGINS = 'https://chat.vibecoco.ai';
process.env.AI_RATE_LIMIT_MAX_REQUESTS = '30';

const { POST, OPTIONS } = await import('../app/api/ai/chat/route.js');
const { GET: healthCheck } = await import('../app/api/health/route.js');

const originalFetch = globalThis.fetch;
let captured;
let nextMockContent = '哈哈，没想到你还挺认真。';

const mockDeepSeekFetch = async (url, options) => {
  const body = JSON.parse(options.body);
  captured = {
    url,
    model: body.model,
    thinkingType: body.thinking?.type,
    maxTokens: body.max_tokens,
    authHeader: options.headers.Authorization,
    systemPrompt: body.messages?.[0]?.content || '',
    userPrompt: body.messages?.[1]?.content || '',
    hasSystemPrompt: body.messages?.[0]?.role === 'system',
    hasUserPrompt: body.messages?.[1]?.role === 'user',
  };

  return new Response(JSON.stringify({ choices: [{ message: { content: nextMockContent } }] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

globalThis.fetch = mockDeepSeekFetch;

function buildRequest(body, headers = {}) {
  return new Request('http://localhost/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', origin: 'https://chat.vibecoco.ai', ...headers },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  player: { name: '阿泽' },
  character: {
    id: 'lin',
    name: '林晓柔',
    description: '表面温柔单纯的学妹，实际上精通免单套路。',
    tags: ['白银捞女', '物质试探'],
  },
  scene: {
    id: 'scene_01_ans_a',
    title: '陌生的申请',
    chapter: 1,
    timeLabel: '周二 下午 14:32',
    tactic: 'Love Bombing',
  },
  targetLine: '哈哈没事，你学得太认真啦',
  recentMessages: [
    { sender: 'her', content: '同学你好' },
    { sender: 'player', content: '啊？抱歉当时看书没注意' },
  ],
  choiceHistory: [{ badgeText: '纯情', affectionDelta: 3, anxietyDelta: 0 }],
};

const okResponse = await POST(buildRequest(validPayload));
const okData = await okResponse.json();

if (okResponse.status !== 200 || okData.model !== 'deepseek-v4-flash' || okData.content !== '哈哈，没想到你还挺认真。') {
  throw new Error(`unexpected success response: ${JSON.stringify({ status: okResponse.status, okData })}`);
}

if (captured.url !== 'https://api.deepseek.com/chat/completions') {
  throw new Error(`unexpected DeepSeek endpoint: ${captured.url}`);
}

if (captured.model !== 'deepseek-v4-flash') {
  throw new Error(`unexpected DeepSeek model: ${captured.model}`);
}

if (captured.thinkingType !== 'disabled') {
  throw new Error(`DeepSeek thinking mode should be disabled for chat-bubble replies: ${captured.thinkingType}`);
}

if (captured.maxTokens !== 8192) {
  throw new Error(`DeepSeek max_tokens should leave enough room for complete replies: ${captured.maxTokens}`);
}

if (captured.authHeader !== 'Bearer test-key') {
  throw new Error('DeepSeek authorization header was not derived from DEEPSEEK_API_KEY');
}

process.env.DEEPSEEK_MODEL = '   ';
let whitespaceModelCapture;
globalThis.fetch = async (url, options) => {
  whitespaceModelCapture = JSON.parse(options.body).model;
  return new Response(JSON.stringify({ choices: [{ message: { content: '好的，我知道啦。' } }] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
const { DEEPSEEK_MODEL: fallbackModel, createDeepSeekChatCompletion: createChatCompletionWithFallbackModel } = await import(`../lib/ai/deepseek.js?whitespace-model=${Date.now()}`);
const fallbackModelResult = await createChatCompletionWithFallbackModel(validPayload);

if (fallbackModel !== 'deepseek-v4-flash' || whitespaceModelCapture !== 'deepseek-v4-flash' || fallbackModelResult.model !== 'deepseek-v4-flash') {
  throw new Error(`whitespace-only DEEPSEEK_MODEL must fall back to the default model: ${JSON.stringify({ fallbackModel, whitespaceModelCapture, resultModel: fallbackModelResult.model })}`);
}

process.env.DEEPSEEK_MODEL = 'deepseek-v4-flash';
globalThis.fetch = mockDeepSeekFetch;

process.env.DEEPSEEK_API_KEY = '   ';
const whitespaceKeyResponse = await POST(buildRequest(validPayload));
const whitespaceKeyData = await whitespaceKeyResponse.json();
const whitespaceHealthResponse = healthCheck();
const whitespaceHealthData = await whitespaceHealthResponse.json();

if (whitespaceKeyResponse.status !== 503 || whitespaceKeyData.error !== 'missing_api_key' || whitespaceHealthData.deepseekConfigured !== false) {
  throw new Error(`whitespace-only DeepSeek API keys must be treated as missing: ${JSON.stringify({ status: whitespaceKeyResponse.status, whitespaceKeyData, whitespaceHealthData })}`);
}

process.env.DEEPSEEK_API_KEY = 'test-key';

if (!captured.hasSystemPrompt || !captured.hasUserPrompt) {
  throw new Error('DeepSeek request did not include system and user messages');
}

if (!captured.systemPrompt.includes('targetLine 是剧情锚点') || !captured.systemPrompt.includes('回复必须是完整句子')) {
  throw new Error('DeepSeek system prompt must require plot-anchored complete replies');
}

const userPromptJson = captured.userPrompt.split('\n').at(-1);
const userPromptPayload = JSON.parse(userPromptJson);

if (
  userPromptPayload.player.name !== '阿泽' ||
  userPromptPayload.character.name !== '林晓柔' ||
  !userPromptPayload.character.description.includes('免单套路') ||
  userPromptPayload.scene.tactic !== 'Love Bombing' ||
  userPromptPayload.targetLine !== validPayload.targetLine ||
  userPromptPayload.recentMessages.length !== 2 ||
  userPromptPayload.choiceHistory[0].badgeText !== '纯情'
) {
  throw new Error(`DeepSeek prompt did not include persona, script anchor, recent messages, and choice history: ${captured.userPrompt}`);
}

if (okResponse.headers.get('access-control-allow-origin') !== 'https://chat.vibecoco.ai') {
  throw new Error('AI route did not echo the allowed production origin');
}

nextMockContent = '超长回复'.repeat(50);
const overlongResponse = await POST(buildRequest(validPayload));
const overlongData = await overlongResponse.json();

if (overlongResponse.status !== 502 || overlongData.error !== 'empty_ai_content') {
  throw new Error(`overlong AI content should be rejected instead of truncated: ${JSON.stringify({ status: overlongResponse.status, overlongData })}`);
}

nextMockContent = '哈哈，没想到你还挺认真。';

process.env.DEEPSEEK_BASE_URL = 'http://api.deepseek.com';
const invalidBaseUrlResponse = await POST(buildRequest(validPayload));
const invalidBaseUrlData = await invalidBaseUrlResponse.json();

if (invalidBaseUrlResponse.status !== 500 || invalidBaseUrlData.error !== 'invalid_deepseek_base_url') {
  throw new Error(`invalid DeepSeek base URL should be reported as configuration error: ${JSON.stringify({ status: invalidBaseUrlResponse.status, invalidBaseUrlData })}`);
}

process.env.DEEPSEEK_BASE_URL = 'not-a-url';
const malformedBaseUrlResponse = await POST(buildRequest(validPayload));
const malformedBaseUrlData = await malformedBaseUrlResponse.json();

if (malformedBaseUrlResponse.status !== 500 || malformedBaseUrlData.error !== 'invalid_deepseek_base_url') {
  throw new Error(`malformed DeepSeek base URL should be reported as configuration error: ${JSON.stringify({ status: malformedBaseUrlResponse.status, malformedBaseUrlData })}`);
}

process.env.DEEPSEEK_BASE_URL = 'https://proxy.example/deepseek/v1';
const pathBaseUrlResponse = await POST(buildRequest(validPayload));
const pathBaseUrlData = await pathBaseUrlResponse.json();

if (pathBaseUrlResponse.status !== 200 || captured.url !== 'https://proxy.example/deepseek/v1/chat/completions') {
  throw new Error(`DeepSeek base URL paths should be preserved for compatible proxies: ${JSON.stringify({ status: pathBaseUrlResponse.status, pathBaseUrlData, url: captured.url })}`);
}

process.env.DEEPSEEK_BASE_URL = 'https://api.deepseek.com';
process.env.DEEPSEEK_TIMEOUT_MS = '5';
globalThis.fetch = async () => new Response(new ReadableStream({
  start(controller) {
    setTimeout(() => {
      controller.enqueue(new TextEncoder().encode(JSON.stringify({ choices: [{ message: { content: '慢响应' } }] })));
      controller.close();
    }, 50);
  },
}), {
  status: 200,
  headers: { 'Content-Type': 'application/json' },
});
const slowBodyResponse = await POST(buildRequest(validPayload));
const slowBodyData = await slowBodyResponse.json();

if (slowBodyResponse.status !== 504 || slowBodyData.error !== 'deepseek_timeout') {
  throw new Error(`slow DeepSeek response bodies should be covered by DEEPSEEK_TIMEOUT_MS: ${JSON.stringify({ status: slowBodyResponse.status, slowBodyData })}`);
}

process.env.DEEPSEEK_TIMEOUT_MS = '8000';
globalThis.fetch = mockDeepSeekFetch;

const badRequest = buildRequest({ targetLine: '' });
const badResponse = await POST(badRequest);
const badData = await badResponse.json();

if (badResponse.status !== 400 || badData.error !== 'missing_target_line') {
  throw new Error(`unexpected validation response: ${JSON.stringify({ status: badResponse.status, badData })}`);
}

const blockedOriginResponse = await POST(buildRequest(validPayload, { origin: 'https://evil.example' }));
const blockedOriginData = await blockedOriginResponse.json();

if (blockedOriginResponse.status !== 403 || blockedOriginData.error !== 'origin_not_allowed') {
  throw new Error(`unexpected blocked-origin response: ${JSON.stringify({ status: blockedOriginResponse.status, blockedOriginData })}`);
}

process.env.NODE_ENV = 'production';
const { POST: productionPost, OPTIONS: productionOptions } = await import(`../app/api/ai/chat/route.js?production-cors=${Date.now()}`);
const productionLocalhostResponse = await productionPost(buildRequest(validPayload, { origin: 'http://localhost:3000' }));
const productionLocalhostData = await productionLocalhostResponse.json();

if (productionLocalhostResponse.status !== 403 || productionLocalhostData.error !== 'origin_not_allowed') {
  throw new Error(`production AI route must not allow localhost by default: ${JSON.stringify({ status: productionLocalhostResponse.status, productionLocalhostData })}`);
}

const productionLocalhostPreflight = productionOptions(new Request('http://localhost/api/ai/chat', {
  method: 'OPTIONS',
  headers: { origin: 'http://localhost:3000' },
}));
const productionLocalhostPreflightData = await productionLocalhostPreflight.json();

if (productionLocalhostPreflight.status !== 403 || productionLocalhostPreflightData.error !== 'origin_not_allowed') {
  throw new Error('production AI route preflight must not allow localhost by default');
}

process.env.NODE_ENV = '';

const oversizedRequest = new Request('http://localhost/api/ai/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', origin: 'https://chat.vibecoco.ai', 'content-length': '20000' },
  body: JSON.stringify(validPayload),
});
const oversizedResponse = await POST(oversizedRequest);
const oversizedData = await oversizedResponse.json();

if (oversizedResponse.status !== 413 || oversizedData.error !== 'request_too_large') {
  throw new Error(`unexpected oversized response: ${JSON.stringify({ status: oversizedResponse.status, oversizedData })}`);
}

process.env.AI_MAX_REQUEST_BODY_BYTES = 'not-a-number';
process.env.AI_RATE_LIMIT_WINDOW_MS = 'not-a-number';
process.env.AI_RATE_LIMIT_MAX_REQUESTS = 'not-a-number';
const { POST: postWithInvalidNumericEnv } = await import(`../app/api/ai/chat/route.js?invalid-numeric-env=${Date.now()}`);
const invalidNumericEnvResponse = await postWithInvalidNumericEnv(oversizedRequest.clone());
const invalidNumericEnvData = await invalidNumericEnvResponse.json();

if (invalidNumericEnvResponse.status !== 413 || invalidNumericEnvData.error !== 'request_too_large') {
  throw new Error(`invalid numeric AI env values should fall back to safe defaults: ${JSON.stringify({ status: invalidNumericEnvResponse.status, invalidNumericEnvData })}`);
}

process.env.AI_MAX_REQUEST_BODY_BYTES = '';
process.env.AI_RATE_LIMIT_WINDOW_MS = '';
process.env.AI_RATE_LIMIT_MAX_REQUESTS = '0';
const { POST: postWithDisabledRateLimit } = await import(`../app/api/ai/chat/route.js?disabled-rate-limit=${Date.now()}`);
let disabledRateLimitResult;
for (let requestIndex = 1; requestIndex <= 31; requestIndex += 1) {
  const response = await postWithDisabledRateLimit(buildRequest(validPayload, { 'x-forwarded-for': '203.0.113.77' }));
  disabledRateLimitResult = { requestIndex, status: response.status, data: await response.json() };
}

if (disabledRateLimitResult.status !== 200 || disabledRateLimitResult.data.content !== '哈哈，没想到你还挺认真。') {
  throw new Error(`AI_RATE_LIMIT_MAX_REQUESTS=0 should disable the in-memory rate limit: ${JSON.stringify(disabledRateLimitResult)}`);
}

process.env.AI_RATE_LIMIT_MAX_REQUESTS = '30';

const preflightResponse = OPTIONS(new Request('http://localhost/api/ai/chat', {
  method: 'OPTIONS',
  headers: { origin: 'https://chat.vibecoco.ai' },
}));

if (preflightResponse.status !== 204 || preflightResponse.headers.get('access-control-allow-origin') !== 'https://chat.vibecoco.ai') {
  throw new Error('AI route preflight did not allow the production origin');
}

const healthResponse = healthCheck();
const healthData = await healthResponse.json();

if (healthResponse.status !== 200 || healthData.ok !== true || healthData.service !== 'chat-simulator') {
  throw new Error(`unexpected health response: ${JSON.stringify({ status: healthResponse.status, healthData })}`);
}

globalThis.fetch = originalFetch;

console.log(JSON.stringify({
  status: 'PASS',
  provider: 'deepseek',
  model: okData.model,
  endpoint: captured.url,
  production_origin: okResponse.headers.get('access-control-allow-origin'),
  validation_error: badData.error,
  blocked_origin_error: blockedOriginData.error,
  oversized_error: oversizedData.error,
  overlong_error: overlongData.error,
  max_tokens: captured.maxTokens,
  prompt_context: {
    player: userPromptPayload.player.name,
    character: userPromptPayload.character.name,
    scene: userPromptPayload.scene.id,
    targetLine: userPromptPayload.targetLine,
    recentMessages: userPromptPayload.recentMessages.length,
    choiceHistory: userPromptPayload.choiceHistory.length,
  },
  health: healthData.ok,
}, null, 2));
