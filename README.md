# 個人作品集

網站：https://self-introduction-one.vercel.app

以 Vue 3、Vite、Quasar、TypeScript 製作，支援繁體中文／English 與淺色／深色主題。

## 開發

需要 Node 24、pnpm 11。

```
pnpm install
pnpm dev        # http://localhost:3010
pnpm build      # 內容檢查 → 型別檢查 → 打包到 dist/
pnpm preview    # 預覽 build 結果
```

## 結構

- `src/data/`：網站內容（中英雙語），改內容只要改這裡
- `src/i18n/`：介面文字
- `src/pages/`：各頁面
- `src/theme/`：設計 token 與淺色／深色主題
- `public/`：靜態檔案
- `designs/`：各頁設計稿
- `scripts/check-content.mjs`：build 前檢查 `src/` 有沒有不該公開的內容

## 部署

推到 `main` 後 Vercel 會自動部署，設定在 `vercel.json`。專案的 `.npmrc` 固定使用官方 npm registry，避免 lockfile 寫進鏡像站網址，導致 Vercel 安裝失敗。
