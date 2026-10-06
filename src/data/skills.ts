// 專長：來源為 104 履歷「專長」8 大類；Quasar 為使用者確認後加入。
import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    "id": "comms",
    "name": {
      "zh": "AIoT / 工業通訊",
      "en": "AIoT / industrial comms"
    },
    "items": {
      "zh": [
        "Modbus TCP / RTU",
        "CANopen",
        "MQTT",
        "REST API",
        "ROS Topic / Service",
        "CT / PT 電力量測",
        "設備交握流程設計"
      ],
      "en": [
        "Modbus TCP / RTU",
        "CANopen",
        "MQTT",
        "REST API",
        "ROS Topic / Service",
        "CT / PT metering",
        "Device handshake design"
      ]
    }
  },
  {
    "id": "backend",
    "name": {
      "zh": "後端 / 系統架構",
      "en": "Backend / architecture"
    },
    "items": {
      "zh": [
        "ASP.NET Core",
        "EF Core",
        "Python FastAPI",
        "狀態機與流程引擎",
        "Quartz",
        "SignalR",
        "規則引擎"
      ],
      "en": [
        "ASP.NET Core",
        "EF Core",
        "Python FastAPI",
        "State machines & workflow engines",
        "Quartz",
        "SignalR",
        "Rule engines"
      ]
    }
  },
  {
    "id": "data",
    "name": {
      "zh": "資料庫 / 資料工程",
      "en": "Databases / data"
    },
    "items": {
      "zh": [
        "PostgreSQL 16 + pgvector",
        "MSSQL",
        "MySQL",
        "大量資料批次匯入",
        "主檔治理"
      ],
      "en": [
        "PostgreSQL 16 + pgvector",
        "MSSQL",
        "MySQL",
        "Bulk data import",
        "Master data governance"
      ]
    }
  },
  {
    "id": "ai",
    "name": {
      "zh": "AI 應用",
      "en": "Applied AI"
    },
    "items": {
      "zh": [
        "PP-DocLayout",
        "PP-OCRv5",
        "Qwen-VL",
        "向量檢索",
        "AI 輔助開發流程"
      ],
      "en": [
        "PP-DocLayout",
        "PP-OCRv5",
        "Qwen-VL",
        "Vector search",
        "AI-assisted development"
      ]
    }
  },
  {
    "id": "robotics",
    "name": {
      "zh": "機器人 / 車載控制",
      "en": "Robotics / on-board"
    },
    "items": {
      "zh": [
        "ROS 1 Noetic",
        "SLAM 與定位",
        "運動控制",
        "CAN 底盤通訊",
        "VDA5050",
        "rostest"
      ],
      "en": [
        "ROS 1 Noetic",
        "SLAM & localization",
        "Motion control",
        "CAN chassis comms",
        "VDA5050",
        "rostest"
      ]
    }
  },
  {
    "id": "frontend",
    "name": {
      "zh": "前端",
      "en": "Front end"
    },
    "items": {
      "zh": [
        "Vue 3",
        "TypeScript",
        "Quasar",
        "Vite",
        "Tailwind CSS",
        "Pinia",
        "即時監控介面"
      ],
      "en": [
        "Vue 3",
        "TypeScript",
        "Quasar",
        "Vite",
        "Tailwind CSS",
        "Pinia",
        "Real-time dashboards"
      ]
    }
  },
  {
    "id": "ops",
    "name": {
      "zh": "部署 / 維運",
      "en": "Deploy / ops"
    },
    "items": {
      "zh": [
        "Ubuntu",
        "Docker",
        "Nginx",
        "GitLab CI",
        "換版程序"
      ],
      "en": [
        "Ubuntu",
        "Docker",
        "Nginx",
        "GitLab CI",
        "Release procedures"
      ]
    }
  },
  {
    "id": "management",
    "name": {
      "zh": "工程管理",
      "en": "Engineering management"
    },
    "items": {
      "zh": [
        "需求訪談",
        "售前提案",
        "驗收清單",
        "交接手冊",
        "程式碼審查"
      ],
      "en": [
        "Requirements interviews",
        "Pre-sales proposals",
        "Acceptance checklists",
        "Handover manuals",
        "Code review"
      ]
    }
  }
]
