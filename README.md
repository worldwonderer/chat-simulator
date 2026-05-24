# chat-simulator：中文聊天剧情模拟器

一个可生产部署的互动式中文聊天剧情模拟器。前端提供接近即时通讯软件的移动端聊天体验，后端通过 Next.js 接口路由代理 DeepSeek 请求，浏览器不会直接接触 DeepSeek 密钥。

- 在线演示：<https://chat.vibecoco.ai/>
- 开源协议：MIT
- 使用模型：`deepseek-v4-flash`

## 项目截图

<table>
  <tr>
    <th>首页</th>
    <th>取名页</th>
  </tr>
  <tr>
    <td><img src="docs/screenshots/home.png" alt="首页截图" width="260"></td>
    <td><img src="docs/screenshots/name.png" alt="取名页截图" width="260"></td>
  </tr>
  <tr>
    <th>聊天玩法</th>
    <th>结局页</th>
  </tr>
  <tr>
    <td><img src="docs/screenshots/playing.png" alt="聊天玩法截图" width="260"></td>
    <td><img src="docs/screenshots/ending.png" alt="结局页截图" width="260"></td>
  </tr>
</table>

## 项目状态

- 单个 Next.js 应用，仓库根目录就是生产入口。
- 移动端聊天界面、剧情引擎、状态管理和结构化剧情数据已模块化。
- 后端 `/api/ai/chat` 封装 DeepSeek 请求，生产环境不会把密钥暴露给浏览器。
- 生成回复会注入当前角色人设、剧情节点、目标台词、最近上下文、选项历史和玩家自定义姓名，并以原剧本台词作为剧情锚点。
- 生成请求失败或超时时，会回退到原剧本台词，保证剧情流程不中断。
- 已包含网站图标、应用图标、苹果触摸图标、MIT 协议、贡献说明、安全说明和生产部署文档。
- 项目首页截图只保留压缩后的手机主体图，生成过程中的临时截图不提交，避免仓库体积失控。

## 部署方式

Vercel 项目 `chat-vibecoco-ai` 已连接 GitHub 仓库 `worldwonderer/chat-simulator`。向 `main` 分支推送代码后，会自动触发生产部署。Next.js 页面和 `app/api/*` 后端接口会在同一次 Vercel 构建中发布。

## 架构说明

```text
浏览器界面
  └─ 请求 /api/ai/chat
       └─ 服务端 DeepSeek 代理
            └─ https://api.deepseek.com/chat/completions
```

浏览器只请求本项目后端，不会拿到 `DEEPSEEK_API_KEY`。服务端代理负责来源白名单、请求体大小限制、基础限流、DeepSeek 超时控制和不缓存的 JSON 响应。

## 目录结构

```text
.
├── app/                     # Next.js 页面和 API 路由
│   └── api/ai/chat/         # DeepSeek 服务端代理
├── components/              # 聊天模拟器界面和游戏运行时
├── data/                    # 剧情、角色、章节和话术数据
├── docs/                    # 生产部署、开源说明和 README 截图
│   └── screenshots/         # 公开截图和视觉基线
├── lib/ai/                  # DeepSeek 服务端客户端
├── public/                  # 头像、图标和静态资源
├── scripts/                 # 仓库、AI 和视觉验证脚本
└── output/visual-baseline/  # 本地生成截图目录，不提交
```

## 本地启动

```bash
npm install
cp .env.example .env.local
# 在 .env.local 中填写 DEEPSEEK_API_KEY
npm run dev
```

生产构建：

```bash
npm run build
npm run start -- --port 4180
```

## 环境变量

```bash
DEEPSEEK_API_KEY=your DeepSeek API key
DEEPSEEK_MODEL=deepseek-v4-flash
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_TIMEOUT_MS=8000
APP_PUBLIC_URL=https://chat.vibecoco.ai
AI_ALLOWED_ORIGINS=https://chat.vibecoco.ai
AI_MAX_REQUEST_BODY_BYTES=16384
AI_RATE_LIMIT_WINDOW_MS=60000
AI_RATE_LIMIT_MAX_REQUESTS=30
```

`DEEPSEEK_API_KEY` 只能作为服务端变量使用。不要添加 `NEXT_PUBLIC_*` 前缀，也不要提交到版本库。

## 验证命令

```bash
# 完整本地验证
npm run verify

# 单项检查
python3 scripts/check_repository.py
npm run verify:ai
npm run build
python3 scripts/verify_visual_baseline.py
npm audit --omit=dev
```

`verify:ai` 使用模拟 DeepSeek 请求验证生产关键路径：接口地址、模型名称、鉴权来源、关闭思考模式、来源白名单、请求体大小限制、玩家自定义姓名上下文和健康检查接口。

## 仓库体积约定

为了让仓库保持轻量：

- 不提交 `node_modules/`、`.next/`、`.env*`、日志或临时下载文件。
- 不提交 `output/visual-baseline/current-*.png`。
- 项目首页文档只引用 `docs/screenshots/` 中压缩后的截图。
- 新增图片资源前先压缩。
- 不提交设计源文件或临时大截图。

## 新增剧本

新增剧本时，通常需要更新这些文件：

- `data/girls.json`
- `data/scenes.json`
- `data/chapters.json`，仅章节结构变化时需要
- `public/` 下的角色图片

首页会从 `data/girls.json` 中随机选择角色，所以接好 `firstScene` 后，新角色会自动进入随机池。

### 1. 添加角色

在 `data/girls.json` 中添加角色对象：

```json
"yue": {
  "id": "yue",
  "name": "岳宁",
  "avatar": "/yue.png",
  "tags": ["段位：三星", "新剧本标签1", "新剧本标签2"],
  "description": "一句简介",
  "firstScene": "yue_scene_01"
}
```

头像文件放在：

```bash
public/yue.png
```

### 2. 添加剧情树

在 `data/scenes.json` 中添加剧情节点。建议使用独立前缀，例如 `yue_`：

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

剧情推进有两种方式：

- `choices[].nextScene`：玩家选择后跳转。
- `autoNext`：当前节点结束后自动跳转。

### 3. 优先使用显式结局数据

最稳定的做法是在结局节点中直接放置 `endingData`，这样不需要改 JavaScript：

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

如果省略 `endingData`，并且想复用随机结局池，需要同时更新：

- `components/chat/endingPools.js`
- `components/chat/gameEngine.js`

否则，新剧本前缀不会映射到预期的结局池。

## 相关文档

- [`docs/production.md`](docs/production.md)：生产部署、安全边界和环境变量
- [`docs/open-source.md`](docs/open-source.md)：开源范围和发布说明
- [`CONTRIBUTING.md`](CONTRIBUTING.md)：贡献说明
- [`SECURITY.md`](SECURITY.md)：安全策略
- [`LICENSE`](LICENSE)：MIT 协议
