# 聊天模拟器恢复报告（进行中）

## 当前状态
已完成 Ralph planning gate，并开始第一轮落地恢复。

## 已完成
1. **上下文与计划**
   - `.omx/context/chat-simulator-recovery-20260408T140300Z.md`
   - `.omx/plans/prd-chat-simulator-recovery.md`
   - `.omx/plans/test-spec-chat-simulator-recovery.md`

2. **线上干净镜像**
   - 镜像目录：`recovery-what.arksec.net-2026-04-08/mirror/`
   - 已下载：26 个资源
   - 失败：1 个资源（`/_vercel/insights/script.js`，404，可视为非关键分析脚本）
   - 已拿到：HTML、全部首屏 chunk、CSS、6 个字体文件、8 张业务图片

3. **业务数据抽取**
   - `extracted/girls.json`：5 个角色
   - `extracted/tactics.json`：10 个 PUA 手法说明
   - `extracted/scenes.json`：336 个剧情场景
   - `extracted/chapters.json`：6 个章节标签

4. **恢复工程骨架**
   - `recovered-app/`
   - 已创建：`app/`, `components/`, `lib/`, `data/`, `public/`
   - 已放入：图片资源、结构化业务数据、欢迎页/名字页/说明页源码骨架

## 已确认技术结论
- 线上站点来自 **Next.js App Router + React + Turbopack**
- 本地保存网页中存在浏览器扩展注入内容；恢复工程中已排除
- 无 source map，因此恢复目标定义为“可维护等效工程”，不是原始 repo 逐文件复刻

## 下一步
1. 把 `scenes.json` 接入完整剧情状态机
2. 重建 playing / ending 视图
3. 补齐项目运行配置
4. 做本地运行与线上对照验证

## 当前风险
- 部分行为细节仍埋在 chunk 逻辑中，尚未全部回译到源码组件
- 项目级配置（package/tsconfig/构建脚本）仍需根据恢复工程补齐


## 高保真镜像（当前主交付）
- 主交付不再是手写近似版页面，而是 `mirror/` 目录下的**精确本地镜像**
- 启动方式：`/Users/pite/Work/recovery-what.arksec.net-2026-04-08/scripts/serve_exact_mirror.sh`
- 为避免离线本地 404 干扰，已补本地 stub：`mirror/_vercel/insights/script.js`

## 高保真验证证据
- 远端首页截图：`output/playwright/remote-home.png`
- 本地首页截图：`output/playwright/local-home.png`
- 远端名字页截图：`output/playwright/remote-name.png`
- 本地名字页截图：`output/playwright/local-name.png`
- 判定文件：`.omx/state/sessions/019d6d53-1b72-70f0-adf3-56f019717e69/ralph-progress.json`
- 自动验收脚本：`scripts/verify_fidelity.py`
- 最新结果：**score=100, verdict=pass**
  - home: bbox = null
  - name: bbox = null
  - playing: bbox = null
  - ending: bbox = null


## 源码工程验证证据
- 源码工程目录：`recovered-app/`
- 关键源码文件：`recovered-app/components/RecoveredChatSimulator.jsx`
- 构建验证：`npm run build` 通过（Next.js 16.2.2）
- 诊断验证：`tsc --noEmit` 0 errors / 0 warnings
- 源码截图验证脚本：`scripts/verify_recovered_source_fidelity.py`
- 最新结果：**score=97, verdict=pass**
  - home: mean_abs=0.016805, nonzero_ratio=0.003203
  - name: mean_abs=0.010482, nonzero_ratio=0.001526
  - playing: mean_abs=0.014244, nonzero_ratio=0.001991
  - ending: mean_abs=0.033905, nonzero_ratio=0.007000


## 项目规划文档
- 已新增：`docs/project-roadmap.md`
- 该文档将后续工作拆成稳态交付、源码治理、回归系统、资产去镜像化、产品迭代五个阶段。


## Phase 1 进展
- 已完成第二刀拆分：
  - `gameData.js` → 数据层
  - `endingPools.js` → 结局池
  - `store.js` → 状态层
  - `gameEngine.js` → 场景推进与结局运行时
- 已新增：`docs/phase1-module-split-plan.md`
- 已完成第一刀拆分：
  - `RecoveredChatSimulator.jsx` → 轻量入口
  - `recovered/RecoveredPhoneShell.jsx` → 外壳层
  - `recovered/screens/*` → 屏幕入口层
  - `recovered/RecoveredCore.jsx` → 暂存核心逻辑层
- 当前结论：行为保持不变，后续可继续把 core 拆成 `store / scene-engine / ending-engine / helpers`。


## Deployment
- Vercel project: `chat-vibecoco-ai`
- Production deployment: `https://chat-vibecoco-pk6yzzrrn-worldwonderers-projects.vercel.app`
- Custom domain: `https://chat.vibecoco.ai`
- Domain status: bound to project and returning HTTP 200 over HTTPS
- HTTP behavior: `http://chat.vibecoco.ai/` → `308` redirect to HTTPS

- Git auto deploy: connected via `vercel git connect` and verified by a fresh Git-triggered production deployment
- Latest git-driven production deployment: `https://chat-vibecoco-1prxr3516-worldwonderers-projects.vercel.app`
- Live copy check: `--BY ARKSEC.NET 🩷` no longer appears on `https://chat.vibecoco.ai/`
