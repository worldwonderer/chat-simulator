# Cleanup Plan

## Goal
把当前仓库整理成一个正常的单项目结构：根目录就是唯一的可运行应用，业务代码和数据使用标准命名，不再依赖 `recovered-app/` 这层恢复期壳结构。

## Why now
- 当前根目录应用只是一个薄壳，真正代码还挂在 `recovered-app/` 下面
- 业务文件名和目录名带有大量 `Recovered*` / `recovered-*` 痕迹，不利于长期维护
- 校验脚本和文档仍按“恢复工程”假设编写，不适合后续持续新增剧情

## Scope
1. 把 `recovered-app/` 中仍在使用的源码/数据提升到仓库根目录的正式应用结构
2. 去掉业务主路径中的 `Recovered*` / `recovered-*` 命名
3. 把构建、CI、README、校验脚本统一到根目录单项目模式
4. 保留 `mirror/`、`extracted/`、恢复报告等历史资产，但降级为参考/归档材料，而不是主开发入口

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
1. 提升源码
   - 将 `recovered-app/components/*` 迁移到根目录 `components/`
   - 将 `recovered-app/data/*` 迁移到根目录 `data/`
   - 根目录 `app/` 直接引用正式组件，不再穿透到 `recovered-app/`

2. 规范命名
   - `RecoveredChatSimulator` → `ChatSimulator`
   - `RecoveredPhoneShell` → `PhoneShell`
   - 过渡型核心文件 → `screens/*` + `ui/*`
   - 其他 `recovered/*` 路径同步改为标准 `chat/*`

3. 单项目化
   - CI 改为直接安装/构建根目录项目
   - Makefile 与 README 改成根目录工作流
   - 删除 `recovered-app/` 这套重复项目壳

4. 校验脚本正常化
   - 仓库检查改为验证正式应用结构，而不是死盯恢复期目录名
   - 去掉“固定剧情数量”这种不利于后续扩展的硬编码校验
   - 把“源码高保真校验”命名调整为更通用的 source fidelity 校验

## Safety / Regression Guard
- 清理前已确认根目录 `npm run build` 可通过
- 保留现有视觉校验基线与截图证据
- 本轮改动后至少重新运行：
  - `python3 scripts/check_repository.py`
  - `python3 scripts/verify_source_fidelity.py`
  - `npm run build`

## Exit criteria
- 根目录成为唯一正式应用入口
- 主业务代码路径不再包含 `Recovered*` / `recovered-app`
- README 与 CI 均使用根目录工作流
- 构建通过，结构校验通过，source fidelity 校验通过

## Risks
- 路径重构会影响脚本、文档和 CI 的引用关系
- `gameEngine.js` 与 `endingPools.js` 仍有继续细分的空间，但已经不再阻碍日常维护
- 删除重复目录时需要确保根目录应用已经完全接管所有依赖
