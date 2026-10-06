<template>
  <q-page>
    <div class="container">
      <PageHero :eyebrow="t('common.eyebrow')" :title="t('about.title')" :subtitle="t('about.subtitle')" :image="heroImages.about" :image-alt="t('about.title')" :active="1">
        <div class="who"><b>{{ pick(profile.display) }}</b> <span>{{ pick(profile.alias) }}</span></div>
        <div class="role">{{ pick(profile.title) }}</div>
        <div class="field">{{ pick(profile.field) }}</div>
        <p class="lead">{{ pick(profile.intro) }}</p>
        <div class="btns">
          <SiteButton to="/projects" arrow>{{ t('common.viewProjects') }}</SiteButton>
          <SiteButton to="/contact" variant="ghost">{{ t('common.contactMe') }}</SiteButton>
        </div>
      </PageHero>

      <section>
        <SectionHeading index="01" :title="t('about.journey')" :desc="t('about.journeyDesc')" />
        <ol class="journey">
          <li v-for="(s, i) in journey" :key="s[0]">
            <div class="j-head"><span class="j-no">{{ String(i + 1).padStart(2, '0') }}</span><b>{{ s[0] }}</b></div>
            <div class="j-body"><q-icon :name="JOURNEY_ICONS[i]" size="40px" /><p>{{ s[1] }}</p></div>
          </li>
        </ol>
      </section>

      <section>
        <SectionHeading index="02" :title="t('about.focus')" :desc="t('about.focusDesc')" />
        <div class="focus">
          <router-link v-for="(f, i) in focus" :key="f[0]" :to="FOCUS_LINKS[i]" class="f-card">
            <div class="f-head"><span class="j-no">{{ String(i + 1).padStart(2, '0') }}</span><h3>{{ f[0] }}</h3><q-icon :name="mdiArrowRight" size="20px" class="arrow" /></div>
            <div class="f-body"><div class="f-media"><ProjectGlyph :kind="FOCUS_KINDS[i]" /></div><p>{{ f[1] }}</p></div>
            <div class="tags"><TechTag v-for="x in FOCUS_TAGS[i]" :key="x">{{ x }}</TechTag></div>
          </router-link>
        </div>
      </section>

      <section>
        <SectionHeading index="03" :title="t('about.principles')" :desc="t('about.principlesDesc')" />
        <div class="principles">
          <div v-for="(p, i) in principles" :key="p[0]" class="p-card">
            <q-icon :name="PRINCIPLE_ICONS[i]" size="36px" />
            <div><div class="p-head"><b>{{ p[0] }}</b><span>{{ String(i + 1).padStart(2, '0') }}</span></div><p>{{ p[1] }}</p></div>
          </div>
        </div>
      </section>

      <section class="two">
        <div>
          <SectionHeading index="04" :title="t('about.story')" :desc="t('about.storyDesc')" />
          <p class="story-sum" v-html="pick(autobiography.summary)" />
          <div v-show="open" class="story-full">
            <div v-for="s in autobiographyFull" :key="s.heading.zh"><h3>{{ pick(s.heading) }}</h3><p>{{ pick(s.body) }}</p></div>
          </div>
          <button type="button" class="more" :aria-expanded="open" @click="open = !open">{{ open ? t('about.readLess') : t('about.readMore') }}<q-icon :name="open ? mdiChevronUp : mdiChevronDown" size="18px" /></button>
        </div>
        <div>
          <SectionHeading index="05" :title="t('about.profile')" />
          <dl class="profile">
            <div><dt>{{ t('about.education') }}</dt><dd>{{ pick(credentials.education) }}</dd></div>
            <div><dt>{{ t('about.licenses') }}</dt><dd><span v-for="x in pick(credentials.licenses)" :key="x">{{ x }}</span></dd></div>
            <div><dt>{{ t('about.languages') }}</dt><dd>{{ pick(credentials.languages).join('、') }}</dd></div>
            <div><dt>{{ t('about.availability') }}</dt><dd>{{ pick(credentials.availability) }}</dd></div>
          </dl>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMeta } from 'quasar'
import {
  mdiArrowRight, mdiChevronDown, mdiChevronUp, mdiCogOutline, mdiCodeTags, mdiDatabaseOutline, mdiRobotIndustrialOutline, mdiRobotOutline,
  mdiFactory, mdiPuzzleOutline, mdiShieldCheckOutline, mdiBookOpenPageVariantOutline,
} from '@quasar/extras/mdi-v7'
import PageHero from '@/components/ui/PageHero.vue'
import SiteButton from '@/components/ui/SiteButton.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechTag from '@/components/ui/TechTag.vue'
import ProjectGlyph from '@/components/ui/ProjectGlyph.vue'
import { profile } from '@/data/profile'
import { credentials } from '@/data/credentials'
import { autobiography, autobiographyFull } from '@/data/autobiography'
import { heroImages } from '@/data/images'
import { useLocale } from '@/composables/useLocale'
import type { ProjectCategory } from '@/data/types'

