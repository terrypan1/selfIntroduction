<template>
  <q-page class="home">
    <div class="container">
      <section class="hero">
        <CrossMark class="cm cm-tl" /><CrossMark class="cm cm-tr" />
        <div class="intro">
          <Eyebrow class="eyebrow">{{ t('home.eyebrow') }}</Eyebrow>
          <DisplayTitle class="name" :style="{ fontSize: fitTitle(pick(profile.display), 72) }">{{ pick(profile.display) }}</DisplayTitle>
          <div class="nick">{{ pick(profile.alias) }}</div>
          <div class="title">{{ pick(profile.title) }}</div>
          <div class="field">{{ pick(profile.field) }}</div>
          <p class="lead">{{ pick(profile.intro) }}</p>
          <div class="btns">
            <SiteButton to="/projects" arrow>{{ t('home.viewProjects') }}</SiteButton>
            <SiteButton to="/about" variant="ghost" arrow>{{ t('home.aboutMe') }}</SiteButton>
          </div>
        </div>
        <div class="visual"><HeroImage :src="heroImg" :alt="t('home.visualLabel')" :width="638" :height="448" /></div>
        <SideIndex class="side" :active="0" />
      </section>

      <!-- 01 核心領域 -->
      <section class="do">
        <div class="do-head"><span class="idx">01</span><h2>{{ t('home.doTitle') }}</h2><p v-if="t('home.doSub')">{{ t('home.doSub') }}</p></div>
        <div v-for="(d, i) in doItems" :key="d[0]" class="do-item">
          <img :src="DO_ICONS[i]" alt="" width="96" height="80" />
          <div><h3>{{ d[0] }}</h3><p>{{ d[1] }}<br />{{ d[2] }}</p></div>
        </div>
      </section>

      <!-- 02 精選專案（自動輪播） -->
      <section class="featured">
        <div class="row-head">
          <span class="idx">02</span><h2>{{ t('home.projectsTitle') }}</h2><p v-if="t('home.projectsSub')">{{ t('home.projectsSub') }}</p>
          <router-link to="/projects" class="view-all">{{ t('home.viewAll') }}<q-icon :name="mdiArrowRight" size="16px" /></router-link>
        </div>
        <div ref="track" class="track" :class="{ dragging }" @scroll.passive="update" @mouseenter="paused = true" @mouseleave="paused = false; onPointerUp()" @focusin="paused = true" @focusout="paused = false" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp" @click.capture="onClickCapture" @dragstart.prevent>
          <router-link v-for="(p, i) in projects" :key="p.id" :to="`/projects/${p.id}`" class="card">
            <div class="media"><img :src="cardImages[p.id]" :alt="pick(p.name)" loading="lazy" /><span class="badge">{{ String(i + 1).padStart(2, '0') }}</span></div>
            <div class="body">
              <div class="c-head"><h3>{{ pick(p.short) }}</h3><q-icon :name="mdiArrowTopRight" size="18px" /></div>
              <p class="tagline">{{ pick(p.tagline) }}</p>
              <p class="sum">{{ pick(p.summary) }}</p>
              <div class="tags"><TechTag v-for="x in p.tech.slice(0, 4)" :key="x">{{ x }}</TechTag></div>
            </div>
          </router-link>
        </div>
        <div class="dots" role="tablist" :aria-label="t('home.projectsTitle')">
          <button v-for="i in stops" :key="i" type="button" role="tab" :aria-selected="i - 1 === current" :aria-label="pick(projects[i - 1].short)" :class="{ on: i - 1 === current }" @click="goTo(i - 1)" />
        </div>
      </section>

      <!-- 03 關於 / 04 經歷 / 05 聯絡 -->
      <section class="trio">
        <div class="cell">
          <div class="row-head"><span class="idx">03</span><h2>{{ t('home.aboutTitle') }}</h2></div>
          <div class="cell-body">
            <p class="text">{{ t('home.aboutText') }}</p>
            <img :src="artAbout" alt="" class="art" width="200" height="198" />
          </div>
          <SiteButton to="/about" variant="ghost" arrow class="cell-btn">{{ t('home.more') }}</SiteButton>
        </div>
        <div class="cell">
          <div class="row-head"><span class="idx">04</span><h2>{{ t('home.expTitle') }}</h2></div>
          <div class="cell-body">
            <ol class="mini-tl">
              <li v-for="(e, i) in experience.slice(0, 4)" :key="e.id" :class="{ now: i === 0 }"><span class="pd">{{ e.period.replace(/\/\d+/g, '') }}</span><b>{{ pick(e.company).split(' · ')[0] }}</b><span class="ti">{{ pick(e.title) }}</span></li>
            </ol>
            <img :src="artExp" alt="" class="art" width="224" height="212" />
          </div>
          <SiteButton to="/experience" variant="ghost" arrow class="cell-btn">{{ t('home.viewExp') }}</SiteButton>
        </div>
        <div class="cell">
          <div class="row-head"><span class="idx">05</span><h2>{{ t('home.contactTitle') }}</h2></div>
          <div class="cell-body">
            <div class="quote"><q-icon :name="mdiFormatQuoteOpen" size="40px" /><div><strong>{{ t('home.contactQuote') }}</strong><p>{{ t('home.contactText') }}</p></div></div>
            <img :src="artContact" alt="" class="art" width="200" height="200" />
          </div>
          <SiteButton to="/contact" arrow class="cell-btn">{{ t('home.contactTitle') }}</SiteButton>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMeta } from 'quasar'
