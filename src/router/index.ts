import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: () => import('@/pages/HomePage.vue'), meta: { nav: 'home', index: '01' } },
      { path: 'projects', name: 'projects', component: () => import('@/pages/ProjectsPage.vue'), meta: { nav: 'projects', index: '02' } },
      { path: 'projects/:id', name: 'project', component: () => import('@/pages/ProjectDetailPage.vue'), meta: { nav: 'projects', index: '02' } },
      { path: 'about', name: 'about', component: () => import('@/pages/AboutPage.vue'), meta: { nav: 'about', index: '03' } },
      { path: 'experience', name: 'experience', component: () => import('@/pages/ExperiencePage.vue'), meta: { nav: 'experience', index: '04' } },
      { path: 'contact', name: 'contact', component: () => import('@/pages/ContactPage.vue'), meta: { nav: 'contact', index: '05' } },
      ...(import.meta.env.DEV ? [{ path: 'dev/ui', name: 'dev-ui', component: () => import('@/pages/DevUiPage.vue') }] : []),
      { path: ':pathMatch(.*)*', name: 'not-found', component: () => import('@/pages/NotFoundPage.vue') },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  // 換頁才捲回頂部；同一頁只改 query（例如專案篩選 ?category=）時保持目前位置
  scrollBehavior: (to, from, saved) => {
    if (saved) return saved
    if (to.path === from.path) return false
    return { top: 0 }
  },
})
