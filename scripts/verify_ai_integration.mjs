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

globalThis.fetch = async (url, options) => {
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

function buildRequest(body, headers = {}) {
  return new Request('http://localhost/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', origin: 'https://chat.vibecoco.ai', ...headers },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  player: { name: '李雷' },
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

if (!captured.hasSystemPrompt || !captured.hasUserPrompt) {
  throw new Error('DeepSeek request did not include system and user messages');
}

if (!captured.systemPrompt.includes('targetLine 是剧情锚点') || !captured.systemPrompt.includes('回复必须是完整句子')) {
  throw new Error('DeepSeek system prompt must require plot-anchored complete replies');
}

const userPromptJson = captured.userPrompt.split('\n').at(-1);
const userPromptPayload = JSON.parse(userPromptJson);

if (
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
    character: userPromptPayload.character.name,
    scene: userPromptPayload.scene.id,
    targetLine: userPromptPayload.targetLine,
    recentMessages: userPromptPayload.recentMessages.length,
    choiceHistory: userPromptPayload.choiceHistory.length,
  },
  health: healthData.ok,
}, null, 2));
