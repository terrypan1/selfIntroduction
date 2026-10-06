// 各專案的關鍵工程判斷，來源為 104「專案成就」。
import type { Localized } from './types'

export const decisions: { project: string; text: Localized }[] = [
  {
    "project": "agv",
    "text": {
      "zh": "多車交通管制用區域鎖加狀態機分段放行，安全性不依賴車商系統是否內建避讓。",
      "en": "Zone locks with staged release, so traffic safety never depends on the vendor's avoidance logic."
    }
  },
  {
    "project": "agv",
    "text": {
      "zh": "派工流程定義存在資料庫，新增流程不用改程式、不用重新部署。",
      "en": "Dispatch flows live in the database; adding one needs no code change or redeploy."
    }
  },
  {
    "project": "pcba",
    "text": {
      "zh": "選可離線微調的 PP-OCRv5，每個定位結果都能追溯到辨識框和信心分數。",
      "en": "Fine-tunable offline OCR so every location traces back to a box and a score."
    }
  },
  {
    "project": "coa",
    "text": {
      "zh": "供應商 COA 上的「自判合格」不算數，有實測數據才自動判定。",
      "en": "A supplier's own pass mark never counts; only measured values are judged automatically."
    }
  },
  {
    "project": "ems",
    "text": {
      "zh": "「Ping 得到、通訊燈亮」不算完成，必須從 EMS 網路讀到正確數值。",
      "en": "A ping and a link light are not done; the EMS must read the right value."
    }
  },
  {
    "project": "ems",
    "text": {
      "zh": "控制器重做永遠是最後方案，既有控制能安全運轉就不為資料介面更動。",
      "en": "Replacing a controller is the last resort; working controls are not touched just for data."
    }
  }
]
