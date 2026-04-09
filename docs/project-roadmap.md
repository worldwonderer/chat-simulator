# Project Roadmap

## Goal
把当前恢复成果从“已救回”推进到“可持续维护、可安全迭代、可平滑交接”的产品工程。

## Product strategy
项目接下来按两条线并行推进：

1. **`mirror/` — 稳态交付线**
   - 目标：保障业务连续性、用户体验与零投诉风险
   - 原则：只做保全、验证、部署和回退，不做日常功能开发
   - 用途：紧急上线、回滚、对照基线、视觉验收基准

2. **`recovered-app/` — 主开发线**
   - 目标：成为团队后续唯一长期维护的代码源
   - 原则：所有新功能、重构、测试与工程化工作都在这里完成
   - 用途：模块拆分、功能演进、CI/CD、团队协作

## Phase 0 — Stabilize the handoff (now)
**Success criteria**
- 精确镜像与源码工程均有清晰定位
- 新人能在 30 分钟内拉仓、跑校验、启动项目
- 仓库规范、验证命令、文档入口齐全

**Action items**
- 保持 `mirror/` 作为生产回退线
- 保持 `recovered-app/` 作为主开发线
- 固化现有 4 个关键视觉状态：`home/name/playing/ending`
- 补齐协作材料：README、cleanup plan、CI、Issue/PR 模板（待补）

## Phase 1 — Make the recovered source maintainable
**Goal**
把 `RecoveredChatSimulator.jsx` 从单文件回译代码整理成团队可读、可测、可改的模块结构。

**Target architecture**
```text
recovered-app/
├── app/
├── components/
│   ├── Intro/
│   ├── Playing/
│   ├── Ending/
│   ├── Message/
│   ├── ChoicePanel/
│   └── Chrome/
├── lib/
│   ├── store/
│   ├── scene-engine/
│   ├── ending-engine/
│   └── image-shim/
├── data/
│   ├── girls.json
│   ├── chapters.json
│   ├── tactics.json
│   └── scenes.json
└── public/
```

**Success criteria**
- 主逻辑不再集中在一个超大文件里
- scene 推进、结局选择、UI 展示分层明确
- 重构后 `npm run build` 与截图校验仍通过

## Phase 2 — Build a safe regression system
**Goal**
把“截图比对 + 构建通过”升级为日常开发可依赖的回归系统。

**Action items**
- 补最小 E2E：从欢迎页跑到至少一个结局
- 为 `mirror/` 与 `recovered-app/` 固化视觉基线
- 把 `scripts/verify_fidelity.py` 和 `scripts/verify_recovered_source_fidelity.py` 接入 CI
- 增加结构化校验：scene 可达性、角色资源完整性、结局数量稳定性

**Success criteria**
- PR 能自动发现视觉退化或构建回归
- 团队修改剧情数据后可快速验证没有破坏主路径

## Phase 3 — Reduce dependency on recovered artifacts
**Goal**
逐步减少对“直接复制线上产物”的依赖，让项目回到标准产品工程状态。

**Action items**
- 盘点 `public/mirror-static/` 中哪些资源需要保留、替换或重建
- 逐步把样式和资源来源从镜像资产转成项目自有资产
- 为关键图片、字体、静态资源建立来源记录

**Success criteria**
- 团队明确哪些资源是临时恢复资产，哪些是正式产品资产
- 未来可以在不依赖 `mirror/` 的情况下独立发布 `recovered-app/`

## Phase 4 — Product iteration mode
**Goal**
进入正常产品迭代：新剧情、新分支、风控提示、运营能力。

**Candidate directions**
- 增加剧情包和角色包的可配置机制
- 加入剧情数据编辑流程（JSON/表格到场景数据）
- 增加用户行为埋点与分支完成率统计
- 增加内容审校与风险提示机制

## Decision rules
- **上线优先级**：默认优先 `mirror/`，除非 `recovered-app/` 的目标页面和流程验证达到同等或更高可信度
- **开发优先级**：默认优先 `recovered-app/`
- **回退策略**：任何影响核心路径的改动都必须保留回退到 `mirror/` 的能力

## Immediate next 3 tasks
1. 拆分 `RecoveredChatSimulator.jsx` 的状态机与视图组件
2. 为 `recovered-app/` 增加最小 E2E 与 PR 校验入口
3. 补 GitHub 协作规范：PR 模板、Issue 模板、branch protection、collaborators

## Risks
- 回译源码虽然可运行，但仍带有从 bundle 逆向得到的结构噪音
- 视觉高度相似不代表内部结构已经适合长期多人维护
- 若直接在 `mirror/` 上继续演进，会重新制造技术债
