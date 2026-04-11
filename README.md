# chat-simulator-recovery-20260408

一个面向团队交接的恢复仓库，包含两条交付线：

- `mirror/`：**高保真精确镜像**，用于最低风险交付与快速恢复线上可用版本
- `recovered-app/`：**可维护源码工程**，用于后续开发、重构和长期维护

## 仓库结构

```text
.
├── docs/                    # 计划与说明文档
├── extracted/               # 从生产 bundle 抽取出的结构化资产与取证文件
├── mirror/                  # 从线上抓取的精确本地镜像
├── output/playwright/       # 截图验证证据
├── recovered-app/           # 回译后的可运行源码工程
├── scripts/                 # 启动/验证脚本
├── RECOVERY_REPORT.md       # 恢复报告
├── extract_game_data.py     # 抽取脚本（入口）
└── mirror_site.py           # 镜像脚本（入口）
```

## 快速开始

### 1. 启动精确镜像
```bash
./scripts/serve_exact_mirror.sh
# 默认 http://127.0.0.1:4173
```

### 2. 启动源码工程
```bash
cd recovered-app
npm install
npm run dev
# 或
npm run build
npm run start -- --port 4180
```

## 常用验证

```bash
# 仓库结构与关键工件检查
python3 scripts/check_repository.py

# 精确镜像高保真校验
python3 scripts/verify_fidelity.py

# 源码工程高保真校验
python3 scripts/verify_recovered_source_fidelity.py

# 源码工程构建
cd recovered-app && npm run build
```

## 当前验证结论

- exact mirror：`score=100`，关键状态 `home/name/playing/ending` 全部通过
- recovered source：`score=97`，关键状态 `home/name/playing/ending` 全部通过
- recovered-app：`npm run build` 通过

## 维护约定

1. `mirror/` 是零风险回退线，不要随意修改其内容
2. 业务迭代优先在 `recovered-app/` 进行
3. 修改结构化资产或源码前，先保留现有验证脚本作为回归基线
4. 提交前至少运行：
   - `python3 scripts/check_repository.py`
   - `cd recovered-app && npm run build`

## 新增剧本流程

后续新增剧本时，默认只改 `recovered-app/`，**不要修改 `mirror/`**。
当前首页会从 `recovered-app/data/girls.json` 中随机挑一个角色开局，所以新剧本接入后会自动进入随机池。

### 1. 新增角色入口

在 `recovered-app/data/girls.json` 中新增一个角色对象：

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
recovered-app/public/yue.png
```

### 2. 在 `scenes.json` 里补完整剧情树

在 `recovered-app/data/scenes.json` 中新增该角色的剧情节点，建议统一使用独立前缀，例如 `yue_`：

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

- `recovered-app/components/recovered/endingPools.js`
- `recovered-app/components/recovered/gameEngine.js`

否则新的剧情前缀不会被正确识别，结局会落到默认角色池。

### 4. 如果章节结构变化，再改章节文案

如果新剧本不再沿用当前 1~6 章结构，需要同步更新：

```bash
recovered-app/data/chapters.json
```

否则顶部章节标题仍然会按旧映射显示。

### 5. 新增后最少做这些验证

```bash
python3 scripts/check_repository.py
cd recovered-app && npm run build
```

然后手动跑一遍新剧本主路径，至少确认：

- 能正常进入新角色开局
- 选择分支后不会卡死
- 能走到结局页
- 头像和文案资源都正常显示

## 相关文档

- `RECOVERY_REPORT.md`
- `docs/cleanup-plan.md`
- `docs/project-roadmap.md`
- `.omx/plans/prd-chat-simulator-recovery.md`
- `.omx/plans/test-spec-chat-simulator-recovery.md`
