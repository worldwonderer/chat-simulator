# Phase 1 Module Split Plan

## Goal
把 `recovered-app/components/RecoveredChatSimulator.jsx` 从单一入口大文件逐步拆成职责清晰的模块，同时保持行为不变、构建不变、视觉结果不退化。

## Scope
- 第一刀：拆出入口壳层、屏幕入口层、核心逻辑承载层
- 第二刀（后续）：从核心逻辑层继续抽出 store / scene engine / ending engine / helpers

## Current slice
本次先完成：
1. `RecoveredChatSimulator.jsx` 保留为轻量入口
2. 新增 `RecoveredPhoneShell.jsx` 承载手机外壳和通用容器 UI
3. 新增 `screens/IntroView.jsx`、`screens/PlayingView.jsx`、`screens/EndingView.jsx` 作为独立屏幕入口
4. 新增 `RecoveredCore.jsx` 暂存原回译逻辑与导出的核心视图/状态

## Safety rules
- 不改剧情数据
- 不改结局逻辑
- 不改镜像基线
- 必须重新运行：
  - `python3 scripts/check_repository.py`
  - `python3 scripts/verify_recovered_source_fidelity.py`
  - `cd recovered-app && npm run build`

## Exit criteria
- 构建通过
- 源码高保真验证通过
- 模块边界比单文件入口更清晰


## Completed work
- 已拆出入口层：`RecoveredChatSimulator.jsx`
- 已拆出外壳层：`RecoveredPhoneShell.jsx`
- 已拆出屏幕层：`screens/IntroView.jsx`、`screens/PlayingView.jsx`、`screens/EndingView.jsx`
- 已拆出数据层：`gameData.js`
- 已拆出结局池：`endingPools.js`
- 已拆出状态层：`store.js`
- 已拆出运行时引擎：`gameEngine.js`

## Phase 1 verdict
Phase 1 已达到当前里程碑：主入口不再承担全部职责，数据 / 状态 / 引擎 / 屏幕已经形成独立模块边界，且构建与高保真验证仍保持通过。
