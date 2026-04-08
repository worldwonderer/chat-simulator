# chat-simulator-recovery-20260408

一个面向团队交接的恢复仓库，包含两条交付线：

- `mirror/`：**高保真精确镜像**，用于最低风险交付与快速恢复线上可用版本
- `recovered-app/`：**可维护源码工程**，用于后续开发、重构和长期维护

## 仓库结构

```text
.
├── docs/                    # 计划与说明文档
├── extracted/               # 从生产 bundle 抽取出的结构化资产与取证文件
├── mirror/                  # 从线上抓取的精确本地镜像
├── output/playwright/       # 截图验证证据
├── recovered-app/           # 回译后的可运行源码工程
├── scripts/                 # 启动/验证脚本
├── RECOVERY_REPORT.md       # 恢复报告
├── extract_game_data.py     # 抽取脚本（入口）
└── mirror_site.py           # 镜像脚本（入口）
```

## 快速开始

### 1. 启动精确镜像
```bash
./scripts/serve_exact_mirror.sh
# 默认 http://127.0.0.1:4173
```

### 2. 启动源码工程
```bash
cd recovered-app
npm install
npm run dev
# 或
npm run build
npm run start -- --port 4180
```

## 常用验证

```bash
# 仓库结构与关键工件检查
python3 scripts/check_repository.py

# 精确镜像高保真校验
python3 scripts/verify_fidelity.py

# 源码工程高保真校验
python3 scripts/verify_recovered_source_fidelity.py

# 源码工程构建
cd recovered-app && npm run build
```

## 当前验证结论

- exact mirror：`score=100`，关键状态 `home/name/playing/ending` 全部通过
- recovered source：`score=97`，关键状态 `home/name/playing/ending` 全部通过
- recovered-app：`npm run build` 通过

## 维护约定

1. `mirror/` 是零风险回退线，不要随意修改其内容
2. 业务迭代优先在 `recovered-app/` 进行
3. 修改结构化资产或源码前，先保留现有验证脚本作为回归基线
4. 提交前至少运行：
   - `python3 scripts/check_repository.py`
   - `cd recovered-app && npm run build`

## 相关文档

- `RECOVERY_REPORT.md`
- `docs/cleanup-plan.md`
- `.omx/plans/prd-chat-simulator-recovery.md`
- `.omx/plans/test-spec-chat-simulator-recovery.md`
