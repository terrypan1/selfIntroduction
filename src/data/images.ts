// 各頁主視覺：全部裁自 designs/（使用者指定）。之後有乾淨原圖直接換檔即可。
import home from '@/assets/hero-home.webp'
import projects from '@/assets/hero-projects.webp'
import about from '@/assets/hero-about.webp'
import experience from '@/assets/hero-experience.webp'
import contact from '@/assets/hero-contact.webp'
import agv from '@/assets/detail-agv.webp'
import pcba from '@/assets/detail-pcba.webp'

export const heroImages = { home, projects, about, experience, contact, agv, pcba }
export type HeroImageKey = keyof typeof heroImages
