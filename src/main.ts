import { createApp } from 'vue'
import { Quasar, Dark, Meta } from 'quasar'
import iconSet from 'quasar/icon-set/svg-mdi-v7'
import langZhTw from 'quasar/lang/zh-TW'

// 字型全部打包進來，不連外部字型服務
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource-variable/inter'
import '@fontsource/noto-sans-tc/400.css'
import '@fontsource/noto-sans-tc/500.css'
import '@fontsource/noto-sans-tc/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/600.css'
import 'quasar/src/css/index.sass'
import './theme/tokens.css'

import App from './App.vue'
import router from './router'
import { i18n, setLocale, currentLocale } from './i18n'
import { initTheme } from './theme/useTheme'

const app = createApp(App)
app.use(Quasar, { plugins: { Dark, Meta }, iconSet, lang: langZhTw })
app.use(i18n)
app.use(router)
initTheme()
setLocale(currentLocale())
app.mount('#app')
