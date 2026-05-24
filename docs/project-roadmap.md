# Project Roadmap

## Goal
把当前项目从“已整理完成的可运行版本”推进到“长期可维护、可安全迭代、可平滑交接”的产品工程。

## Current snapshot

- Phase 0（结构正规化）：**已完成**
- Phase 1（模块拆分）：**已完成主要收口**
- 当前主焦点：**Phase 2 回归系统** + **Phase 3 资产自主化**

## Phase 0 — Normalize the project structure
**Goal**
完成从历史导入形态到标准单项目结构的收口。

**Status**
已完成。

**Success criteria**
- 根目录是唯一正式应用入口
- README、CI、验证脚本都基于根目录工作流
- 业务主路径不再依赖历史恢复资产

## Phase 1 — Make the source app maintainable
**Goal**
继续把聊天模拟器源码从“可运行”推进到“可读、可测、可改”。

**Status**
主要边界拆分已完成；后续仅保留渐进式优化。

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

**Status**
当前优先级最高。

**Action items**
- 增加最小 E2E 主路径验证
- 把结构检查、构建检查和 visual baseline 校验接入 CI
- 增加剧情图完整性检查（首场景、跳转链、资源引用）

**Success criteria**
- PR 能自动发现结构/构建/视觉退化
- 修改剧情数据后能快速发现断链或资源缺失

## Phase 3 — Own the assets
**Goal**
逐步减少对现有导入型静态资源的依赖。

**Status**
尚未系统推进。

**Action items**
- 盘点 `public/static-assets/` 中哪些资源应保留、替换或重建
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
- **对照基线**：需要视觉对照时使用 `docs/screenshots/` 中的提交截图作为视觉基线，本地 current 截图仍生成到 `output/visual-baseline/`
- **回退策略**：核心路径变更必须保留可复验的视觉基线与结构校验

## Immediate next 3 tasks
1. 增加最小 E2E 与 PR 校验入口
2. 盘点 `public/static-assets/` 并建立资产来源记录
3. 设计更适合运营的剧情配置 / 编辑流程
