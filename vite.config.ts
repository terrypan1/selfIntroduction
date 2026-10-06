import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// 做法同 agv_mcs_web；個人網站沒有後端，所以不需要 proxy。
// AGV 佔用 3005（正式）、3006（開發），這裡用 3010。
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({ sassVariables: fileURLToPath(new URL('./src/theme/quasar-variables.sass', import.meta.url)) }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: { port: 3010, host: '0.0.0.0' },
})
