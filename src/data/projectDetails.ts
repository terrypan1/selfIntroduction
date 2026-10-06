// 專案案例頁的版面資料（大標、架構圖、主要功能、成果），依 designs/02-projects-agv.png、02-projects-pcba.png 的結構整理。
// 內容來源為 104 履歷；設計稿裡的客戶名稱、期間與技術不採用。
import type { Localized } from './types'

export interface DiagramBox { zh: string; en: string }
export interface ProjectDetail {
  title: Localized
  subEn: string
  sub: Localized
  type: Localized
  env: Localized
  /** 主視覺圖片 key，對應 src/assets/ */
  image: 'agv' | 'pcba' | 'about' | 'contact' | 'experience' | 'home'
  diagram: { top: DiagramBox[]; core: Localized; bottom: DiagramBox[] }
  features: Localized<string[]>
  impact: Localized<string[]>
}

export const projectDetails: Record<string, ProjectDetail> = {
  "agv": {
    "title": {
      "zh": "AGV MCS",
      "en": "AGV MCS"
    },
    "subEn": "DISPATCHING SYSTEM",
    "sub": {
      "zh": "AGV 車隊調度與車載控制系統",
      "en": "AGV fleet dispatch and on-board control"
    },
    "type": {
      "zh": "工業自動化系統",
      "en": "Industrial automation"
    },
    "env": {
      "zh": "工廠現場 · 地端部署",
      "en": "Factory floor · on-premise"
    },
    "image": "agv",
    "diagram": {
      "top": [
        {
          "zh": "工單",
          "en": "Work order"
        },
        {
          "zh": "任務",
          "en": "Task"
        },
        {
          "zh": "路線",
          "en": "Route"
        },
        {
          "zh": "執行器",
          "en": "Executor"
        }
      ],
      "core": {
        "zh": "MCS 派工引擎（ASP.NET Core）",
        "en": "MCS workflow engine (ASP.NET Core)"
      },
      "bottom": [
        {
          "zh": "PostgreSQL",
          "en": "PostgreSQL"
        },
        {
          "zh": "Modbus 設備交握",
          "en": "Modbus handshake"
        },
        {
          "zh": "RCS / AGV",
          "en": "RCS / AGV"
        },
        {
          "zh": "ROS 1 車載",
          "en": "ROS 1 on-board"
        }
      ]
    },
    "features": {
      "zh": [
        "資料驅動派工引擎",
        "工單 / 任務 / 路線三層模型",
        "多車區域交通管制",
        "地圖編輯與版本控管",
        "日誌流即時監控",
        "Modbus 設備交握",
        "Quartz 排程",
        "19 個 ROS 車載套件"
      ],
      "en": [
        "Data-driven dispatch engine",
        "Order / task / route model",
        "Multi-vehicle zone traffic control",
        "Map editor with versioning",
        "Log-stream live monitor",
        "Modbus device handshakes",
        "Quartz scheduling",
        "19 on-board ROS packages"
      ]
    },
    "impact": {
      "zh": [
        "從接手、重構到重建新一代架構，全程獨立完成",
        "新增搬運流程不需改程式或重新部署",
        "交通管制安全性不依賴車商系統的避讓",
        "rostest 與模擬 / 重播環境降低真車依賴"
      ],
      "en": [
        "Took over, refactored and rebuilt the system end to end, solo",
        "New transport flows need no code change or redeploy",
        "Traffic safety does not depend on vendor avoidance",
        "rostest with simulation and replay reduces time on real vehicles"
      ]
    }
  },
  "pcba": {
    "title": {
      "zh": "AI 瑕疵助手",
      "en": "AI REPAIR"
    },
    "subEn": "OCR INSPECTION ASSISTANT",
    "sub": {
      "zh": "PDF 圖面比對與瑕疵定位系統",
      "en": "PDF drawing matching and defect location"
    },
    "type": {
      "zh": "工業檢測輔助系統",
      "en": "Industrial inspection assistant"
    },
    "env": {
      "zh": "製造廠維修現場 · 地端部署",
      "en": "Repair floor · on-premise"
    },
    "image": "pcba",
    "diagram": {
      "top": [
        {
          "zh": "產品序號",
          "en": "Serial number"
        },
        {
          "zh": "MES 維修歷史",
          "en": "MES history"
        },
        {
          "zh": "PCB 版號",
          "en": "PCB revision"
        },
        {
          "zh": "TOP / BOT 圖面",
          "en": "TOP / BOT drawing"
        }
      ],
      "core": {
        "zh": "AI 推論服務（Python FastAPI）",
        "en": "AI inference service (Python FastAPI)"
      },
      "bottom": [
        {
          "zh": "PP-DocLayoutV2",
          "en": "PP-DocLayoutV2"
        },
        {
          "zh": "PP-OCRv5",
          "en": "PP-OCRv5"
        },
        {
          "zh": "PostgreSQL",
          "en": "PostgreSQL"
        },
        {
          "zh": "PDF.js 打框",
          "en": "PDF.js boxes"
        }
      ]
    },
    "features": {
      "zh": [
        "序號一鍵查詢機種與版號",
        "歷史高頻不良熱點",
        "文字型 PDF 直接解析",
        "圖像型 PDF 版面偵測與 OCR",
        "PDF Canvas 自動打框對焦",
        "Top-N 維修熱點推薦",
        "模型 A/B 驗證與版本回退",
        "Excel 驗證報表"
      ],
      "en": [
        "Serial → model and revision lookup",
        "Historical defect hotspots",
        "Direct parsing of text PDFs",
        "Layout detection and OCR for image PDFs",
        "Auto boxing and focus on the PDF canvas",
        "Top-N repair hotspot ranking",
        "Model A/B checks and rollback",
        "Excel validation reports"
      ]
    },
    "impact": {
      "zh": [
        "匯入 6 萬筆以上 MES 歷史資料",
        "治理 4,600 筆機種主檔",
        "以 100 組真實序號逐框人工核對",
        "結果可追溯到辨識框與信心分數"
      ],
      "en": [
        "60,000+ MES repair records imported",
        "4,600 product master records cleaned up",
        "Box-by-box review on 100 real serial numbers",
        "Every result traces back to a box and a confidence score"
      ]
    }
  },
  "coa": {
    "title": {
      "zh": "COA",
      "en": "COA"
    },
    "subEn": "INSPECTION CHECKING",
    "sub": {
      "zh": "檢驗報告自動辨識與比對系統",
      "en": "Inspection report recognition and checking"
    },
    "type": {
      "zh": "進料品質檢核平台",
      "en": "Incoming quality platform"
    },
    "env": {
      "zh": "飲料製造廠 · 交付客戶維運",
      "en": "Beverage maker · handed to client team"
    },
    "image": "about",
    "diagram": {
      "top": [
        {
          "zh": "供應商 COA",
          "en": "Supplier COA"
        },
        {
          "zh": "版面分析 / OCR",
          "en": "Layout analysis / OCR"
        },
        {
          "zh": "標準書對應",
          "en": "Spec mapping"
        },
        {
          "zh": "規則判定",
          "en": "Rule judgement"
        }
      ],
      "core": {
        "zh": "比對引擎（Python FastAPI）",
        "en": "Comparison engine (Python FastAPI)"
      },
      "bottom": [
        {
          "zh": "PostgreSQL",
          "en": "PostgreSQL"
        },
        {
          "zh": "規則引擎",
          "en": "Rule engine"
        },
        {
          "zh": "人工複核",
          "en": "Human review"
        },
        {
          "zh": "Vue 3 介面",
          "en": "Vue 3 UI"
        }
      ]
    },
    "features": {
      "zh": [
        "文字型 PDF 座標分群還原表格",
        "掃描件背景佇列 OCR",
        "包材類別 → 標準書 → 分支",
        "分支加權推薦與最低證據門檻",
        "規則型別自動判斷",
        "三區比對",
        "必檢項缺漏阻擋核可",
        "依信心度分組複核"
      ],
      "en": [
        "Tables rebuilt by coordinate clustering",
        "Background OCR queue for scans",
        "Material → spec → branch mapping",
        "Weighted branch ranking with evidence threshold",
        "Automatic rule typing",
        "Three-way comparison",
        "Missing mandatory items block approval",
        "Review grouped by confidence"
      ]
    },
    "impact": {
      "zh": [
        "主導技術提案並取得專案",
        "獨立建置後交付客戶專案部門維運",
        "判定路徑可重現、可稽核",
        "取代人工逐項核對"
      ],
      "en": [
        "Led the technical proposal that won the project",
        "Built solo and handed over to the client team",
        "Judgements are reproducible and auditable",
        "Replaces line-by-line manual checks"
      ]
    }
  },
  "ems": {
    "title": {
      "zh": "EMS",
      "en": "EMS"
    },
    "subEn": "ENERGY MANAGEMENT",
    "sub": {
      "zh": "校園能源管理系統方案規劃",
      "en": "Campus energy management plan"
    },
    "type": {
      "zh": "ESG 能源管理",
      "en": "ESG energy management"
    },
    "env": {
      "zh": "大學校園",
      "en": "University campus"
    },
    "image": "contact",
    "diagram": {
      "top": [
        {
          "zh": "智慧電表 CT / PT",
          "en": "Smart meters CT / PT"
        },
        {
          "zh": "Modbus TCP / IP",
          "en": "Modbus TCP / IP"
        },
        {
          "zh": "資料採集程式",
          "en": "Data collector"
        },
        {
          "zh": "PostgreSQL",
          "en": "PostgreSQL"
        }
      ],
      "core": {
        "zh": "EMS 後端",
        "en": "EMS backend"
      },
      "bottom": [
        {
          "zh": "Web 儀表板",
          "en": "Web dashboard"
        },
        {
          "zh": "告警",
          "en": "Alarms"
        },
        {
          "zh": "趨勢與報表",
          "en": "Trends and reports"
        },
        {
          "zh": "冰水主機整合",
          "en": "Chiller integration"
        }
      ]
    },
    "features": {
      "zh": [
        "六階段工程執行路線",
        "三條工程線並行規劃",
        "軟硬體交付邊界",
        "硬性驗收門檻",
        "兩種通訊架構成本比較",
        "四家品牌行情調查",
        "冰水主機控制器五級分類",
        "SCADA 取捨評估"
      ],
      "en": [
        "Six-phase execution plan",
        "Three parallel engineering tracks",
        "Hardware / software delivery boundaries",
        "Hard acceptance gates",
        "Cost comparison of two comms architectures",
        "Four-brand market survey",
        "Five-level chiller controller ranking",
        "SCADA trade-off analysis"
      ]
    },
    "impact": {
      "zh": [
        "訂出「Ping 得到不算完成」的驗收原則",
        "控制器重做列為最後方案",
        "可評估不另購 SCADA，為客戶省下一整套系統",
        "從需求、設備選型到交付邊界的完整規劃"
      ],
      "en": [
        "Set the rule that a ping reply is not done",
        "Controller replacement is the last resort",
        "Option to skip a separate SCADA purchase",
        "Full plan from requirements to delivery boundaries"
      ]
    }
  },
  "solar": {
    "title": {
      "zh": "SOLAR",
      "en": "SOLAR"
    },
    "subEn": "MONITORING PLATFORM",
    "sub": {
      "zh": "太陽能監控管理系統",
      "en": "Solar monitoring platform"
    },
    "type": {
      "zh": "IoT 監控平台",
      "en": "IoT monitoring platform"
    },
    "env": {
      "zh": "雲端主機",
      "en": "Cloud host"
    },
    "image": "experience",
    "diagram": {
      "top": [
        {
          "zh": "電廠設備",
          "en": "Plant devices"
        },
        {
          "zh": "MQTT",
          "en": "MQTT"
        },
        {
          "zh": "ASP.NET Core API",
          "en": "ASP.NET Core API"
        },
        {
          "zh": "MySQL",
          "en": "MySQL"
        }
      ],
      "core": {
        "zh": "監控平台",
        "en": "Monitoring platform"
      },
      "bottom": [
        {
          "zh": "Vue 3 介面",
          "en": "Vue 3 UI"
        },
        {
          "zh": "資料視覺化",
          "en": "Charts"
        },
        {
          "zh": "Docker 多容器",
          "en": "Docker containers"
        },
        {
          "zh": "Nginx · HTTPS",
          "en": "Nginx · HTTPS"
        }
      ]
    },
    "features": {
      "zh": [
        "設備即時監控",
        "資料視覺化",
        "MQTT 發布 / 訂閱",
        "Web API 與資料庫設計",
        "Docker 多容器部署",
        "Nginx 反向代理與 HTTPS"
      ],
      "en": [
        "Real-time device monitoring",
        "Data visualization",
        "MQTT pub / sub",
        "Web API and database design",
        "Multi-container Docker",
        "Nginx reverse proxy and HTTPS"
      ]
    },
    "impact": {
      "zh": [
        "全端開發與部署維運一人負責",
        "監控與控制共用同一條即時通道"
      ],
      "en": [
        "Owned full-stack development and operations",
        "Monitoring and control share one real-time channel"
      ]
    }
  },
  "order": {
    "title": {
      "zh": "ORDERING",
      "en": "ORDERING"
    },
    "subEn": "ENTERPRISE SYSTEM",
    "sub": {
      "zh": "企業內部訂餐管理系統",
      "en": "Internal meal-ordering system"
    },
    "type": {
      "zh": "企業 Web 系統",
      "en": "Enterprise web app"
    },
    "env": {
      "zh": "企業內部",
      "en": "Internal"
    },
    "image": "home",
    "diagram": {
      "top": [
        {
          "zh": "登入",
          "en": "Login"
        },
        {
          "zh": "Token 驗證",
          "en": "Token auth"
        },
        {
          "zh": "角色權限",
          "en": "Roles"
        },
        {
          "zh": "動態路由",
          "en": "Dynamic routes"
        }
      ],
      "core": {
        "zh": "Vue 3 前端（Pinia）",
        "en": "Vue 3 front end (Pinia)"
      },
      "bottom": [
        {
          "zh": "Axios API 層",
          "en": "Axios API layer"
        },
        {
          "zh": "日曆排程",
          "en": "Calendar"
        },
        {
          "zh": "富文本編輯",
          "en": "Rich text"
        },
        {
          "zh": "Excel 匯入匯出",
          "en": "Excel import / export"
        }
      ]
    },
    "features": {
      "zh": [
        "完整登入流程",
        "角色權限",
        "動態路由與選單",
        "全域 API 管理",
        "日曆排程",
        "Excel 匯入匯出"
      ],
      "en": [
        "Full login flow",
        "Role permissions",
        "Dynamic routes and menus",
        "Global API layer",
        "Calendar scheduling",
        "Excel import / export"
      ]
    },
    "impact": {
      "zh": [
        "請求攔截與錯誤處理只寫一次",
        "依角色動態產生選單"
      ],
      "en": [
        "Interceptors and error handling written once",
        "Menus generated per role"
      ]
    }
  }
}
