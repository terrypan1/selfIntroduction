<template>
  <q-page>
    <div v-if="project && detail" class="container">
      <section class="hero">
        <CrossMark class="cm cm-tl" /><CrossMark class="cm cm-tr" />
        <div class="intro">
          <router-link to="/projects" class="back"><q-icon :name="mdiArrowLeft" size="16px" />{{ t('detail.back') }}</router-link>
          <div class="no">{{ no }}</div>
          <DisplayTitle class="title" :style="{ fontSize: fitTitle(pick(detail.title), 104) }">{{ pick(detail.title) }}</DisplayTitle>
          <div v-if="locale === 'en'" class="sub-en">{{ detail.subEn }}</div>
          <div v-else class="sub-zh">{{ pick(detail.sub) }}</div>
          <div class="tagline">{{ t('detail.tagline') }}</div>
          <p class="summary">{{ pick(project.summary) }}</p>
        </div>
        <div class="visual"><HeroImage :src="heroImages[detail.image]" :alt="pick(project.name)" /></div>
      </section>

      <dl class="meta">
        <div><dt><q-icon :name="mdiShapeOutline" size="20px" />{{ t('detail.type') }}</dt><dd>{{ pick(detail.type) }}</dd></div>
        <div><dt><q-icon :name="mdiClockOutline" size="20px" />{{ t('detail.period') }}</dt><dd>{{ pick(project.period) }}</dd></div>
        <div><dt><q-icon :name="mdiAccountOutline" size="20px" />{{ t('detail.role') }}</dt><dd>{{ pick(project.role) }}</dd></div>
        <div><dt><q-icon :name="mdiMapMarkerOutline" size="20px" />{{ t('detail.env') }}</dt><dd>{{ pick(detail.env) }}</dd></div>
      </dl>

      <div class="cols">
        <section class="block">
          <BlockHeading index="02" :title="t('detail.overview')" :sub="t('detail.overviewZh')" />
          <div class="diagram" :aria-label="t('detail.overview')">
            <div class="row">
              <div v-for="b in detail.diagram.top" :key="b.zh" class="node">{{ b[locale] }}</div>
            </div>
            <div class="links"><i v-for="n in 4" :key="n" /></div>
            <div class="core">{{ pick(detail.diagram.core) }}</div>
            <div class="links"><i v-for="n in 4" :key="n" /></div>
            <div class="row">
              <div v-for="b in detail.diagram.bottom" :key="b.zh" class="node soft">{{ b[locale] }}</div>
            </div>
          </div>
        </section>

        <section class="block">
          <BlockHeading index="03" :title="t('detail.features')" :sub="t('detail.featuresZh')" />
          <ul class="features">
            <li v-for="(f, i) in pick(detail.features)" :key="f"><q-icon :name="FEATURE_ICONS[i % FEATURE_ICONS.length]" size="20px" />{{ f }}</li>
          </ul>
        </section>
      </div>

      <section class="block wide">
        <BlockHeading index="04" :title="t('detail.screens')" :sub="t('detail.screensZh')" />
        <div v-if="project.images.length" class="shots"><img v-for="src in project.images" :key="src" :src="src" :alt="pick(project.name)" loading="lazy" /></div>
        <div v-else class="shots-empty"><ProjectGlyph :kind="project.category" class="glyph" /><span>{{ t('detail.screensPending') }}</span></div>
      </section>

      <div class="cols">
        <section class="block">
          <BlockHeading index="05" :title="t('detail.details')" :sub="t('detail.detailsZh')" />
          <div class="decision"><small>{{ t('detail.decision') }}</small>{{ pick(project.decision) }}</div>
          <div v-for="sec in project.sections" :key="sec.heading.zh" class="sec">
            <h3>{{ pick(sec.heading) }}</h3>
            <ul><li v-for="it in pick(sec.items)" :key="it">{{ it }}</li></ul>
          </div>
        </section>

        <section class="block">
          <BlockHeading index="06" :title="t('detail.impact')" :sub="t('detail.impactZh')" />
          <ul class="impact">
            <li v-for="(x, i) in pick(detail.impact)" :key="x"><q-icon :name="IMPACT_ICONS[i % IMPACT_ICONS.length]" size="20px" />{{ x }}</li>
          </ul>
          <BlockHeading index="07" :title="t('detail.stack')" :sub="t('detail.stackZh')" class="stack-h" />
          <div class="tags"><TechTag v-for="x in project.tech" :key="x">{{ x }}</TechTag></div>
        </section>
      </div>

      <nav class="pager">
        <router-link v-if="prev" :to="`/projects/${prev.id}`" class="pg"><small><q-icon :name="mdiArrowLeft" size="14px" />{{ t('detail.prev') }}</small><b>{{ pick(prev.name) }}</b></router-link>
        <span v-else />
        <router-link v-if="next" :to="`/projects/${next.id}`" class="pg right"><small>{{ t('detail.next') }}<q-icon :name="mdiArrowRight" size="14px" /></small><b>{{ pick(next.name) }}</b></router-link>
      </nav>
    </div>

    <PendingPage v-else title="404" :eyebrow="t('detail.notFound')" />
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMeta } from 'quasar'
import {
  mdiAccountOutline, mdiArrowLeft, mdiArrowRight, mdiClockOutline, mdiMapMarkerOutline, mdiShapeOutline,
  mdiCalendarCheckOutline, mdiClipboardTextOutline, mdiMonitorDashboard, mdiMapOutline, mdiLanConnect, mdiTimerOutline, mdiShieldCheckOutline, mdiRobotIndustrialOutline,
  mdiCheckDecagramOutline, mdiAccountGroupOutline, mdiServerNetwork, mdiTrendingUp,
} from '@quasar/extras/mdi-v7'
import CrossMark from '@/components/ui/CrossMark.vue'
import DisplayTitle from '@/components/ui/DisplayTitle.vue'
import HeroImage from '@/components/ui/HeroImage.vue'
import BlockHeading from '@/components/ui/BlockHeading.vue'
import TechTag from '@/components/ui/TechTag.vue'
import ProjectGlyph from '@/components/ui/ProjectGlyph.vue'
import PendingPage from '@/components/PendingPage.vue'
import { projects } from '@/data/projects'
import { projectDetails } from '@/data/projectDetails'
import { heroImages } from '@/data/images'
import { useLocale } from '@/composables/useLocale'
import { fitTitle } from '@/composables/fitTitle'

