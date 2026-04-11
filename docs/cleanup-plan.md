# Cleanup Plan

## Goal
把当前仓库维持在正常的单项目结构：根目录就是唯一的可运行应用，业务代码和数据使用标准命名，恢复期目录壳已经退场。

## Why now
- 该仓库已经完成从恢复工程到正常项目的收口，需要保留一份面向后续维护的整理记录
- 未来新增剧情和功能时，需要明确哪些历史资产仍是基线，哪些目录才是正式开发路径

## Scope
1. 维持根目录作为唯一正式应用结构
2. 保持业务主路径不再出现恢复期命名和目录依赖
3. 保持构建、CI、README、校验脚本统一到根目录单项目模式
4. 保留 `mirror/`、`extracted/`、恢复报告等历史资产，但仅作为参考/归档材料

## Non-goals
- 不改剧情内容
- 不改核心交互流程
- 不重做 UI 视觉
- 不删除镜像与取证资产

## Target structure

```text
.
├── app/                    # 唯一 Next.js 应用入口
├── components/
│   ├── ChatSimulator.jsx
│   └── chat/
├── data/                   # 正式业务数据
├── public/                 # 正式静态资源
├── scripts/                # 校验与辅助脚本
├── mirror/                 # 恢复期精确镜像基线
├── extracted/              # 恢复期抽取资产
└── docs/                   # 文档与历史说明
```

## Planned changes
1. 结构收口
   - 根目录 `app/`、`components/`、`data/`、`public/` 为唯一正式应用路径
   - screen 逻辑落在 `components/chat/screens/*`
   - 可复用 UI 落在 `components/chat/ui/*`

2. 命名收口
   - 主动代码路径不再使用恢复期命名
   - runtime / store / data 接口使用语义化正式名字

3. 工具链收口
   - CI、Makefile、README、校验脚本全部面向根目录项目
   - 恢复期脚本迁移到 `scripts/recovery/`

4. 校验规则
   - 仓库检查验证正式应用结构与剧情跳转链
   - source fidelity 与 mirror fidelity 保持可运行

## Safety / Regression Guard
- 清理前已确认根目录 `npm run build` 可通过
- 保留现有视觉校验基线与截图证据
- 本轮改动后至少重新运行：
  - `python3 scripts/check_repository.py`
  - `python3 scripts/verify_source_fidelity.py`
  - `npm run build`

## Exit criteria
- 根目录成为唯一正式应用入口
- 主业务代码路径不再包含恢复期命名或恢复期目录依赖
- README 与 CI 均使用根目录工作流
- 构建通过，结构校验通过，source fidelity 校验通过

## Risks
- 路径重构会影响脚本、文档和 CI 的引用关系
- `gameEngine.js` 与 `endingPools.js` 仍有继续细分的空间，但已经不再阻碍日常维护
- 删除重复目录时需要确保根目录应用已经完全接管所有依赖
