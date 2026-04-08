# recovered-app

这是从 `https://what.arksec.net/` 的生产构建产物中回译出的恢复工程。

## 当前状态
- 精确本地镜像：已完成并截图校验通过
- 可运行源码工程：已完成，可 `next build` 成功
- 源码高保真验证：已覆盖 4 个关键状态（首页、名字页、首个剧情页、结局页）

## 运行方式
```bash
cd ../recovered-app
npm install
npm run dev
# 或
npm run build
npm run start -- --port 4180
```

## 验证脚本
- 精确镜像验证：`../scripts/verify_fidelity.py`
- 源码高保真验证：`../scripts/verify_recovered_source_fidelity.py`

## 结构说明
- `components/RecoveredChatSimulator.jsx`：从主业务 chunk 回译出的完整前端逻辑
- `public/mirror-static/`：从线上抓取并重定位后的原始 CSS / 字体资源
- `public/*.png|jpg`：业务图片资源
- `data/*.json`：抽取出的结构化剧情/角色/手法数据

## 当前验证结果
- `npm run build`：通过
- `visual fidelity (source)`：score=97, verdict=pass
- `visual fidelity (exact mirror)`：score=100, verdict=pass（home / name / playing / ending）
