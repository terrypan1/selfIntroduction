// 內容資料的型別。02 會把 104 履歷全部轉成這些結構，頁面只讀資料、不寫死文案。

export type Localized<T = string> = { zh: T; en: T }

export interface Profile {
  name: Localized
  nickname: string
  /** 大標用名字：中文版「潘建宇」、英文版「PAN CHIEN-YU」 */
  display: Localized
  /** 大標下方的副名 */
  alias: Localized
  title: Localized
  field: Localized
  intro: Localized
  email: string
  github: string
}

export interface Experience {
  id: string
  period: string
  /** 起始年，時間軸用 */
  year: string
  title: Localized
  company: Localized
  summary: Localized
  points: Localized<string[]>
  tech?: string[]
}

export interface ProjectSection {
  heading: Localized
  items: Localized<string[]>
}

export type ProjectCategory = 'agv' | 'ai' | 'web' | 'iot'

export interface Project {
  id: string
  name: Localized
  /** 卡片用短名稱 */
  short: Localized
  /** 卡片副標，一行 */
  tagline: Localized
  category: ProjectCategory
  period: Localized
  summary: Localized
  role: Localized
  highlights: Localized<string[]>
  decision: Localized
  sections: ProjectSection[]
  tech: string[]
  images: string[]
}

export interface SkillGroup {
  id: string
  name: Localized
  items: Localized<string[]>
}

export interface Credentials {
  education: Localized
  licenses: Localized<string[]>
  languages: Localized<string[]>
  availability: Localized
}