const FEATURE_ICONS = [mdiCalendarCheckOutline, mdiClipboardTextOutline, mdiShieldCheckOutline, mdiMapOutline, mdiMonitorDashboard, mdiLanConnect, mdiTimerOutline, mdiRobotIndustrialOutline]
const IMPACT_ICONS = [mdiCheckDecagramOutline, mdiServerNetwork, mdiAccountGroupOutline, mdiTrendingUp]

const route = useRoute()
const { t } = useI18n()
const { pick, locale } = useLocale()

const idx = computed(() => projects.findIndex((p) => p.id === route.params.id))
const project = computed(() => projects[idx.value])
const detail = computed(() => (project.value ? projectDetails[project.value.id] : undefined))
const no = computed(() => String(idx.value + 1).padStart(2, '0'))
const prev = computed(() => (idx.value > 0 ? projects[idx.value - 1] : undefined))
const next = computed(() => (idx.value >= 0 && idx.value < projects.length - 1 ? projects[idx.value + 1] : undefined))

useMeta(() => ({
  title: project.value ? `${pick(project.value.name)}｜${pick({ zh: '潘建宇', en: 'Pan Chien-Yu' })}` : t('detail.notFound'),
  meta: { description: { name: 'description', content: project.value ? pick(project.value.summary) : '' } },
}))
</script>

