<template>
  <q-page>
    <div class="container">
      <PageHero :eyebrow="t('experience.tagline')" :title="t('experience.title')" :subtitle="t('experience.subtitle')" :image="heroImages.experience" :image-alt="t('experience.title')">
        <p class="hero-lead">{{ t('experience.lead') }}</p>
      </PageHero>

      <div class="cols">
        <section class="block">
          <BlockHeading index="01" :title="t('experience.work')" :sub="t('experience.workZh')" />
          <ol class="timeline">
            <li v-for="(e, i) in experience" :key="e.id" :class="{ now: i === 0 }">
              <div class="period">{{ e.period }}</div>
              <div class="body">
                <h3>{{ pick(e.company) }}</h3>
                <div class="title">{{ pick(e.title) }}</div>
                <p>{{ pick(e.summary) }}</p>
                <ul><li v-for="x in pick(e.points)" :key="x">{{ x }}</li></ul>
              </div>
            </li>
          </ol>
        </section>

        <div>
          <section class="block">
            <BlockHeading index="02" :title="t('experience.skills')" :sub="t('experience.skillsZh')" />
            <div class="skills">
              <div v-for="(g, i) in skills" :key="g.id" class="s-card">
                <div class="s-head"><span class="s-no">{{ String(i + 1).padStart(2, '0') }}</span><q-icon :name="SKILL_ICONS[i]" size="26px" /></div>
                <h4>{{ pick(g.name) }}</h4>
                <ul><li v-for="x in pick(g.items)" :key="x">{{ x }}</li></ul>
              </div>
            </div>
          </section>
          <section class="block">
            <BlockHeading index="03" :title="t('experience.tools')" :sub="t('experience.toolsZh')" />
            <ul class="tools">
              <li v-for="x in TOOLS" :key="x.name"><q-icon :name="x.icon" size="28px" />{{ x.name }}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useMeta } from 'quasar'
import {
  mdiAccessPointNetwork, mdiServerOutline, mdiDatabaseOutline, mdiBrain, mdiRobotIndustrialOutline, mdiMonitorDashboard, mdiDocker, mdiClipboardCheckOutline,
  mdiGitlab, mdiLinux, mdiWeb, mdiSourceBranch,
} from '@quasar/extras/mdi-v7'
import PageHero from '@/components/ui/PageHero.vue'
import BlockHeading from '@/components/ui/BlockHeading.vue'
import { experience } from '@/data/experience'
import { skills } from '@/data/skills'
import { heroImages } from '@/data/images'
import { useLocale } from '@/composables/useLocale'

const SKILL_ICONS = [mdiAccessPointNetwork, mdiServerOutline, mdiDatabaseOutline, mdiBrain, mdiRobotIndustrialOutline, mdiMonitorDashboard, mdiDocker, mdiClipboardCheckOutline]
// 只放 104 有寫的工具
const TOOLS = [
  { name: 'Docker', icon: mdiDocker },
  { name: 'GitLab', icon: mdiGitlab },
  { name: 'Ubuntu', icon: mdiLinux },
  { name: 'Nginx', icon: mdiWeb },
  { name: 'Git', icon: mdiSourceBranch },
]

const { t } = useI18n()
const { pick } = useLocale()
useMeta(() => ({ title: `${t('pages.experience')}｜${pick({ zh: '潘建宇', en: 'Pan Chien-Yu' })}` }))
</script>

<style scoped>
.hero-lead {
  text-wrap: pretty;
  font: 400 15px / 1.95 var(--font-tc);
  margin: 18px 0 0;
  padding-left: 14px;
  border-left: 2px solid var(--accent);
  max-width: 30em;
}
.cols {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  border-top: var(--border) solid var(--line);
  margin-bottom: var(--space-6);
}
.cols > :first-child {
  border-right: var(--border) solid var(--line);
}
.block {
  padding: 28px 24px;
  min-width: 0;
}
.block + .block {
  border-top: var(--border) solid var(--line);
}
.timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 28px;
  position: relative;
  display: grid;
  gap: var(--space-6);
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 1.5px;
  background: var(--line);
}
.timeline > li {
  position: relative;
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: var(--space-4);
}
.timeline > li::before {
  content: '';
  position: absolute;
  left: -28px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2.5px solid var(--ink-3);
  background: var(--paper);
}
.timeline > li.now::before {
  border-color: var(--accent);
}
.period {
  font: 500 13px var(--font-mono);
  color: var(--ink-2);
  padding-top: 2px;
}
.now .period {
  color: var(--accent);
}
.body h3 {
  margin: 0;
  font: 700 17px var(--font-tc);
}
.body .title {
  font: 500 14px var(--font-tc);
  color: var(--accent);
  margin: 2px 0 8px;
}
.body p {
  margin: 0 0 8px;
  font: 400 14px / 1.8 var(--font-tc);
}
.body ul {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 4px;
  font: 400 13.5px / 1.7 var(--font-tc);
  color: var(--ink-2);
}
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.s-card {
  background: var(--surface);
  border: var(--border) solid var(--line);
  padding: 16px;
  min-width: 0;
}
.s-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--accent);
}
.s-no {
  font: 500 12px var(--font-mono);
  color: var(--ink-2);
}
.s-card h4 {
  margin: 8px 0 8px;
  font: 700 15px var(--font-tc);
}
.s-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 3px;
  font: 400 13px / 1.6 var(--font-sans);
  color: var(--ink-2);
}
.tools {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.tools li {
  display: grid;
  justify-items: center;
  gap: 6px;
  min-width: 96px;
  padding: 14px 10px;
  background: var(--surface);
  border: var(--border) solid var(--line);
  font: 500 13px var(--font-sans);
}
.tools .q-icon {
  color: var(--accent);
}
@media (max-width: 1180px) {
  .cols { grid-template-columns: 1fr; }
  .cols > :first-child { border-right: 0; border-bottom: var(--border) solid var(--line); }
}
@media (max-width: 640px) {
  .block { padding-inline: 0; }
  .timeline > li { grid-template-columns: 1fr; gap: 4px; }
  .skills { grid-template-columns: 1fr; }
}
</style>