const JOURNEY_ICONS = [mdiCogOutline, mdiCodeTags, mdiDatabaseOutline, mdiRobotIndustrialOutline, mdiRobotOutline]
const PRINCIPLE_ICONS = [mdiFactory, mdiPuzzleOutline, mdiShieldCheckOutline, mdiBookOpenPageVariantOutline]
const FOCUS_KINDS: ProjectCategory[] = ['agv', 'agv', 'ai', 'web']
const FOCUS_LINKS = ['/projects/agv', '/projects/agv', '/projects?category=ai', '/projects?category=system']
// 只放 104 有的技術
const FOCUS_TAGS = [['AGV', 'iMCS', 'SignalR', 'Quartz'], ['ROS 1 Noetic', 'SLAM', 'CANopen', 'VDA5050'], ['PP-OCRv5', 'PP-DocLayoutV2', 'FastAPI'], ['Vue 3', 'Quasar', '.NET', 'Docker']]

const { t, tm } = useI18n()
const { pick } = useLocale()
const journey = computed(() => tm('about.journeySteps') as [string, string][])
const focus = computed(() => tm('about.focusItems') as [string, string][])
const principles = computed(() => tm('about.principleItems') as [string, string][])
const open = ref(false)

useMeta(() => ({ title: `${t('pages.about')}｜${pick(profile.name)}` }))
</script>

<style scoped>
section {
  padding-bottom: var(--space-6);
}
.who b {
  font: 700 clamp(20px, 4.6cqi, 26px) var(--font-sans);
  letter-spacing: 0.04em;
}
.who span {
  font: 400 clamp(18px, 4cqi, 22px) var(--font-sans);
  color: var(--ink-2);
}
.role {
  font: 500 clamp(18px, 4.4cqi, 24px) var(--font-sans);
  margin-top: 4px;
}
.field {
  font: 400 clamp(13px, 3cqi, 17px) var(--font-sans);
  color: var(--ink-2);
  margin-top: 4px;
}
.lead {
  text-wrap: pretty;
  font: 400 15px / 1.95 var(--font-tc);
  margin: 18px 0 22px;
  padding-left: 14px;
  border-left: 2px solid var(--accent);
  max-width: 30em;
}
.btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.j-no {
  font: 600 14px var(--font-mono);
  color: var(--accent);
  border: var(--border) solid var(--line);
  padding: 2px 6px;
}
.journey {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}
.journey li {
  background: var(--surface);
  border: var(--border) solid var(--line);
  padding: 16px;
  display: grid;
  gap: 12px;
  align-content: start;
}
.j-head {
  display: flex;
  gap: 12px;
  align-items: center;
}
.j-head b {
  font: 700 16px var(--font-tc);
}
.j-body {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 12px;
  align-items: start;
}
.j-body .q-icon {
  color: var(--accent);
}
.j-body p,
.f-body p,
.p-card p {
  margin: 0;
  font: 400 13.5px / 1.75 var(--font-tc);
  color: var(--ink-2);
}
.focus {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.f-card {
  background: var(--surface);
  border: var(--border) solid var(--line);
  padding: 16px;
  display: grid;
  gap: 12px;
  align-content: start;
  color: inherit;
  transition: border-color 0.15s;
}
.f-card:hover {
  border-color: var(--accent);
}
.f-head {
  display: flex;
  gap: 10px;
  align-items: center;
}
.f-head h3 {
  margin: 0;
  font: 700 16px / 1.3 var(--font-sans);
}
.arrow {
  margin-left: auto;
  color: var(--accent);
}
.f-body {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 12px;
}
.f-media {
  aspect-ratio: 4 / 3;
  background: var(--surface-2);
  display: grid;
  place-items: center;
  padding: 6px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.principles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.p-card {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 14px;
  background: var(--surface);
  border: var(--border) solid var(--line);
  padding: 18px;
}
.p-card .q-icon {
  color: var(--accent);
}
.p-head {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
}
.p-head b {
  font: 700 16px var(--font-tc);
}
.p-head span {
  font: 500 11px var(--font-mono);
  color: var(--ink-3);
}
.two {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-6);
}
.story-sum {
  font: 500 17px / 1.9 var(--font-tc);
  margin: 0 0 var(--space-4);
}
.story-sum :deep(mark) {
  background: none;
  color: var(--accent);
}
.story-full {
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}
.story-full h3 {
  margin: 0 0 4px;
  font: 700 15px var(--font-tc);
}
.story-full p {
  margin: 0;
  font: 400 14.5px / 1.9 var(--font-tc);
  color: var(--ink-2);
}
.more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 0;
  padding: 0;
  font: 500 13px var(--font-mono);
  letter-spacing: 0.08em;
  color: var(--accent);
  cursor: pointer;
}
.profile {
  margin: 0;
  display: grid;
  gap: 0;
  background: var(--surface);
  border: var(--border) solid var(--line);
}
.profile div {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: var(--space-4);
  padding: 14px 18px;
  border-bottom: var(--border) solid var(--line);
}
.profile div:last-child {
  border-bottom: 0;
}
.profile dt {
  font: 500 13px var(--font-tc);
  color: var(--ink-2);
}
.profile dd {
  margin: 0;
  font: 400 14px / 1.7 var(--font-tc);
  display: grid;
}
@media (max-width: 1180px) {
  .journey { grid-template-columns: repeat(3, 1fr); }
  .focus, .principles { grid-template-columns: repeat(2, 1fr); }
  .two { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .journey, .focus, .principles { grid-template-columns: 1fr; }
}
</style>