import { mdiArrowRight, mdiArrowTopRight, mdiFormatQuoteOpen } from '@quasar/extras/mdi-v7'
import CrossMark from '@/components/ui/CrossMark.vue'
import Eyebrow from '@/components/ui/Eyebrow.vue'
import DisplayTitle from '@/components/ui/DisplayTitle.vue'
import SiteButton from '@/components/ui/SiteButton.vue'
import HeroImage from '@/components/ui/HeroImage.vue'
import TechTag from '@/components/ui/TechTag.vue'
import SideIndex from '@/components/layout/SideIndex.vue'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { experience } from '@/data/experience'
import { cardImages } from '@/data/cardImages'
import { useLocale } from '@/composables/useLocale'
import { fitTitle } from '@/composables/fitTitle'
// 主視覺維持舊版首頁稿 designs/01-home-v1.png 的裁切（使用者指定保留）；核心領域圖示：AI 相機、工業軟體伺服器為第一版（01-home.png）；AGV/MCS 用系統畫面筆電、ROS 用 AGV 車（皆裁自 04-experience.png，去底後放到相同灰底＋陰影，與相機風格一致）
import heroImg from '@/assets/hero-home.webp'
import doAgv from '@/assets/home/do-agv.webp'
import doRos from '@/assets/home/do-ros.webp'
import doAi from '@/assets/home/do-ai.webp'
import doWeb from '@/assets/home/do-web.webp'
import artAbout from '@/assets/home/art-about.webp'
import artExp from '@/assets/home/art-exp.webp'
import artContact from '@/assets/home/art-contact.webp'

const DO_ICONS = [doAgv, doRos, doAi, doWeb]
const { t, tm } = useI18n()
const { pick } = useLocale()
const doItems = computed(() => tm('home.doItems') as [string, string, string][])

useMeta(() => ({
  title: `${pick(profile.name)} Pan Chien-Yu｜${pick(profile.title)}`,
  meta: { description: { name: 'description', content: pick(profile.intro) } },
}))

// 精選專案輪播：每 4 秒往下一張，到底回第一張；滑鼠移上、鍵盤操作、分頁在背景或使用者設定減少動態時不播放
const track = ref<HTMLElement | null>(null)
const current = ref(0)
const paused = ref(false)
// 可停的位置數 = 專案數 − 一次看得到的張數 + 1
const stops = ref(projects.length)
const GAP = 14
const step = () => {
  const card = track.value?.querySelector<HTMLElement>('.card')
  return card ? card.offsetWidth + GAP : 0
}
function update() {
  const el = track.value
  const s = step()
  if (!el || !s) return
  stops.value = Math.max(1, projects.length - Math.round((el.clientWidth + GAP) / s) + 1)
  current.value = Math.min(stops.value - 1, Math.round(el.scrollLeft / s))
}
function goTo(i: number) {
  track.value?.scrollTo({ left: i * step(), behavior: 'smooth' })
}
// 滑鼠拖曳：拖的時候關掉 snap，放開後對齊最近一張；有拖動就擋掉放開時的點擊，避免誤進專案頁
let dragX = 0
let dragLeft = 0
const dragging = ref(false)
let dragged = false
function onPointerDown(e: PointerEvent) {
  const el = track.value
  if (!el || e.pointerType !== 'mouse' || e.button !== 0) return
  dragging.value = true
  dragged = false
  dragX = e.clientX
  dragLeft = el.scrollLeft
}
function onPointerMove(e: PointerEvent) {
  const el = track.value
  if (!el || !dragging.value) return
  const dx = e.clientX - dragX
  if (Math.abs(dx) > 5) dragged = true
  el.scrollLeft = dragLeft - dx
}
function onPointerUp() {
  const el = track.value
  if (!el || !dragging.value) return
  dragging.value = false
  goTo(Math.min(stops.value - 1, Math.round(el.scrollLeft / step())))
}
function onClickCapture(e: MouseEvent) {
  if (dragged) {
    e.preventDefault()
    e.stopPropagation()
    dragged = false
  }
}
let timer: number | undefined
function tick() {
  const el = track.value
  if (!el || paused.value || document.hidden) return
  if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) el.scrollTo({ left: 0, behavior: 'smooth' })
  else el.scrollBy({ left: step(), behavior: 'smooth' })
}
onMounted(() => {
  update()
  window.addEventListener('resize', update)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = window.setInterval(tick, 4000)
})
onBeforeUnmount(() => {
  window.clearInterval(timer)
  window.removeEventListener('resize', update)
})
</script>

