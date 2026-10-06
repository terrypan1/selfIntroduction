# 潘建宇 Pan Chien-Yu｜個人作品集

Vue 3＋Vite＋Quasar＋TypeScript，技術做法參考 `D:\AGV\agv_platform\agv_mcs_web`。部署在 Vercel。

## 開發（Windows 端 Node 24、pnpm 11）

```
pnpm install
pnpm dev        # http://localhost:3010
pnpm build      # 內容檢查 → 型別檢查 → 打包到 dist/
```

## 結構

- `src/data/`：網站內容（來源為 104 履歷，中英雙語）。改內容只要改這裡
- `src/i18n/`：介面文字（繁體中文 / English）
- `src/theme/tokens.css`：設計 token（白天／晚上）
- `designs/`：設計稿，命名 `NN-路由.png`
- `docs/實作/`、`docs/回報/`：任務書與回報
- `素材/`：待使用的原始圖片
- `scripts/check-content.mjs`：build 前的內容規則檢查
