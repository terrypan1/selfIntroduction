// 專案資料：來源為 104 履歷「專案成就」與「工作經驗」（D:\\個人資料\\面試\\潘建宇.pdf）。
// 規則見 docs/實作/02：不放 PCBA 定位成功率數字、真車驗收項數、客戶名稱；EMS 只寫「大學校園」。
// 02 會再逐筆對照 104 校稿。
import type { Project } from './types'

export const projects: Project[] = [
  {
    "id": "agv",
    "short": {
      "zh": "AGV / iMCS",
      "en": "AGV / iMCS"
    },
    "name": {
      "zh": "AGV 智慧物流控制系統與車載 ROS",
      "en": "AGV fleet control and on-board ROS"
    },
    "tagline": {
      "zh": "車隊調度 · 派工引擎 · 車載 ROS",
      "en": "Fleet dispatch · workflow engine · on-board ROS"
    },
    "category": "agv",
    "period": {
      "zh": "2025/7 – 進行中",
      "en": "2025/7 – present"
    },
    "summary": {
      "zh": "為工業現場建置車隊調度平台（iMCS）與車載控制系統。從接手舊系統、重構，到重建新一代架構，再往下延伸到車載層，全程獨立完成。",
      "en": "A fleet dispatch platform (iMCS) and on-board control software for an industrial site. I took over a legacy system, refactored it, rebuilt the next generation and extended it down to the vehicle, working solo throughout."
    },
    "role": {
      "zh": "獨立負責架構設計、開發與現場驗證",
      "en": "Sole owner of architecture, development and on-site validation"
    },
    "highlights": {
      "zh": [
        "資料驅動派工引擎：流程定義存在資料庫，新增流程不用改程式",
        "工單 / 任務 / 路線三層任務模型，資料庫鎖防止重複派工",
        "19 個 ROS 套件，涵蓋定位、路徑規劃、運動控制與 CANopen 底盤"
      ],
      "en": [
        "Data-driven dispatch engine: flows live in the database, so new flows need no code change",
        "Order / task / route model with DB locks so no vehicle is double-assigned",
        "19 ROS packages covering localization, planning, motion and the CANopen chassis"
      ]
    },
    "decision": {
      "zh": "多車交通管制用區域鎖加狀態機分段放行，安全性不依賴車商系統是否內建避讓。",
      "en": "Multi-vehicle traffic uses zone locks with staged release, so safety never depends on the vendor's own collision avoidance."
    },
    "sections": [
      {
        "heading": {
          "zh": "演進歷程",
          "en": "How it evolved"
        },
        "items": {
          "zh": [
            "接手期：接手既有 MCS 系統（Dapper + MSSQL），負責維運、功能擴充與前端改版",
            "重構期：資料存取層由 Dapper 重構為 EF Core，導入 Quartz 排程與 Modbus 設備通訊",
            "重建期：提出並執行新一代架構，資料庫改採 PostgreSQL，服務端重新模組化",
            "延伸期：由上位調度延伸到 AGV 車載端，自建 ROS 1 車載系統"
          ],
          "en": [
            "Takeover: maintained and extended the legacy MCS (Dapper + MSSQL) and redid its front end",
            "Refactor: moved data access from Dapper to EF Core; added Quartz scheduling and Modbus device comms",
            "Rebuild: proposed and delivered a new architecture on PostgreSQL with a modular service layer",
            "Extension: went below dispatch to the vehicle and built the on-board ROS 1 system"
          ]
        }
      },
      {
        "heading": {
          "zh": "上位調度系統 iMCS",
          "en": "Fleet dispatch (iMCS)"
        },
        "items": {
          "zh": [
            "自研派工引擎與路線狀態機，搬運流程定義存於資料庫，新增流程不需改程式或重新部署",
            "執行器分三種通道：呼叫 RCS 移動、Modbus 設備交握、內部運算，同一套狀態機協調車輛與現場設備",
            "多車同區域交通管制：區域鎖加狀態機分段放行",
            "自建圖形化地圖編輯器與版本控管：單一樓層 496 節點 / 754 邊，累積 641 個版本",
            "即時監控頁完全由日誌流驅動，不查資料庫也不呼叫 API，畫面所見即引擎實際行為"
          ],
          "en": [
            "Custom dispatch engine and route state machine; flows are stored in the database, so new flows need no code change or redeploy",
            "Three executor channels (RCS moves, Modbus handshakes, internal compute) let one state machine coordinate vehicles and field devices",
            "Multi-vehicle zone traffic control with zone locks and staged release",
            "Graphical map editor with version control: 496 nodes / 754 edges on one floor, 641 versions so far",
            "The live monitor is driven entirely by the log stream, with no DB queries or API calls, so the screen shows exactly what the engine does"
          ]
        }
      },
      {
        "heading": {
          "zh": "車載 ROS 1 系統",
          "en": "On-board ROS 1"
        },
        "items": {
          "zh": [
            "19 個套件，依功能責任切分，而非照原廠節點結構",
            "涵蓋定位與 SLAM、拓撲路徑規劃、運動控制、安全閘門、CAN/CANopen 底盤、貨叉與 IO、VDA5050 任務介面",
            "相容層隔離在核心規格之外，避免來源不明的欄位永久留在正式介面",
            "建立硬體接管前置檢查與回退程序，以及「最小受控作動」驗證模式",
            "導入 rostest 自動化測試與模擬 / 重播環境，降低真車依賴"
          ],
          "en": [
            "19 packages split by responsibility rather than the vendor's node layout",
            "Localization and SLAM, topological planning, motion control, safety gate, CAN/CANopen chassis, forks and IO, VDA5050 interface",
            "A compatibility layer kept outside the core spec so unknown fields never become permanent",
            "Pre-checks and rollback for taking over hardware, plus a minimal-controlled-motion validation pattern",
            "rostest automation with simulation and replay to reduce time on the real vehicle"
          ]
        }
      }
    ],
    "tech": [
      ".NET",
      "EF Core",
      "PostgreSQL",
      "Quartz",
      "SignalR",
      "Vue 3",
      "ROS 1 Noetic",
      "C++",
      "Python",
      "Modbus TCP",
      "CANopen",
      "VDA5050",
      "MQTT"
    ],
    "images": []
  },
  {
    "id": "pcba",
    "short": {
      "zh": "AI 維修助手",
      "en": "AI Repair Assistant"
    },
    "name": {
      "zh": "AI 瑕疵維修助手（PCBA）",
      "en": "AI repair assistant for PCBA"
    },
    "tagline": {
      "zh": "MES 資料 · 圖面定位 · OCR",
      "en": "MES data · drawing location · OCR"
    },
    "category": "ai",
    "period": {
      "zh": "2026/4 – 2026/9",
      "en": "2026/4 – 2026/9"
    },
    "summary": {
      "zh": "為工業電腦製造廠建置維修輔助系統。輸入產品序號，自動找出歷史高頻不良位置，並在線路圖 PDF 上框出對應零件。",
      "en": "A repair assistant for an industrial PC maker. Enter a serial number to see historical defect hotspots, boxed automatically on the schematic PDF."
    },
    "role": {
      "zh": "系統架構、前後端、AI 推論服務、資料處理與模型驗證",
      "en": "Architecture, front and back end, AI inference, data processing and model validation"
    },
    "highlights": {
      "zh": [
        "序號 → 機種 → PCB 版號 → 圖面 → 高頻不良位置 → 元件定位，一條流程完成",
        "文字型 PDF 直接解析文字層；圖像型 PDF 用 PP-DocLayoutV2 加 PP-OCRv5 定位",
        "匯入 6 萬筆以上 MES 歷史資料，治理 4,600 筆機種主檔"
      ],
      "en": [
        "Serial → model → PCB revision → drawing → defect hotspots → component location in one flow",
        "Text PDFs are parsed directly; image PDFs go through PP-DocLayoutV2 and PP-OCRv5",
        "60,000+ MES records imported and 4,600 product masters cleaned up"
      ]
    },
    "decision": {
      "zh": "選擇可離線微調的 PP-OCRv5，不直接用通用多模態大模型：每個結果都能追溯到辨識框和信心分數。",
      "en": "Chose a fine-tunable offline PP-OCRv5 over a general multimodal LLM, so every result traces back to a box and a confidence score."
    },
    "sections": [
      {
        "heading": {
          "zh": "核心功能與 AI 圖面定位",
          "en": "Core flow and AI location"
        },
        "items": {
          "zh": [
            "建立「產品序號 → 機種 → PCB 版號 → TOP/BOT 圖面 → 歷史高頻不良位置 → 元件定位」完整流程",
            "依 PDF 類型雙路徑：文字型直接解析文字層與座標，不用 GPU；圖像型以 PP-DocLayoutV2 偵測板區，再由 PP-OCRv5 辨識元件位號",
            "支援單頁、多頁套圖與含實心層的圖面；密集位號以分塊、複核與局部重讀降低誤定位",
            "定位結果結合歷史不良熱點，在 PDF Canvas 上自動打框與對焦"
          ],
          "en": [
            "Serial number → model → PCB revision → TOP/BOT drawing → historical hotspots → component location",
            "Two paths: text PDFs are parsed for text and coordinates without a GPU; image PDFs use PP-DocLayoutV2 for board regions, then PP-OCRv5 for reference designators",
            "Handles single-page, multi-page and solid-layer drawings; dense labels are tiled, re-checked and re-read locally",
            "Results are combined with defect hotspots and boxed and focused on a PDF canvas"
          ]
        }
      },
      {
        "heading": {
          "zh": "模型驗證與工程化",
          "en": "Validation and engineering"
        },
        "items": {
          "zh": [
            "建立固定驗證樣本、人工 Ground Truth、候選模型 A/B 驗證與版本回退流程",
            "以 100 組真實產品序號逐框人工核對",
            "自動化驗證流程與 Excel 報表，記錄定位座標、例外原因與人工核對結果"
          ],
          "en": [
            "Fixed validation set, human ground truth, A/B checks for candidate models and version rollback",
            "Box-by-box human review on 100 real serial numbers",
            "Automated validation with Excel reports covering coordinates, exceptions and review results"
          ]
        }
      },
      {
        "heading": {
          "zh": "系統與資料整合",
          "en": "System and data"
        },
        "items": {
          "zh": [
            "Dashboard 式介面：維修總覽、異常熱點、AI 助手、資料維護、知識庫、分析報表與系統管理",
            "整合 MES 維修歷史、PCB 版號與圖面對照，建立 Top-N 維修熱點推薦"
          ],
          "en": [
            "Dashboard covering repair overview, hotspots, AI assistant, data maintenance, knowledge base, reports and admin",
            "Combines MES history, PCB revisions and drawings into Top-N hotspot recommendations"
          ]
        }
      }
    ],
    "tech": [
      "Vue 3",
      "TypeScript",
      ".NET",
      "Python FastAPI",
      "PostgreSQL",
      "PP-OCRv5",
      "PP-DocLayoutV2",
      "PDF.js",
      "Nginx"
    ],
    "images": []
  },
  {
    "id": "coa",
    "short": {
      "zh": "COA 比對",
      "en": "COA Checking"
    },
    "name": {
      "zh": "COA 檢驗報告自動辨識與比對",
      "en": "Automated COA recognition and checking"
    },
    "tagline": {
      "zh": "檢驗報告辨識 · 規則引擎",
      "en": "Report recognition · rule engine"
    },
    "category": "ai",
    "period": {
      "zh": "2026/4 – 2026/9",
      "en": "2026/4 – 2026/9"
    },
    "summary": {
      "zh": "為飲料製造廠建置進料品質檢核平台。供應商檢驗報告經辨識後，自動和原料品質標準書比對並判定，取代人工逐項核對。",
      "en": "An incoming-quality platform for a beverage maker. Supplier inspection reports are recognized and checked against internal specs automatically, replacing line-by-line manual checks."
    },
    "role": {
      "zh": "主導技術提案並取得專案，獨立建置後交付客戶專案部門維運",
      "en": "Led the proposal that won the project, built it solo and handed it to the client's team"
    },
    "highlights": {
      "zh": [
        "文字型 PDF 以座標分群還原表格，掃描件排入背景佇列做版面分析與 OCR",
        "三層對應：包材類別 → 標準書 → 分支，確保對到唯一比對基準",
        "三區比對：已配對、標準書獨有、COA 獨有；必檢項缺漏就阻擋核可"
      ],
      "en": [
        "Text PDFs are rebuilt into tables by coordinate clustering; scans go to a background queue for layout analysis and OCR",
        "Three-level mapping (material → spec → branch) guarantees one correct baseline",
        "Three-way comparison; a missing mandatory item blocks approval"
      ]
    },
    "decision": {
      "zh": "COA 上的「自判合格」不算數。有實測數據才自動判定，其餘一律轉人工。",
      "en": "A supplier's own pass mark never counts. Only measured values are judged automatically; everything else goes to a person."
    },
    "sections": [
      {
        "heading": {
          "zh": "文件理解",
          "en": "Document understanding"
        },
        "items": {
          "zh": [
            "文字型 PDF 以座標分群還原表格結構；掃描件排入背景佇列，以版面分析定位表格與文字區塊，再交給表格結構辨識與 OCR",
            "辨識結果一律標記為需人工複核；定位失敗就整份降級回人工建檔，不做部分自動化，避免狀態混雜"
          ],
          "en": [
            "Text PDFs are rebuilt by clustering coordinates; scans are queued for layout analysis, table structure recognition and OCR",
            "Every result is flagged for review; if location fails the whole document falls back to manual entry, never partial automation"
          ]
        }
      },
      {
        "heading": {
          "zh": "把標準書轉成可判定的規則",
          "en": "Turning specs into rules"
        },
        "items": {
          "zh": [
            "三層對應邏輯：包材類別 → 標準書 → 分支",
            "分支推薦採加權評分，並設最低證據門檻：須命中兩個以上識別欄位或關鍵圖號，修正單一欄位即可滿分的漏洞",
            "規則型別自動判斷：數值區間、上下限、精確值、文字判定、法規引用，依信心度分組人工複核"
          ],
          "en": [
            "Three-level mapping: material category → spec → branch",
            "Weighted branch recommendation with a minimum-evidence rule (two or more identifying fields), closing a loophole where one field scored full marks",
            "Automatic rule typing (ranges, limits, exact values, text, regulations) with review grouped by confidence"
          ]
        }
      },
      {
        "heading": {
          "zh": "比對引擎",
          "en": "Comparison engine"
        },
        "items": {
          "zh": [
            "三區比對：已配對、標準書獨有、COA 獨有；必檢項未提供則阻擋整案核可",
            "判定路徑是確定性規則引擎，可重現、可稽核；統計學習只用在推薦層，最後由人確認"
          ],
          "en": [
            "Matched, spec-only and COA-only zones; a missing mandatory item blocks approval",
            "Judgement runs on a deterministic, auditable rule engine; statistics only power recommendations and a person confirms"
          ]
        }
      }
    ],
    "tech": [
      "Python FastAPI",
      "PostgreSQL",
      "Vue 3",
      "TypeScript",
      "OCR"
    ],
    "images": []
  },
  {
    "id": "ems",
    "short": {
      "zh": "EMS 能源規劃",
      "en": "EMS Planning"
    },
    "name": {
      "zh": "校園能源管理系統（EMS）規劃",
      "en": "Campus energy management plan"
    },
    "tagline": {
      "zh": "智慧電表 · Modbus · 能源管理",
      "en": "Smart meters · Modbus · energy"
    },
    "category": "iot",
    "period": {
      "zh": "2026/1 – 2026/3",
      "en": "2026/1 – 2026/3"
    },
    "summary": {
      "zh": "為大學校園規劃全校用電監測與節能管理平台，從需求確認、現場調查、設備選型、通訊架構到交付邊界的完整工程規劃。",
      "en": "A campus-wide power monitoring and energy platform for a university, planned end to end from requirements and site survey to equipment, comms and delivery boundaries."
    },
    "role": {
      "zh": "完整工程規劃與方案提案",
      "en": "End-to-end engineering plan and proposal"
    },
    "highlights": {
      "zh": [
        "智慧電表 → Modbus TCP → 資料採集 → PostgreSQL → EMS 後端 → Dashboard",
        "電表配電、網路通訊、冰水主機控制三條工程線並行規劃",
        "比較原生 Ethernet 與 RS485 加閘道器兩種架構的整體成本"
      ],
      "en": [
        "Smart meters → Modbus TCP → collector → PostgreSQL → EMS backend → dashboard",
        "Metering, networking and chiller control planned as three parallel tracks",
        "Compared native Ethernet against RS485 plus gateways on total cost"
      ]
    },
    "decision": {
      "zh": "「Ping 得到、通訊燈亮」不算完成，必須從 EMS 所在網路實際讀到正確數值。",
      "en": "A ping reply and a blinking link light are not done. Done means the EMS network reads the correct value."
    },
    "sections": [
      {
        "heading": {
          "zh": "工程規劃",
          "en": "Engineering plan"
        },
        "items": {
          "zh": [
            "訂定六階段工程執行路線，三條工程線並行",
            "明確定義軟硬體交付邊界與硬性驗收門檻：本機量測未驗收不得進入通訊串接"
          ],
          "en": [
            "Six-phase execution plan with three parallel tracks",
            "Clear hardware/software boundaries and hard gates: no comms work before local metering passes"
          ]
        }
      },
      {
        "heading": {
          "zh": "設備選型",
          "en": "Equipment selection"
        },
        "items": {
          "zh": [
            "電表單價低不等於整體工程省：要算入配線、閘道器、參數設定與額外故障點",
            "調查四家品牌行情，並標註查詢日期與查價限制"
          ],
          "en": [
            "A cheaper meter is not a cheaper project once wiring, gateways, setup and extra failure points are counted",
            "Surveyed four brands, noting query dates and pricing caveats"
          ]
        }
      },
      {
        "heading": {
          "zh": "既有設備整合",
          "en": "Existing equipment"
        },
        "items": {
          "zh": [
            "冰水主機控制器依通訊能力分五級：直接整合 → 協定轉換 → 旁路採集 → 控制器重做",
            "控制器重做永遠是最後方案，既有控制能安全運轉就不為資料介面更動"
          ],
          "en": [
            "Chiller controllers ranked in five levels: direct → protocol conversion → side-channel capture → replacement",
            "Replacing a controller is always last; working controls are not changed just for data"
          ]
        }
      },
      {
        "heading": {
          "zh": "架構取捨",
          "en": "Architecture trade-offs"
        },
        "items": {
          "zh": [
            "釐清「不用 SCADA ≠ 不用 PLC」：控制器負責即時控制與互鎖，SCADA 屬監控與資料層",
            "EMS 已涵蓋採集、監控、告警、趨勢與報表時，可評估不另購 SCADA，為客戶省下一整套系統"
          ],
          "en": [
            "No SCADA does not mean no PLC: controllers handle real-time control and interlocks, SCADA is monitoring and data",
            "If the EMS covers collection, alarms, trends and reports, the client can skip buying a separate SCADA"
          ]
        }
      }
    ],
    "tech": [
      "Modbus TCP / RTU",
      "CT / PT",
      "PLC / SCADA",
      "PostgreSQL",
      "EMS Dashboard"
    ],
    "images": []
  },
  {
    "id": "solar",
    "short": {
      "zh": "太陽能監控",
      "en": "Solar Monitoring"
    },
    "name": {
      "zh": "太陽能監控管理系統",
      "en": "Solar plant monitoring"
    },
    "tagline": {
      "zh": "MQTT · 監控平台 · 雲端部署",
      "en": "MQTT · monitoring · cloud ops"
    },
    "category": "iot",
    "period": {
      "zh": "2023/9 – 2025/2",
      "en": "2023/9 – 2025/2"
    },
    "summary": {
      "zh": "太陽能發電監控與資料管理平台，負責全端開發與部署維運。",
      "en": "A solar monitoring and data platform; I owned full-stack development and operations."
    },
    "role": {
      "zh": "全端開發、部署與維運",
      "en": "Full-stack development, deployment and operations"
    },
    "highlights": {
      "zh": [
        "Vue 3 + Vite + Tailwind CSS 建立監控與資料視覺化",
        "ASP.NET Core Web API + EF Core + MySQL",
        "Ubuntu、Docker 多容器、Nginx 反向代理與 HTTPS"
      ],
      "en": [
        "Monitoring and charts with Vue 3, Vite and Tailwind CSS",
        "ASP.NET Core Web API with EF Core and MySQL",
        "Ubuntu, multi-container Docker, Nginx reverse proxy and HTTPS"
      ]
    },
    "decision": {
      "zh": "設備資料走 MQTT 發布 / 訂閱，監控和控制共用同一條即時通道。",
      "en": "Device data runs over MQTT pub/sub, so monitoring and control share one real-time channel."
    },
    "sections": [
      {
        "heading": {
          "zh": "系統內容",
          "en": "What I built"
        },
        "items": {
          "zh": [
            "前端 Vue 3 + Vite + Tailwind CSS，建立設備監控與資料視覺化介面",
            "後端 ASP.NET Core Web API + EF Core + MySQL",
            "以 MQTT 建立設備即時資料傳輸，採發布 / 訂閱模式進行狀態監控與控制",
            "部署採 Ubuntu + Docker 多容器架構，Nginx 反向代理與 HTTPS 憑證，部署於雲端主機"
          ],
          "en": [
            "Front end in Vue 3, Vite and Tailwind CSS for monitoring and visualization",
            "Back end in ASP.NET Core Web API, EF Core and MySQL",
            "MQTT pub/sub for real-time device status and control",
            "Ubuntu with multi-container Docker, Nginx reverse proxy and HTTPS on a cloud host"
          ]
        }
      }
    ],
    "tech": [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "ASP.NET Core",
      "EF Core",
      "MySQL",
      "MQTT",
      "Docker",
      "Nginx"
    ],
    "images": []
  },
  {
    "id": "order",
    "short": {
      "zh": "企業訂餐",
      "en": "Meal Ordering"
    },
    "name": {
      "zh": "企業訂餐系統",
      "en": "Corporate meal ordering"
    },
    "tagline": {
      "zh": "權限 · 動態路由 · 企業系統",
      "en": "Roles · dynamic routing · enterprise"
    },
    "category": "web",
    "period": {
      "zh": "2022/12 – 2023/6",
      "en": "2022/12 – 2023/6"
    },
    "summary": {
      "zh": "企業內部訂餐管理系統前端開發。",
      "en": "Front end for an internal meal-ordering system."
    },
    "role": {
      "zh": "前端開發",
      "en": "Front-end development"
    },
    "highlights": {
      "zh": [
        "Vue 3 + Vite，狀態管理採 Pinia",
        "token 驗證、角色權限、動態路由與動態選單",
        "日曆排程、富文本、表單驗證、Excel 匯入匯出"
      ],
      "en": [
        "Vue 3 and Vite with Pinia",
        "Token auth, roles, dynamic routes and menus",
        "Calendar, rich text, validation and Excel import/export"
      ]
    },
    "decision": {
      "zh": "封裝 Axios 做全域 API 層，請求攔截與錯誤處理只寫一次。",
      "en": "A single wrapped Axios layer handles interceptors and errors for every request."
    },
    "sections": [
      {
        "heading": {
          "zh": "功能",
          "en": "Features"
        },
        "items": {
          "zh": [
            "Vue 3 + Vite，狀態管理採 Pinia",
            "封裝 Axios 建立全域 API 管理機制，統一處理請求攔截與錯誤回應",
            "完整登入流程：token 驗證、依角色設定權限、動態路由與動態選單",
            "整合日曆排程、富文本編輯、表單驗證與 Excel 匯入匯出"
          ],
          "en": [
            "Vue 3 and Vite with Pinia state",
            "Wrapped Axios as a global API layer with shared interceptors and error handling",
            "Full login flow: token auth, role permissions, dynamic routes and menus",
            "Calendar scheduling, rich text, form validation and Excel import/export"
          ]
        }
      }
    ],
    "tech": [
      "Vue 3",
      "Vite",
      "Pinia",
      "Axios",
      "Bootstrap 5",
      "Element Plus"
    ],
    "images": []
  }
]