<style scoped>
.home {
  padding-bottom: var(--space-5);
}
.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr) 70px;
  gap: var(--space-5);
  padding-block: 28px 20px;
  align-items: start;
}
.cm-tl { left: -26px; top: 12px; }
.cm-tr { right: -26px; top: 12px; }
.intro {
  container-type: inline-size;
  min-width: 0;
}
.eyebrow {
  margin-top: 18px;
}
.name {
  margin: 16px 0 10px;
  white-space: nowrap;
}
.nick {
  font: 400 clamp(17px, 4cqi, 22px) var(--font-sans);
  color: var(--ink-2);
  letter-spacing: 0.04em;
}
.title {
  font: 700 clamp(22px, 5.4cqi, 30px) / 1.25 var(--font-tc);
  margin-top: 8px;
}
.field {
  display: flex;
  align-items: center;
  gap: 14px;
  font: 400 clamp(14px, 3.2cqi, 17px) var(--font-sans);
  color: var(--ink-2);
  margin-top: 8px;
  letter-spacing: 0.08em;
}
.field::after {
  content: '';
  flex: 0 0 60px;
  height: 1px;
  background: var(--ink-3);
}
.lead {
  text-wrap: pretty;
  font: 400 15px / 1.95 var(--font-tc);
  margin: 18px 0 22px;
  max-width: 31em;
  padding-left: 14px;
  border-left: 2px solid var(--line-strong);
}
.btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.visual {
  min-width: 0;
}
.side {
  margin-top: 40px;
}
.idx {
  font: 500 13px var(--font-mono);
  color: var(--ink-2);
}
h2 {
  margin: 0;
  font: 700 16px / 1.3 var(--font-sans);
  letter-spacing: 0.1em;
  color: var(--ink);
}
.row-head {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}
.row-head p,
.do-head p {
  margin: 0;
  font: 400 12.5px var(--font-tc);
  color: var(--ink-2);
  letter-spacing: 0.14em;
}
/* 01 核心領域 */
.do {
  display: grid;
  grid-template-columns: 150px repeat(4, 1fr);
  border-top: var(--border) solid var(--line);
  border-bottom: var(--border) solid var(--line);
}
.do-head {
  padding: 18px 16px 18px 0;
  display: grid;
  align-content: center;
  gap: 2px;
  border-right: var(--border) solid var(--line);
}
.do-item {
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 10px;
  align-items: center;
  padding: 14px 12px;
  border-right: var(--border) solid var(--line);
  min-width: 0;
}
.do-item:last-child {
  border-right: 0;
}
.do-item img,
.art {
  /* 裁切圖四周淡出（使用者喜歡這個效果） */
  -webkit-mask-image: radial-gradient(closest-side, #000 72%, transparent 100%);
  mask-image: radial-gradient(closest-side, #000 72%, transparent 100%);
  mix-blend-mode: multiply;
}
.do-item img {
  width: 84px;
  height: auto;
}
.do-item h3 {
  margin: 0 0 4px;
  font: 700 15px var(--font-sans);
  letter-spacing: 0.06em;
}
.do-item p {
  margin: 0;
  font: 400 13px / 1.7 var(--font-tc);
  color: var(--ink-2);
}
/* 02 精選專案 */
.featured {
  padding-top: var(--space-5);
}
.view-all {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: 500 13px var(--font-tc);
  color: var(--accent);
}
.track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 2 * 14px) / 3);
  gap: 14px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.track::-webkit-scrollbar {
  display: none;
}
@media (pointer: fine) {
  .track { cursor: grab; }
}
.track.dragging {
  cursor: grabbing;
  scroll-snap-type: none;
  user-select: none;
}
.card {
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: 46% 1fr;
  background: var(--surface);
  border: var(--border) solid var(--line);
  color: inherit;
  min-width: 0;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}
