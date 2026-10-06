// 各頁主視覺：全部裁自 designs/（使用者指定）。之後有乾淨原圖直接換檔即可。
import home from '@/assets/hero-home.webp'
import projects from '@/assets/hero-projects.webp'
import about from '@/assets/hero-about.webp'
import experience from '@/assets/hero-experience.webp'
import contact from '@/assets/hero-contact.webp'
import agv from '@/assets/detail-agv.webp'
import pcba from '@/assets/detail-pcba.webp'
// 專案／關於／聯絡頁主視覺（使用者提供），與專案詳細頁共用的 projects/about/contact 分開
import projectsPage from '@/assets/hero-projects-page.webp'
import aboutPage from '@/assets/hero-about-page.webp'
import contactPage from '@/assets/hero-contact-page.webp'

export const heroImages = { home, projects, about, experience, contact, agv, pcba, projectsPage, aboutPage, contactPage }
export type HeroImageKey = keyof typeof heroImages
