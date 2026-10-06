// 工作經歷：來源為 104 履歷「工作經驗」，日期照 104。英文版公司不猜英文名，用描述代替。
import type { Experience } from './types'

export const experience: Experience[] = [
  {
    "id": "jg",
    "period": "2025/7 – 2026/9",
    "year": "2025",
    "title": {
      "zh": "資深工程師",
      "en": "Senior Engineer"
    },
    "company": {
      "zh": "捷廣系統整合 · 蘆竹",
      "en": "Systems integrator · Luzhu"
    },
    "summary": {
      "zh": "AIoT 與工控系統整合：從現場感測、工業通訊、資料平台到 AI 應用，獨立負責整條鏈路，並參與客戶提案與現場導入。",
      "en": "AIoT and industrial integration: field sensing, industrial comms, data platforms and AI, owned end to end, including client proposals and on-site rollout."
    },
    "points": {
      "zh": [
        "接手 MCS 並主導 Dapper → EF Core 重構，提出新一代架構",
        "AGV MCS、車載 ROS、PCBA AI、COA、EMS 多專案並行",
        "為各專案建立開發守則、驗收清單與工程交接手冊"
      ],
      "en": [
        "Took over the MCS, led the Dapper → EF Core refactor and proposed the new architecture",
        "Ran AGV MCS, on-board ROS, PCBA AI, COA and EMS in parallel",
        "Wrote coding guidelines, acceptance checklists and handover manuals for each project"
      ]
    }
  },
  {
    "id": "huilu",
    "period": "2023/9 – 2025/2",
    "year": "2023",
    "title": {
      "zh": "全端工程師",
      "en": "Full-stack Engineer"
    },
    "company": {
      "zh": "滙律科技 · 竹北",
      "en": "Software company · Zhubei"
    },
    "summary": {
      "zh": "太陽能監控與資料管理系統全端開發。",
      "en": "Full-stack development of a solar monitoring and data platform."
    },
    "points": {
      "zh": [
        "Vue 3 + Tailwind 前端，ASP.NET Core + MySQL 後端",
        "Ubuntu、Docker 多容器、Nginx 反向代理與 HTTPS",
        "MQTT 設備即時資料傳輸"
      ],
      "en": [
        "Vue 3 and Tailwind front end; ASP.NET Core and MySQL back end",
        "Ubuntu, multi-container Docker, Nginx and HTTPS",
        "Real-time device data over MQTT"
      ]
    }
  },
  {
    "id": "legend",
    "period": "2021/7 – 2023/8",
    "year": "2021",
    "title": {
      "zh": "前端工程師",
      "en": "Front-end Engineer"
    },
    "company": {
      "zh": "連訊科技 · 高雄",
      "en": "Software company · Kaohsiung"
    },
    "summary": {
      "zh": "企業 Web 系統前端開發，與 PM 協同規劃開發排程。",
      "en": "Front end for enterprise web systems, planning schedules with the PM."
    },
    "points": {
      "zh": [
        "Vue 3 + Vite + Pinia",
        "Axios 全域 API 管理、權限與 token 驗證",
        "動態路由與動態選單"
      ],
      "en": [
        "Vue 3, Vite and Pinia",
        "Global Axios API layer, roles and token auth",
        "Dynamic routes and menus"
      ]
    }
  },
  {
    "id": "yongchuan",
    "period": "2018/2 – 2020/7",
    "year": "2018",
    "title": {
      "zh": "機電工程師",
      "en": "M&E Engineer"
    },
    "company": {
      "zh": "詠詮事業 · 桃園",
      "en": "M&E contractor · Taoyuan"
    },
    "summary": {
      "zh": "機電系統維護與工程施作，累積 PLC、配電、控制盤與現場施工經驗。",
      "en": "Maintenance and installation of M&E systems: PLCs, power distribution, control panels and site work."
    },
    "points": {
      "zh": [
        "三菱 PLC 泵浦與馬達啟停、液位連鎖與異常控制",
        "污水泵站維修與控制面板故障診斷",
        "火警與消防系統維護、合規申報支援"
      ],
      "en": [
        "Mitsubishi PLC pump and motor control, level interlocks and fault logic",
        "Pump station repair and control panel diagnostics",
        "Fire alarm and suppression maintenance and compliance support"
      ]
    }
  },
  {
    "id": "jinlong",
    "period": "2011/10 – 2017/6",
    "year": "2011",
    "title": {
      "zh": "品管 / 製程",
      "en": "QC / Process"
    },
    "company": {
      "zh": "晉龍 · 竹北",
      "en": "Semiconductor supplier · Zhubei"
    },
    "summary": {
      "zh": "半導體與面板產品製程作業與品質檢驗，接觸產線製程、自動化設備與不良品處理流程。",
      "en": "Semiconductor and panel processing and inspection, working with production lines, automated tools and defect handling."
    },
    "points": {
      "zh": [
        "驅動 IC Bonding：預壓、本壓、FPC Bonding",
        "ACF / FPC 貼合作業",
        "面板貼合與產品外觀檢驗"
      ],
      "en": [
        "Driver IC bonding: pre-bond, main bond, FPC bonding",
        "ACF / FPC lamination",
        "Panel lamination and visual inspection"
      ]
    }
  }
]
