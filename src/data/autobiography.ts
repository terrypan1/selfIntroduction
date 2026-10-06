// 自傳精簡版與工作原則：只刪減 104 自傳，不新增事實。summary 內的 <mark> 用來標示重點詞。
import type { Localized } from './types'

export const autobiography: { summary: Localized; principles: Localized[] } = {
  "summary": {
    "zh": "我在產線和機電現場待過八年，2021 年轉入軟體。從企業 Web 系統、前後端與資料庫，一路延伸到 Linux 部署、<mark>工控設備整合</mark>與 <mark>MCS 任務調度</mark>，再深入 <mark>ROS 與 AGV</mark> 的導航、運動與安全控制。接下來想持續往系統架構、工控系統與智慧移動設備整合的方向走。",
    "en": "I spent eight years on production lines and in plant rooms before moving into software in 2021. From enterprise web apps and databases I worked down into Linux deployment, <mark>industrial device integration</mark> and <mark>fleet dispatch</mark>, then into <mark>ROS and AGV</mark> navigation, motion and safety control. Next I want to go deeper into system architecture and intelligent mobile machines."
  },
  "principles": [
    {
      "zh": "<b>先懂現場，再寫程式。</b>在產線和機電現場待過八年，知道設備怎麼壞、操作員怎麼用。設計系統時會先問：通訊斷了怎麼辦？誰來接手？怎樣才算驗收通過？",
      "en": "<b>Understand the floor before writing code.</b> Eight years on the floor taught me how equipment fails and how operators work. My designs start with: what if comms drop, who takes over, and what counts as accepted?"
    },
    {
      "zh": "<b>AI 是工具，判斷在我。</b>大量用 AI 輔助分析既有程式碼、整理文件和設計驗證方案。架構決策、控制邏輯、實作和現場驗證由我自己負責。",
      "en": "<b>AI is a tool; judgment stays with me.</b> I use AI to read legacy code, organize docs and plan verification. Architecture, control logic, implementation and on-site validation are mine."
    },
    {
      "zh": "<b>交付要能交接。</b>每個專案都建立開發守則、驗收清單和工程交接手冊，讓接手的人不用重新摸索。",
      "en": "<b>Deliver something others can own.</b> Every project ships with coding guidelines, acceptance checklists and a handover manual."
    }
  ]
}

/** 自傳全文（關於頁可展開），依 104 自傳分 6 段精簡 */
export const autobiographyFull: { heading: Localized; body: Localized }[] = [
  {
    heading: { zh: '踏入軟體', en: 'Into software' },
    body: {
      zh: '2021 年加入連訊科技，正式踏入軟體開發。參與企業系統開發的過程中，我體會到軟體工程不只是完成功能，還要同時面對需求變化、跨部門溝通、既有架構限制、效能與穩定性。這段經歷讓我養成快速理解既有系統、拆解問題並主動找解法的工作方式。',
      en: 'I joined a software company in 2021 and started building enterprise systems. I learned that software engineering is not just shipping features; it means handling changing requirements, cross-team communication, legacy constraints, performance and stability. That shaped how I work: understand the existing system fast, break the problem down and go find the fix.',
    },
  },
  {
    heading: { zh: '全端與部署', en: 'Full stack and deployment' },
    body: {
      zh: '2023 年加入滙律科技，負責太陽能監控與資料管理系統的全端開發：前端 Vue，後端 .NET Core Web API 搭配 MySQL。因應部署與維運需求，我也熟悉了 Linux、Docker 與 Nginx，從前後端功能開發，擴展到資料庫、部署與維運的完整能力。',
      en: 'In 2023 I moved to full-stack work on a solar monitoring platform: Vue on the front end, .NET Core Web API with MySQL on the back end. Deployment and operations pulled me into Linux, Docker and Nginx, so my scope grew from features to databases, deployment and operations.',
    },
  },
  {
    heading: { zh: '工控與 MCS', en: 'Industrial control and MCS' },
    body: {
      zh: '2025 年加入捷廣系統整合，投入 AGV、MCS 與工控系統開發，負責既有系統重構與新一代派車系統的核心架構。我以自研 Workflow Engine 搭配狀態機管理任務生命週期，並透過 Modbus TCP、REST API 與現場設備和外部系統交換資料，讓 AGV、設備與上層系統在同一套任務流程中協同運作。',
      en: 'In 2025 I joined a systems integrator to work on AGVs, MCS and industrial control, owning the refactor of the legacy system and the core architecture of the new dispatch system. A custom workflow engine with state machines manages each task\'s lifecycle, and Modbus TCP and REST connect field devices and external systems so AGVs, equipment and upper systems run in one task flow.',
    },
  },
  {
    heading: { zh: '往下到 ROS 與車體', en: 'Down to ROS and the vehicle' },
    body: {
      zh: '隨著開發深入，我把範圍從上層 MCS 延伸到 AGV 底層控制：以 ROS 1 Noetic 分析並重構車載架構，整合導航、運動控制、安全控制、LiDAR、定位與底盤介面，並建立障礙物處理、緊急停止、通訊逾時與 Fail-safe 等保護機制。',
      en: 'I then extended my scope from the MCS down to vehicle control: analyzing and rebuilding the on-board stack on ROS 1 Noetic, integrating navigation, motion and safety control, LiDAR, localization and the chassis interface, and adding obstacle handling, emergency stop, comms timeouts and fail-safes.',
    },
  },
  {
    heading: { zh: 'AI 輔助開發', en: 'AI-assisted development' },
    body: {
      zh: '我大量用 AI 輔助分析大型既有程式碼、理解系統行為、解析 ROS 控制流程、整理文件與設計驗證方案。AI 用來提升分析效率，架構判斷、實作、測試與現場驗證由我自己負責。',
      en: 'I use AI heavily to read large legacy codebases, understand system behavior, trace ROS control flow, organize documentation and plan verification. AI speeds up analysis; architecture decisions, implementation, testing and on-site validation stay with me.',
    },
  },
  {
    heading: { zh: '接下來', en: 'What\'s next' },
    body: {
      zh: '回顧這幾年，我的工作從企業 Web 系統一路延伸到工控整合、MCS 調度與 ROS 底層控制。接下來我想持續往系統架構、工控系統與智慧移動設備整合的方向發展，並補強資料結構、演算法、作業系統、網路通訊、分散式系統與控制的基礎。',
      en: 'Looking back, my work has stretched from enterprise web apps to industrial integration, fleet dispatch and low-level ROS control. Next I want to go deeper into system architecture, industrial systems and intelligent mobile machines, while strengthening my foundations in data structures, algorithms, operating systems, networking, distributed systems and control.',
    },
  },
]