<style scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: var(--space-6);
  padding-block: 28px 30px;
  align-items: center;
}
.cm-tl { left: -26px; top: 12px; }
.cm-tr { right: -26px; top: 12px; }
.intro {
  container-type: inline-size;
  min-width: 0;
}
.back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font: 500 12px var(--font-mono);
  letter-spacing: 0.16em;
  color: var(--accent);
}
.no {
  font: 700 16px var(--font-mono);
  margin: 26px 0 6px;
}
.title {
  white-space: nowrap;
}
.sub-en {
  font: 500 clamp(18px, 5.2cqi, 32px) / 1.2 var(--font-sans);
  letter-spacing: 0.14em;
  margin-top: 10px;
}
.sub-zh {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
  font: 700 clamp(14px, 3.2cqi, 18px) var(--font-tc);
  letter-spacing: 0.4em;
}
.sub-zh::before {
  content: '';
  width: 36px;
  height: 1px;
  background: var(--ink);
  flex: none;
}
.tagline {
  margin: 16px 0 18px;
  font: 400 11.5px var(--font-sans);
  letter-spacing: 0.3em;
  color: var(--ink-3);
}
.summary {
  margin: 0;
  font: 400 15px / 1.95 var(--font-tc);
  max-width: 32em;
}
.meta {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: var(--border) solid var(--line);
  border-bottom: var(--border) solid var(--line);
}
.meta div {
  padding: 18px 20px;
  border-right: var(--border) solid var(--line);
  min-width: 0;
}
.meta div:last-child {
  border-right: 0;
}
.meta dt {
  display: flex;
  gap: 10px;
  align-items: center;
  font: 500 11.5px var(--font-sans);
  letter-spacing: 0.08em;
  color: var(--ink);
}
.meta dt .q-icon {
  color: var(--accent);
}
.meta dd {
  margin: 6px 0 0 30px;
  font: 400 14px / 1.6 var(--font-tc);
  color: var(--ink-2);
}
.cols {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  border-bottom: var(--border) solid var(--line);
}
.cols > .block + .block {
  border-left: var(--border) solid var(--line);
}
.block {
  padding: 28px 24px 30px;
  min-width: 0;
}
.block.wide {
  border-bottom: var(--border) solid var(--line);
}
.diagram {
  display: grid;
  gap: 0;
}
.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.node {
  border: var(--border) solid var(--accent-2);
  background: var(--surface);
  padding: 10px 8px;
  text-align: center;
  font: 500 13px / 1.4 var(--font-tc);
  border-radius: var(--radius);
}
.node.soft {
  border-color: var(--line);
}
.links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  height: 26px;
}
.links i {
  justify-self: center;
  width: 1px;
  background: var(--accent);
  position: relative;
}
.links i::after {
  content: '';
  position: absolute;
  left: -3px;
  bottom: 0;
  border-left: 3.5px solid transparent;
  border-right: 3.5px solid transparent;
  border-top: 6px solid var(--accent);
}
.core {
  border: 1.5px solid var(--accent);
  background: var(--accent-soft);
  color: var(--accent);
  text-align: center;
  padding: 14px;
  font: 600 14px var(--font-sans);
  border-radius: var(--radius);
}
.features,
.impact {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}
.features {
  grid-template-columns: 1fr 1fr;
}
.features li,
.impact li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font: 400 14px / 1.55 var(--font-tc);
}
.features .q-icon,
.impact .q-icon {
  color: var(--accent);
  flex: none;
  margin-top: 1px;
}
.shots {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
}
.shots img {
  width: 100%;
  border: var(--border) solid var(--line);
}
.shots-empty {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5);
  border: 1px dashed var(--accent-2);
  background: var(--surface);
  color: var(--ink-2);
  font: 400 14px var(--font-tc);
}
.shots-empty .glyph {
  width: 160px;
  height: 80px;
  flex: none;
}
.decision {
  border-left: 2px solid var(--accent);
  padding: 2px 0 2px 14px;
  font: 500 15px / 1.7 var(--font-tc);
  margin-bottom: var(--space-5);
}
.decision small {
  display: block;
  font: 500 11px var(--font-mono);
  letter-spacing: 0.14em;
  color: var(--accent);
}
.sec + .sec {
  margin-top: var(--space-5);
}
.sec h3 {
  margin: 0 0 8px;
  font: 700 15px var(--font-tc);
}
.sec ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 6px;
  font: 400 14px / 1.75 var(--font-tc);
  color: var(--ink-2);
}
.stack-h {
  margin-top: var(--space-6);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.pager {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  padding-block: var(--space-6);
}
.pg {
  display: grid;
  gap: 4px;
  max-width: 48%;
  color: inherit;
}
.pg.right {
  text-align: right;
  justify-items: end;
}
.pg small {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: 500 11px var(--font-mono);
  letter-spacing: 0.14em;
  color: var(--accent);
}
.pg b {
  font: 700 16px / 1.4 var(--font-tc);
}
.pg:hover b {
  color: var(--accent);
}
@media (max-width: 1180px) {
  .hero { grid-template-columns: 1fr; }
  .cm { display: none; }
  .visual { max-width: 760px; }
  .cols { grid-template-columns: 1fr; }
  .cols > .block + .block { border-left: 0; border-top: var(--border) solid var(--line); }
  .meta { grid-template-columns: 1fr 1fr; }
  .meta div:nth-child(2) { border-right: 0; }
  .meta div:nth-child(-n + 2) { border-bottom: var(--border) solid var(--line); }
}
@media (max-width: 640px) {
  .meta { grid-template-columns: 1fr; }
  .meta div { border-right: 0; border-bottom: var(--border) solid var(--line); }
  .row, .links { gap: 6px; }
  .node { font-size: 11.5px; padding: 8px 4px; }
  .features { grid-template-columns: 1fr; }
  .block { padding-inline: 0; }
  .shots-empty { flex-direction: column; align-items: flex-start; }
}
</style>
