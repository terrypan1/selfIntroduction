<template>
  <q-page>
    <div class="container">
      <PageHero :eyebrow="t('common.eyebrow')" :title="t('projects.title')" :subtitle="t('projects.subtitle')" :image="heroImages.projectsPage" :image-alt="t('projects.title')" :label="t('projects.label')" />

      <div class="bar">
        <div class="filters" role="tablist">
          <button v-for="f in FILTERS" :key="f" type="button" role="tab" :aria-selected="filter === f" :class="{ on: filter === f }" @click="setFilter(f)">{{ t(`projects.filters.${f}`) }}</button>
        </div>
        <span class="count">{{ t('projects.count', { n: list.length }) }}</span>
      </div>

      <router-link v-if="lead" :to="`/projects/${lead.p.id}`" class="lead">
        <div class="lead-text">
          <div class="lead-head"><span class="no">{{ lead.no }}</span><h2>{{ pick(lead.p.name) }}</h2><q-icon :name="mdiArrowRight" size="22px" class="arrow" /></div>
          <p class="tagline">{{ pick(lead.p.tagline) }}</p>
          <p class="summary">{{ pick(lead.p.summary) }}</p>
          <div class="tags"><TechTag v-for="x in lead.p.tech.slice(0, 5)" :key="x">{{ x }}</TechTag></div>
        </div>
        <div class="lead-media"><HeroImage :src="heroImages[projectDetails[lead.p.id]?.image ?? 'home']" :alt="pick(lead.p.name)" /></div>
        <dl class="lead-meta">
          <div><dt><q-icon :name="mdiAccountOutline" size="20px" />{{ t('projects.role') }}</dt><dd>{{ pick(lead.p.role) }}</dd></div>
          <div><dt><q-icon :name="mdiLayersOutline" size="20px" />{{ t('projects.stack') }}</dt><dd>{{ lead.p.tech.slice(0, 6).join(' · ') }}</dd></div>
          <div><dt><q-icon :name="mdiTarget" size="20px" />{{ t('projects.scope') }}</dt><dd>{{ pick(lead.p.highlights).slice(0, 2).join('；') }}</dd></div>
          <div><dt><q-icon :name="mdiChartBoxOutline" size="20px" />{{ t('projects.outcome') }}</dt><dd>{{ pick(lead.p.decision) }}</dd></div>
        </dl>
      </router-link>

      <div class="grid">
        <router-link v-for="item in rest" :key="item.p.id" :to="`/projects/${item.p.id}`" class="card">
          <div class="card-head"><span class="no">{{ item.no }}</span><h3>{{ pick(item.p.name) }}</h3><q-icon :name="mdiArrowRight" size="20px" class="arrow" /></div>
          <p class="tagline">{{ pick(item.p.tagline) }}</p>
          <div class="card-body">
            <div class="card-media"><ProjectGlyph :kind="item.p.category" /></div>
            <p class="summary">{{ pick(item.p.summary) }}</p>
          </div>
          <div class="tags"><TechTag v-for="x in item.p.tech.slice(0, 4)" :key="x">{{ x }}</TechTag></div>
        </router-link>
      </div>

      <section class="process">
        <div class="process-title"><b>{{ t('projects.process') }}</b><span>{{ t('projects.processZh') }}</span></div>
        <ol>
          <li v-for="(s, i) in steps" :key="s[0]">
            <q-icon :name="STEP_ICONS[i]" size="24px" />
            <div><small>{{ String(i + 1).padStart(2, '0') }}</small><b>{{ s[0] }}</b><span>{{ s[1] }}</span></div>
          </li>
        </ol>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMeta } from 'quasar'
import { mdiAccountOutline, mdiArrowRight, mdiChartBoxOutline, mdiCodeTags, mdiCloudUploadOutline, mdiCubeOutline, mdiFileDocumentOutline, mdiCheckCircleOutline, mdiChartLine, mdiLayersOutline, mdiTarget } from '@quasar/extras/mdi-v7'
import PageHero from '@/components/ui/PageHero.vue'
import HeroImage from '@/components/ui/HeroImage.vue'
import TechTag from '@/components/ui/TechTag.vue'
import ProjectGlyph from '@/components/ui/ProjectGlyph.vue'
import { projects } from '@/data/projects'
import { projectDetails } from '@/data/projectDetails'
import { heroImages } from '@/data/images'
import { useLocale } from '@/composables/useLocale'

const FILTERS = ['all', 'agv', 'ai', 'system'] as const
type Filter = (typeof FILTERS)[number]
const STEP_ICONS = [mdiFileDocumentOutline, mdiCubeOutline, mdiCodeTags, mdiCheckCircleOutline, mdiCloudUploadOutline, mdiChartLine]

const { t, tm } = useI18n()
const { pick } = useLocale()
const route = useRoute()
const router = useRouter()

