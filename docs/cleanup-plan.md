# Cleanup Plan

## Goal
把恢复仓库整理成团队可接手、可审计、可持续维护的标准结构，同时不改变当前已验证的恢复结果。

## Scope
1. 增加仓库级 README 与规范元文件
2. 增加最小化自动校验脚本与 GitHub Actions 工作流
3. 清理不应纳入版本库的临时/缓存产物
4. 保持现有两条交付线不变：
   - `mirror/`：精确镜像
   - `recovered-app/`：可维护源码工程

## Non-goals
- 不重写业务逻辑
- 不改变镜像与源码工程的既有输出
- 不对视觉结果做新的功能性调整

## Safety / Regression Guard
- 保留现有验证脚本：`scripts/verify_fidelity.py`、`scripts/verify_recovered_source_fidelity.py`
- 本轮整理后重新运行：
  - `python3 scripts/check_repository.py`
  - `cd recovered-app && npm run build`

## Planned Changes
- 新增：`README.md`, `.editorconfig`, `.gitattributes`, `.github/workflows/verify.yml`, `Makefile`, `scripts/check_repository.py`
- 更新：`.gitignore`, `RECOVERY_REPORT.md`, `recovered-app/README.md`
- 删除版本控制中的临时产物：`__pycache__/`, `downloads/`, `recovered-app/tsconfig.tsbuildinfo`
