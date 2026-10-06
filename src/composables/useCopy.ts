import { ref } from 'vue'

/** 複製文字到剪貼簿，回傳是否剛複製成功（1.5 秒後恢復） */
export function useCopy() {
  const copied = ref(false)
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => (copied.value = false), 1500)
    } catch {
      window.prompt('', text)
    }
  }
  return { copied, copy }
}