// 篩選寫在網址 ?category=，可以直接分享
const filter = computed<Filter>(() => {
  const c = route.query.category
  return FILTERS.includes(c as Filter) ? (c as Filter) : 'all'
})
function setFilter(f: Filter) {
  router.replace({ query: f === 'all' ? {} : { category: f } })
}
const numbered = projects.map((p, i) => ({ p, no: String(i + 1).padStart(2, '0') }))
const list = computed(() =>
  numbered.filter(({ p }) => filter.value === 'all' || (filter.value === 'system' ? p.category === 'web' || p.category === 'iot' : p.category === filter.value)),
)
const lead = computed(() => list.value[0])
const rest = computed(() => list.value.slice(1))
const steps = computed(() => tm('projects.steps') as [string, string][])

useMeta(() => ({ title: `${t('pages.projects')}｜${pick({ zh: '潘建宇', en: 'Pan Chien-Yu' })}` }))
</script>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  flex-wrap: wrap;
  padding-bottom: var(--space-5);
}
.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.filters button {
  font: 500 14px var(--font-sans);
  padding: 9px 22px;
  border: var(--border) solid var(--line);
  background: var(--surface);
  color: var(--ink);
  border-radius: var(--radius);
  cursor: pointer;
}
.filters button.on {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}
.count {
  margin-left: auto;
  font: 500 10.5px var(--font-mono);
  letter-spacing: 0.14em;
  color: var(--ink-2);
}
.no {
  font: 600 18px var(--font-mono);
  color: var(--accent);
}
.arrow {
  margin-left: auto;
  color: var(--accent);
  flex: none;
}
.tagline {
  margin: 4px 0 0;
  font: 400 14px var(--font-tc);
  color: var(--ink-2);
}
.summary {
  margin: 0;
  font: 400 14px / 1.85 var(--font-tc);
  color: var(--ink);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.lead {
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  gap: var(--space-5);
  border-top: var(--border) solid var(--line);
  border-bottom: var(--border) solid var(--line);
  padding-block: var(--space-5);
  color: inherit;
}
.lead:hover h2 {
  color: var(--accent);
}
.lead-text {
  display: grid;
  gap: var(--space-3);
  align-content: start;
}
.lead-head,
.card-head {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}
.lead h2 {
  margin: 0;
  font: 800 24px / 1.25 var(--font-display);
  font-variation-settings: 'wdth' 85;
  transition: color 0.15s;
}
.lead-media {
  min-width: 0;
  align-self: center;
}
.lead-meta {
  margin: 0;
  display: grid;
  gap: var(--space-4);
  align-content: start;
  border-left: var(--border) solid var(--line);
  padding-left: var(--space-5);
}
.lead-meta div {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: var(--space-3);
}
.lead-meta dt {
  display: flex;
  gap: 8px;
  align-items: center;
  font: 500 13px var(--font-sans);
  color: var(--ink);
}
.lead-meta dt .q-icon {
  color: var(--accent);
}
.lead-meta dd {
  margin: 0;
  font: 400 13px / 1.7 var(--font-tc);
  color: var(--ink-2);
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding-block: var(--space-5);
}
.card {
  display: grid;
  gap: var(--space-3);
  align-content: start;
  background: var(--surface);
  border: var(--border) solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
  color: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}
.card h3 {
  margin: 0;
  font: 700 18px / 1.35 var(--font-display);
  font-variation-settings: 'wdth' 88;
}
.card-body {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--space-4);
  align-items: start;
}
.card-media {
  aspect-ratio: 4 / 3;
  background: var(--surface-2);
  display: grid;
  place-items: center;
  padding: 8px;
}
.process {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-5);
  align-items: center;
  border-top: var(--border) solid var(--line);
  padding-block: var(--space-5);
  margin-bottom: var(--space-5);
}
.process-title b {
  display: block;
  font: 600 15px var(--font-sans);
  letter-spacing: var(--track-nav);
}
.process-title span {
  font: 400 13px var(--font-tc);
  color: var(--ink-2);
}
.process ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-3);
}
.process li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--accent);
}
.process li div {
  display: grid;
  color: var(--ink);
}
.process small {
  font: 500 10.5px var(--font-mono);
  color: var(--ink-2);
}
.process li b {
  font: 500 12.5px / 1.35 var(--font-sans);
}
.process li span {
  font: 400 11.5px / 1.5 var(--font-tc);
  color: var(--ink-2);
}
@media (max-width: 1180px) {
  .lead { grid-template-columns: 1fr 1fr; }
  .lead-meta { grid-column: 1 / -1; border-left: 0; padding-left: 0; grid-template-columns: 1fr 1fr; }
  .grid { grid-template-columns: repeat(2, 1fr); }
  .process { grid-template-columns: 1fr; }
  .process ol { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 720px) {
  .count { margin-left: 0; }
  .lead { grid-template-columns: 1fr; }
  .lead-meta { grid-template-columns: 1fr; }
  .grid { grid-template-columns: 1fr; }
  .process ol { grid-template-columns: 1fr 1fr; }
}
</style>
