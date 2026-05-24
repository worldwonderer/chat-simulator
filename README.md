# chat-simulator

一个生产可部署的 Next.js 互动式中文聊天剧情模拟器。前端保持微信聊天式 UI，后端通过 Next.js API Route 代理 DeepSeek，让浏览器永远不直接接触 DeepSeek API Key。

- Demo：<https://chat.vibecoco.ai/>
- License：MIT
- AI 模型：`deepseek-v4-flash`

## 功能状态

- ✅ 单项目 Next.js 应用，根目录是唯一正式入口
- ✅ 手机聊天 UI、剧情引擎、状态管理、结构化剧本数据已模块化
- ✅ 后端 `/api/ai/chat` 封装 DeepSeek 请求，生产环境不泄漏 key
- ✅ AI 回复参考原剧本 `targetLine`，失败/超时自动回退原文案
- ✅ favicon / app icon / Apple touch icon 已准备
- ✅ MIT License、贡献指南、安全说明、生产部署文档已准备
- ✅ 生成物和 current screenshots 不提交，降低 clone 体积

## 部署

Vercel 项目 `chat-vibecoco-ai` 已连接到 GitHub 仓库 `worldwonderer/chat-simulator`。推送到 `main` 分支会自动触发生产部署；Next.js 页面和 `app/api/*` 后端路由会在同一次 Vercel 构建中一起发布。

## 架构

```text
Browser UI
  └─ calls /api/ai/chat
       └─ server-side DeepSeek proxy
            └─ https://api.deepseek.com/chat/completions
```

浏览器只调用本项目后端，不会拿到 `DEEPSEEK_API_KEY`。服务端代理会做 origin allowlist、body size limit、rate limit、DeepSeek timeout，并统一返回 no-store JSON。

## 仓库结构

```text
.
├── app/                     # Next.js 页面与 API routes
│   └── api/ai/chat/         # DeepSeek 服务端代理
├── components/              # 聊天模拟器 UI 与游戏运行时
├── data/                    # 剧情、角色、章节、话术数据
├── docs/                    # 生产部署与开源说明
├── lib/ai/                  # DeepSeek 服务端客户端
├── public/                  # 头像、favicon、静态资源
├── scripts/                 # 仓库、AI、视觉验证脚本
└── output/visual-baseline/  # 只保留 baseline 截图；current 截图不提交
```

## 快速开始

```bash
npm install
cp .env.example .env.local
# 在 .env.local 填入 DEEPSEEK_API_KEY
npm run dev
```

生产构建：

```bash
npm run build
npm run start -- --port 4180
```

## 环境变量

```bash
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_MODEL=deepseek-v4-flash
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_TIMEOUT_MS=8000
APP_PUBLIC_URL=https://chat.vibecoco.ai
AI_ALLOWED_ORIGINS=https://chat.vibecoco.ai
AI_MAX_REQUEST_BODY_BYTES=16384
AI_RATE_LIMIT_WINDOW_MS=60000
AI_RATE_LIMIT_MAX_REQUESTS=30
```

`DEEPSEEK_API_KEY` 是服务端变量，不能使用 `NEXT_PUBLIC_*` 前缀，也不能提交到 git。

## 常用验证

```bash
# 全量本地验证
npm run verify

# 单项验证
python3 scripts/check_repository.py
npm run verify:ai
npm run build
python3 scripts/verify_visual_baseline.py
npm audit --omit=dev
```

`verify:ai` 使用 mock DeepSeek 请求验证生产关键路径：endpoint、模型、鉴权来源、thinking disabled、origin allowlist、payload size limit、health route。

## Clone 体积约定

为避免仓库越来越慢：

- 不提交 `node_modules/`、`.next/`、`.env*`、日志、临时下载
- 不提交 `output/visual-baseline/current-*.png`
- 只保留必要 baseline 截图；current 截图需要时本地生成
- 新增图片资源前先压缩，避免把设计源文件或超大截图放进 git

## 新增剧本流程

后续新增剧本时，默认改这几个位置：

- `data/girls.json`
- `data/scenes.json`
- `data/chapters.json`（如果章节结构变化）
- `public/` 下的角色图片资源

当前首页会从 `data/girls.json` 中随机挑一个角色开局，所以新剧本接入后会自动进入随机池。

### 1. 新增角色入口

在 `data/girls.json` 中新增一个角色对象：

```json
"yue": {
  "id": "yue",
  "name": "岳宁",
  "avatar": "/yue.png",
  "tags": ["段位：🌟🌟🌟", "新剧本标签1", "新剧本标签2"],
  "description": "一句简介",
  "firstScene": "yue_scene_01"
}
```

同时把头像资源放到：

```bash
public/yue.png
```

### 2. 在 `scenes.json` 里补完整剧情树

在 `data/scenes.json` 中新增该角色的剧情节点，建议统一使用独立前缀，例如 `yue_`：

```json
{
  "id": "yue_scene_01",
  "chapter": 1,
  "title": "初见",
  "timeLabel": "周三 晚上 20:10",
  "messages": [
    { "id": "s1", "sender": "system", "content": "[TIME] 周三 晚上 20:10", "delay": 400 },
    { "id": "m1", "sender": "her", "content": "你好呀" }
  ],
  "choices": [
    {
      "id": "a",
      "label": "A",
      "text": "你好",
      "replyText": "你好",
      "affectionDelta": 2,
      "anxietyDelta": 0,
      "nextScene": "yue_scene_01_ans_a",
      "badgeText": "礼貌"
    }
  ]
}
```

剧情推进依赖两种方式：

- `choices[].nextScene`：玩家选择后跳转
- `autoNext`：当前节点播完后自动跳转

### 3. 结局推荐直接写在 ending 节点里

最稳妥的做法是在结局场景里直接写 `endingData`，这样不需要改 JS 逻辑：

```json
{
  "id": "yue_ending_good_01",
  "chapter": 6,
  "messages": [
    { "id": "s1", "sender": "system", "content": "你终于看清了。" }
  ],
  "isEnding": true,
  "endingType": "good",
  "endingData": {
    "title": "清醒结局：及时止损",
    "desc": "结局描述..."
  }
}
```

如果不写 `endingData`，而是想复用随机结局池，则还需要同步修改：

- `components/chat/endingPools.js`
- `components/chat/gameEngine.js`

否则新的剧情前缀不会被正确识别，结局会落到默认角色池。

## 文档

- [`docs/production.md`](docs/production.md) — 生产部署、安全边界、环境变量
- [`docs/open-source.md`](docs/open-source.md) — 开源范围与发布说明
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — 贡献指南
- [`SECURITY.md`](SECURITY.md) — 安全策略
- [`LICENSE`](LICENSE) — MIT License
