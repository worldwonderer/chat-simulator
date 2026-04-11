# Recovery Report

> 历史说明：本文件保留 2026-04 恢复阶段的背景与结论，当前正式开发入口已经归一到仓库根目录应用。

## Historical recovery outputs
- `mirror/`：恢复期精确镜像基线
- `extracted/`：从生产 bundle 抽取的结构化资产
- `output/playwright/`：镜像与源码对照截图证据

## Current active source paths
- `app/`：Next.js 路由入口
- `components/ChatSimulator.jsx`：主应用入口组件
- `components/chat/screens/*`：正式 screen 逻辑入口
- `data/`：角色、剧情、章节、话术数据
- `public/`：正式静态资源

## Recovery conclusions retained for reference
- 原站点技术栈：Next.js App Router + React + Turbopack
- 无 source map，恢复目标是“可维护等效工程”，不是逐文件原仓复刻
- `mirror/` 仍可作为视觉和行为回退基线

## Verification evidence
- 镜像校验脚本：`scripts/verify_fidelity.py`
- 正式应用校验脚本：`scripts/verify_source_fidelity.py`
- 结构检查脚本：`scripts/check_repository.py`

## Latest known status
- exact mirror：`score=100, verdict=pass`
- source app：`score=97, verdict=pass`
- root app：`npm run build` 通过

## Historical notes
恢复期曾使用单独的恢复工程壳来承载源码回译结果；这些内容现已归并进根目录应用，后续开发不再以恢复目录作为主入口。
