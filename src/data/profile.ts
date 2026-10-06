// 個人資料：來源為 104 履歷。不放地址、電話、年齡。
import type { Profile } from './types'

export const profile: Profile = {
  name: { zh: '潘建宇', en: 'Pan Chien-Yu' },
  nickname: 'Terry Pan',
  display: { zh: '潘建宇', en: 'PAN CHIEN-YU' },
  alias: { zh: 'Pan Chien-Yu（Terry Pan）', en: '(Terry Pan)' },
  title: { zh: '資深全端工程師', en: 'Senior Full-Stack Engineer' },
  field: { zh: 'AGV · MCS · ROS · AI · 工業系統', en: 'AGV · MCS · ROS · AI · Industrial Systems' },
  intro: {
    zh: '我專注於工業自動化與軟體系統整合，從現場感測、工業通訊、資料平台到 AI 應用，獨立負責整條鏈路的規劃、開發與交付。',
    en: 'I work on industrial automation and software integration, owning the whole chain from field sensing and industrial communication to data platforms and AI.',
  },
  email: 'terrypan1@gmail.com',
  github: 'github.com/terrypan1',
}
