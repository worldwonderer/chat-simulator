# Phase 1 Module Split Plan

## Goal
记录聊天模拟器从单入口大文件向模块化结构演进的阶段性成果。

## Current structure
本阶段已经完成以下边界拆分：

- `components/ChatSimulator.jsx`：应用入口
- `components/chat/PhoneShell.jsx`：设备外壳与通用容器
- `components/chat/screens/*`：各 screen 自包含逻辑
- `components/chat/ui/*`：可复用 UI 子组件与轻量工具层
- `components/chat/gameData.js`：数据装配层
- `components/chat/endingPools.js`：结局池
- `components/chat/store.js`：状态层
- `components/chat/gameEngine.js`：场景推进与结局运行时

## Safety rules
- 不改剧情内容
- 不改镜像基线
- 必须重新运行：
  - `python3 scripts/check_repository.py`
  - `python3 scripts/verify_source_fidelity.py`
  - `npm run build`

## Exit criteria
- 构建通过
- source fidelity 通过
- 模块边界比单文件入口更清晰

## Verdict
本阶段已完成“入口 / 外壳 / screen / UI 子组件 / 数据 / 状态 / 运行时”拆分，screen 逻辑已落入各自文件，后续主要工作转为继续拆分 runtime 和数据组织。
