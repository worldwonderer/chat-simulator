# chat-simulator

一个基于 Next.js 的互动式聊天剧情模拟器项目。

项目已经完成从恢复工程到标准单项目结构的收口：根目录是唯一正式应用入口；`mirror/`、`extracted/` 和恢复报告仅作为历史基线与归档材料保留。

## 当前状态

- ✅ 单项目结构已完成
- ✅ screen / UI / store / runtime 已完成模块化
- ✅ mirror fidelity 与 source fidelity 校验可持续运行
- 🔜 当前主要迭代方向：E2E 回归、剧情编辑流程、资产自主化

## 在线地址

- 生产域名：<https://chat.vibecoco.ai>
- Vercel 地址：<https://chat-vibecoco-ai.vercel.app>

## 仓库结构

```text
.
├── app/                     # Next.js 路由入口
├── components/
│   ├── ChatSimulator.jsx    # 主应用入口组件
│   └── chat/                # 聊天模拟器业务模块
├── data/                    # 正式业务数据（剧情/角色/章节/话术）
├── public/                  # 正式静态资源
├── scripts/                 # 启动/验证脚本
│   └── recovery/            # 恢复期辅助脚本（归档）
├── docs/                    # 项目文档与历史资料
│   └── recovery/            # 恢复期日志与取证记录
├── mirror/                  # 恢复期精确镜像基线
├── extracted/               # 恢复期抽取资产
└── output/playwright/       # 截图验证证据
```

## 快速开始

```bash
npm install
npm run dev
# 或
npm run build
npm run start -- --port 4180
```

## 常用验证

```bash
# 仓库结构与数据链路检查
python3 scripts/check_repository.py

# 精确镜像高保真校验
python3 scripts/verify_fidelity.py

# 正式应用高保真校验
python3 scripts/verify_source_fidelity.py

# 应用构建
npm run build
```

## 当前验证结论

- exact mirror：`score=100`，关键状态 `home/name/playing/ending` 全部通过
- source app：`score=97`，关键状态 `home/name/playing/ending` 全部通过
- root app：`npm run build` 通过

## 当前开发边界

- **日常开发目录**：`app/`、`components/`、`data/`、`public/`
- **回归基线目录**：`mirror/`
- **历史归档目录**：`extracted/`、`docs/recovery/`、`scripts/recovery/`

## 维护约定

1. `mirror/` 是回退与对照基线，不做日常功能开发
2. 日常业务迭代统一在根目录应用进行（`app/`、`components/`、`data/`、`public/`）
3. 修改结构化资产或源码前，先保留现有验证脚本作为回归基线
4. 提交前至少运行：
   - `python3 scripts/check_repository.py`
   - `npm run build`

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

最稳妥的做法是在结局场景里直接写 `endingData`，这样**不需要改 JS 逻辑**：

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

### 4. 如果章节结构变化，再改章节文案

如果新剧本不再沿用当前 1~6 章结构，需要同步更新：

```bash
data/chapters.json
```

否则顶部章节标题仍然会按旧映射显示。

### 5. 新增后最少做这些验证

```bash
python3 scripts/check_repository.py
npm run build
```

然后手动跑一遍新剧本主路径，至少确认：

- 能正常进入新角色开局
- 选择分支后不会卡死
- 能走到结局页
- 头像和文案资源都正常显示

## 相关文档

- `docs/project-roadmap.md`
- `docs/recovery-report.md`
