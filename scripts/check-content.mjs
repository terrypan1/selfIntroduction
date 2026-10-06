// 內容規則檢查：build 前執行，src/ 裡出現下列字串就失敗。
// 個資類字串放在 scripts/banned.local.json（不進版控），格式 [["字串", "原因"], ...]，有這個檔才會檢查。
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const BANNED = [
  ['99.4', 'PCBA 定位成功率不強調'],
  ['692 顆', 'PCBA 定位成功率不強調'],
  ['七項', '真車驗收項數不放'],
  ['7 項', '真車驗收項數不放'],
  ['真車正式驗收', '真車驗收項數不放'],
  ['B2.1 製造瑕疵', '104 殘留的引用標記'],
  ['JIAN-YU', '英文名是 Pan Chien-Yu'],
  ['Jian-Yu', '英文名是 Pan Chien-Yu'],
  ['遠端工作', '不放可接受地點'],
  ['Open to remote', '不放可接受地點'],
]
const LOCAL = 'scripts/banned.local.json'
if (existsSync(LOCAL)) BANNED.push(...JSON.parse(readFileSync(LOCAL, 'utf8')))

const files = []
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : /\.(ts|vue|html|css)$/.test(f) && files.push(p) })
walk('src')
files.push('index.html')

const hits = []
for (const f of files) {
  const text = readFileSync(f, 'utf8')
  text.split('\n').forEach((line, i) => {
    for (const [word, why] of BANNED) if (line.includes(word)) hits.push(`${f}:${i + 1}  「${word}」 ${why}`)
  })
}
if (hits.length) {
  console.error('內容檢查失敗：\n' + hits.join('\n'))
  process.exit(1)
}
console.log(`內容檢查通過（${files.length} 個檔案）`)
