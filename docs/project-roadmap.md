# Project Roadmap

## Goal
把当前项目从“恢复完成”推进到“长期可维护、可安全迭代、可平滑交接”的产品工程。

## Current posture
项目现在采用一主一辅两条线：

1. **根目录应用 — 主开发线**
   - 日常开发入口：`app/`、`components/`、`data/`、`public/`
   - 所有新功能、重构、测试与工程化工作都在这里完成

2. **`mirror/` — 基线对照线**
   - 用于视觉验收、回归对照、紧急回退
   - 不作为日常功能开发目录

## Phase 0 — Normalize the project structure
**Goal**
完成从恢复期目录结构到标准单项目结构的收口。

**Success criteria**
- 根目录是唯一正式应用入口
- README、CI、验证脚本都基于根目录工作流
- 业务主路径不再依赖恢复期目录壳

## Phase 1 — Make the source app maintainable
**Goal**
继续把聊天模拟器源码从“可运行”推进到“可读、可测、可改”。

**Target architecture**
```text
.
├── app/
├── components/
│   ├── ChatSimulator.jsx
│   └── chat/
│       ├── PhoneShell.jsx
│       ├── screens/
│       ├── gameData.js
│       ├── gameEngine.js
│       ├── endingPools.js
│       └── store.js
├── data/
└── public/
```

**Success criteria**
- 模块边界清晰
- 数据、状态、运行时、视图职责分明
- `npm run build` 与视觉校验持续通过

## Phase 2 — Build a safe regression system
**Goal**
把“能跑”升级为“能长期改”。

**Action items**
- 增加最小 E2E 主路径验证
- 把结构检查、构建检查和 fidelity 校验接入 CI
- 增加剧情图完整性检查（首场景、跳转链、资源引用）

**Success criteria**
- PR 能自动发现结构/构建/视觉退化
- 修改剧情数据后能快速发现断链或资源缺失

## Phase 3 — Own the assets
**Goal**
逐步减少对恢复期镜像资产的依赖。

**Action items**
- 盘点 `public/mirror-static/` 中哪些资源应保留、替换或重建
- 为关键图片、字体、静态资源建立来源记录
- 逐步把可替换资源收口为项目自有资产

## Phase 4 — Product iteration mode
**Goal**
进入正常内容和功能迭代。

**Candidate directions**
- 增加剧情包和角色包配置机制
- 增加剧情数据编辑流程
- 增加埋点与分支完成率统计
- 增加内容审校与风险提示机制

## Decision rules
- **开发优先级**：默认修改根目录应用
- **对照基线**：需要视觉或行为对照时使用 `mirror/`
- **回退策略**：核心路径变更必须保留与 `mirror/` 的可比对能力

## Immediate next 3 tasks
1. 继续拆分 `gameEngine.js` 与 `endingPools.js`
2. 增加最小 E2E 与 PR 校验入口
3. 设计更适合运营的剧情配置/编辑流程
