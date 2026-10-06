import { createI18n } from 'vue-i18n'
import { Lang } from 'quasar'
import langZhTw from 'quasar/lang/zh-TW'
import langEnUs from 'quasar/lang/en-US'
import zh from './zh-TW'
import en from './en'

export type Locale = 'zh' | 'en'

const KEY = 'locale'

// 語言不放在路徑裡（SPA 部署在 Vercel，不做 /en 前綴）：
// 預設中文；網址帶 ?lang=en 可以直接分享英文版；使用者的選擇存 localStorage。
function initialLocale(): Locale {
  const q = new URLSearchParams(location.search).get('lang')
  if (q === 'en' || q === 'zh') return q
  const saved = localStorage.getItem(KEY)
  return saved === 'en' ? 'en' : 'zh'
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale(),
  fallbackLocale: 'zh',
  messages: { zh, en },
})

export function setLocale(l: Locale) {
  i18n.global.locale.value = l
  localStorage.setItem(KEY, l)
  document.documentElement.lang = l === 'zh' ? 'zh-Hant-TW' : 'en'
  // Quasar 各語系包的型別宣告彼此不完全相容（formatNumber 參數），這裡統一轉成 Lang.set 的參數型別
  Lang.set((l === 'zh' ? langZhTw : langEnUs) as Parameters<typeof Lang.set>[0])
}

export function currentLocale(): Locale {
  return i18n.global.locale.value as Locale
}
