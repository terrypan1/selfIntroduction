// 學歷、證照、語言：來源為 104 履歷。
import type { Credentials } from './types'

export const credentials: Credentials = {
  "education": {
    "zh": "高雄科技大學 電機工程系（二技）",
    "en": "B.S. Electrical Engineering, NKUST"
  },
  "licenses": {
    "zh": [
      "乙級室內配線技術士",
      "丙級室內配線技術士",
      "丙級用電設備檢驗技術士"
    ],
    "en": [
      "Indoor Wiring Technician, Level B",
      "Indoor Wiring Technician, Level C",
      "Electrical Equipment Inspection Technician, Level C"
    ]
  },
  "languages": {
    "zh": [
      "中文",
      "台語（略懂）",
      "英文（略懂）",
      "日文（略懂）"
    ],
    "en": [
      "Mandarin",
      "Taiwanese (basic)",
      "English (basic)",
      "Japanese (basic)"
    ]
  },
  "availability": {
    "zh": "錄取後兩週",
    "en": "Two weeks after an offer"
  }
}
