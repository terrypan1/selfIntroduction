import { computed } from 'vue'
import { i18n, setLocale, type Locale } from '@/i18n'
import type { Localized } from '@/data/types'

/** 語言狀態與「依目前語言取值」的 helper，資料檔每個欄位都是 { zh, en } */
export function useLocale() {
  const locale = computed(() => i18n.global.locale.value as Locale)
  const toggle = () => setLocale(locale.value === 'zh' ? 'en' : 'zh')
  const pick = <T>(v: Localized<T>): T => v[locale.value]
  return { locale, toggle, setLocale, pick }
}