.media {
  position: relative;
  overflow: hidden;
  background: var(--surface-2);
}
/* 圖片絕對定位，卡片高度只跟文字走，不被圖片原始尺寸撐高 */
.media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
/* 蓋住裁切圖上原本印的編號 */
.badge {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 34px;
  padding: 5px 8px;
  background: #142334;
  color: #fff;
  font: 600 13px var(--font-mono);
  text-align: center;
}
.body {
  padding: 14px 16px;
  display: grid;
  gap: 6px;
  align-content: start;
  min-width: 0;
}
.c-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: var(--ink);
}
.c-head h3 {
  margin: 0;
  font: 700 17px / 1.3 var(--font-tc);
  letter-spacing: 0.04em;
}
.tagline {
  margin: 0;
  font: 500 12.5px var(--font-tc);
  color: var(--accent);
}
.sum {
  margin: 0;
  font: 400 12.5px / 1.7 var(--font-tc);
  color: var(--ink-2);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
}
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 14px 0 22px;
}
.dots button {
  width: 22px;
  height: 4px;
  border: 0;
  padding: 0;
  border-radius: 2px;
  background: var(--line);
  cursor: pointer;
  transition: background 0.2s, width 0.2s;
}
.dots button.on {
  width: 36px;
  background: var(--accent);
}
/* 03 / 04 / 05 */
.trio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: var(--border) solid var(--line);
}
.cell {
  padding: 20px 20px 22px;
  border-right: var(--border) solid var(--line);
  display: grid;
  align-content: start;
  gap: 4px;
  min-width: 0;
}
.cell:first-child {
  padding-left: 0;
}
.cell:last-child {
  border-right: 0;
  padding-right: 0;
}
.cell-body {
  display: grid;
  grid-template-columns: 1fr 104px;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
}
.art {
  width: 104px;
  height: auto;
  opacity: 0.9;
}
.text {
  margin: 0;
  font: 400 13.5px / 1.85 var(--font-tc);
  color: var(--ink);
}
.mini-tl {
  list-style: none;
  margin: 0;
  padding: 0 0 0 20px;
  position: relative;
  display: grid;
  gap: 8px;
}
.mini-tl::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 6px;
  bottom: 6px;
  width: 1px;
  background: var(--line);
}
.mini-tl li {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2px 8px;
  align-items: baseline;
  font: 400 12.5px / 1.5 var(--font-tc);
}
.mini-tl li::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--ink-3);
  background: var(--paper);
}
.mini-tl li.now::before {
  border-color: var(--accent);
  background: var(--accent);
}
.mini-tl .pd {
  font: 500 11.5px var(--font-mono);
  color: var(--ink-2);
  min-width: 92px;
}
.mini-tl b {
  font-weight: 700;
}
.mini-tl .ti {
  color: var(--ink-2);
}
.quote {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 8px;
  color: var(--accent);
}
.quote strong {
  display: block;
  font: 800 15px / 1.4 var(--font-tc);
  color: var(--ink);
  letter-spacing: 0.04em;
}
.quote p {
  margin: 6px 0 0;
  font: 400 12.5px / 1.7 var(--font-tc);
  color: var(--ink-2);
}
.cell-btn {
  justify-self: start;
  padding: 8px 18px;
  font-size: 13px;
}
/* 線稿圖是白底：晚上模式反相成深底藍線 */
[data-theme='dark'] .do-item img,
[data-theme='dark'] .art {
  mix-blend-mode: normal;
  filter: invert(1) hue-rotate(180deg) brightness(0.85);
  opacity: 0.8;
}
@media (max-width: 1180px) {
  .hero { grid-template-columns: 1fr; }
  .side, .cm { display: none; }
  .visual { max-width: 820px; }
  .do { grid-template-columns: repeat(2, 1fr); }
  .do-head { grid-column: 1 / -1; border-right: 0; border-bottom: var(--border) solid var(--line); padding-block: 14px; }
  .do-item:nth-child(3) { border-right: 0; }
  .do-item:nth-child(-n + 3) { border-bottom: var(--border) solid var(--line); }
  .do-item:nth-child(n) { border-right: var(--border) solid var(--line); }
  .do-item:nth-child(odd) { border-right: 0; }
  .track { grid-auto-columns: calc((100% - 14px) / 2); }
  .trio { grid-template-columns: 1fr; }
  .cell { padding-inline: 0; border-right: 0; border-bottom: var(--border) solid var(--line); }
}
@media (max-width: 640px) {
  .name { white-space: normal; }
  .do { grid-template-columns: 1fr; }
  .do-item { border-right: 0 !important; border-bottom: var(--border) solid var(--line); }
  .track { grid-auto-columns: 88%; }
  .card { grid-template-columns: 1fr; }
  .media { aspect-ratio: 2 / 1; }
}
</style>
