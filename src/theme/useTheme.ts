import { computed, ref } from 'vue'
import { Dark } from 'quasar'

export type ThemeMode = 'light' | 'dark'

const KEY = 'theme'

// 唯一的主題狀態。<html data-theme> 跟著它走，CSS token 只看 data-theme。
// 跟 agv_mcs_web 不同：這裡白天是真的淺色，所以 Quasar Dark 要跟著切換。
const mode = ref<ThemeMode>('light')

export function setTheme(m: ThemeMode, persist = true) {
  mode.value = m
  Dark.set(m === 'dark')
  document.documentElement.dataset.theme = m
  if (persist) localStorage.setItem(KEY, m)
}

export function initTheme() {
  const saved = localStorage.getItem(KEY)
  if (saved === 'light' || saved === 'dark') {
    setTheme(saved)
    return
  }
  // 沒選過就跟隨系統，而且系統切換時跟著變
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  setTheme(mq.matches ? 'dark' : 'light', false)
  mq.addEventListener('change', (e) => {
    if (!localStorage.getItem(KEY)) setTheme(e.matches ? 'dark' : 'light', false)
  })
}

export function useTheme() {
  const toggle = () => setTheme(mode.value === 'dark' ? 'light' : 'dark')
  return { mode: computed(() => mode.value), toggle, setTheme }
}
