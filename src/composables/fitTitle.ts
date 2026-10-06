// 超粗大標的字級：依文字實際寬度算出 cqi，保證放得進容器（容器需設 container-type: inline-size）。
// Archivo 900、寬度軸 82 時，拉丁字約 0.6em、中文字 1em、空白約 0.28em。
function emWidth(s: string) {
  let w = 0
  for (const ch of s) w += /[\u2e80-\u9fff\uff00-\uffef]/.test(ch) ? 1 : ch === ' ' ? 0.28 : 0.6
  return w
}

/** wrap=true 時以最長的單字計算（允許在空白處換行），否則整串視為一行 */
export function fitTitle(text: string, max: number, wrap = false) {
  const parts = wrap ? text.split(' ') : [text]
  const w = Math.max(...parts.map(emWidth))
  return `min(${(96 / w).toFixed(2)}cqi, ${max}px)`
}
