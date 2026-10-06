<template>
  <q-page>
    <div class="container">
      <PageHero :eyebrow="t('common.eyebrow')" :title="t('contact.title')" :image="heroImages.contactPage" photo :image-alt="t('contact.title')">
        <p class="welcome">{{ t('contact.welcome') }}</p>
        <div class="btns">
          <a class="btn primary" :href="`mailto:${profile.email}`">{{ t('contact.sendEmail') }}<q-icon :name="mdiArrowRight" size="18px" /></a>
          <button type="button" class="btn" @click="copy(profile.email)"><q-icon :name="copied ? mdiCheck : mdiContentCopy" size="18px" />{{ copied ? t('common.copied') : t('contact.copyEmail') }}</button>
        </div>
      </PageHero>

      <section>
        <SectionHeading index="01" :title="t('contact.info')" :desc="t('contact.infoDesc')" />
        <div class="info">
          <div class="i-card">
            <span class="i-no">01</span>
            <div class="i-head"><q-icon :name="mdiEmailOutline" size="30px" /><b>{{ t('contact.email') }}</b></div>
            <div class="i-value">{{ profile.email }}</div>
            <p>{{ t('contact.emailDesc') }}</p>
            <div class="i-actions">
              <a :href="`mailto:${profile.email}`">{{ t('contact.sendEmail') }}<q-icon :name="mdiArrowRight" size="16px" /></a>
              <button type="button" @click="copy(profile.email)">{{ copied ? t('common.copied') : t('common.copy') }}</button>
            </div>
          </div>
          <a class="i-card" :href="`https://${profile.github}`" target="_blank" rel="noopener">
            <span class="i-no">02</span>
            <div class="i-head"><q-icon :name="mdiGithub" size="30px" /><b>{{ t('contact.github') }}</b></div>
            <div class="i-value">{{ profile.github }}</div>
            <p>{{ t('contact.githubDesc') }}</p>
            <div class="i-actions"><span>{{ t('contact.visit') }} GitHub<q-icon :name="mdiArrowRight" size="16px" /></span></div>
          </a>
          <div class="i-card muted">
            <span class="i-no">03</span>
            <div class="i-head"><q-icon :name="mdiFileDocumentOutline" size="30px" /><b>{{ t('contact.resume') }}</b></div>
            <p>{{ t('contact.resumeDesc') }}</p>
          </div>
          <div class="i-card">
            <span class="i-no">04</span>
            <div class="i-head"><q-icon :name="mdiMapMarkerOutline" size="30px" /><b>{{ t('contact.location') }}</b></div>
            <div class="i-value">{{ t('contact.locationValue') }}</div>
            <p>{{ t('contact.locationDesc') }}</p>
          </div>
        </div>
      </section>

      <section class="collab-sec">
        <SectionHeading index="02" :title="t('contact.collab')" :desc="t('contact.collabDesc')" />
        <div class="collab-row">
          <div class="collab">
            <div v-for="(c, i) in collab" :key="c[0]" class="c-card"><q-icon :name="COLLAB_ICONS[i]" size="32px" /><div><b>{{ c[0] }}</b><span>{{ c[1] }}</span></div></div>
          </div>
          <div class="build">
            <small>{{ t('contact.build') }}</small>
            <strong>{{ t('contact.buildTitle') }}</strong>
            <span>{{ t('contact.buildZh') }}</span>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMeta } from 'quasar'
import {
  mdiArrowRight, mdiCheck, mdiContentCopy, mdiEmailOutline, mdiFileDocumentOutline, mdiGithub, mdiMapMarkerOutline,
  mdiServerOutline, mdiRobotIndustrialOutline, mdiPuzzleOutline, mdiCameraIris,
} from '@quasar/extras/mdi-v7'
import PageHero from '@/components/ui/PageHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { profile } from '@/data/profile'
import { heroImages } from '@/data/images'
import { useLocale } from '@/composables/useLocale'
import { useCopy } from '@/composables/useCopy'

const COLLAB_ICONS = [mdiServerOutline, mdiRobotIndustrialOutline, mdiPuzzleOutline, mdiCameraIris]
const { t, tm } = useI18n()
const { pick } = useLocale()
const { copied, copy } = useCopy()
const collab = computed(() => tm('contact.collabItems') as [string, string][])
useMeta(() => ({ title: `${t('pages.contact')}｜${pick(profile.name)}` }))
</script>

<style scoped>
section {
  padding-bottom: var(--space-6);
}
.welcome {
  margin: 0 0 22px;
  font: 500 15px var(--font-tc);
}
.btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font: 500 14.5px var(--font-sans);
  padding: 13px 24px;
  border: 1.5px solid var(--line-strong);
  border-radius: var(--radius);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
}
.btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}
.info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.i-card {
  position: relative;
  display: grid;
  gap: 10px;
  align-content: start;
  background: var(--surface);
  border: var(--border) solid var(--line);
  padding: 20px;
  color: inherit;
  min-width: 0;
}
a.i-card:hover {
  border-color: var(--accent);
}
.i-card.muted .i-head {
  color: var(--ink-3);
}
.i-no {
  position: absolute;
  top: 14px;
  right: 16px;
  font: 500 12px var(--font-mono);
  color: var(--ink-3);
}
.i-head {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--accent);
}
.i-head b {
  font: 700 18px var(--font-sans);
  color: var(--ink);
}
.i-value {
  font: 500 15px var(--font-sans);
  color: var(--accent);
  word-break: break-all;
}
.i-card p {
  margin: 0;
  font: 400 13.5px / 1.75 var(--font-tc);
  color: var(--ink-2);
}
.i-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  font: 500 13.5px var(--font-sans);
  color: var(--accent);
}
.i-actions a,
.i-actions span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.i-actions button {
  background: none;
  border: var(--border) solid var(--line);
  color: var(--ink);
  padding: 4px 10px;
  border-radius: var(--radius);
  cursor: pointer;
  font: inherit;
}
.collab-row {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-6);
  align-items: center;
}
.collab {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.c-card {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 12px;
  background: var(--surface);
  border: var(--border) solid var(--line);
  padding: 16px;
}
.c-card .q-icon {
  color: var(--accent);
}
.c-card b {
  display: block;
  font: 700 14px / 1.3 var(--font-sans);
}
.c-card span {
  font: 400 12.5px / 1.6 var(--font-tc);
  color: var(--ink-2);
}
.build {
  display: grid;
  gap: 6px;
  border-left: var(--border) solid var(--line);
  padding-left: var(--space-6);
}
.build small {
  font: 500 12px var(--font-mono);
  letter-spacing: 0.2em;
}
.build strong {
  font: 900 clamp(26px, 2.6vw, 38px) / 1.05 var(--font-display);
  font-variation-settings: 'wdth' 82;
}
.build span {
  font: 400 13px var(--font-tc);
  letter-spacing: 0.3em;
  color: var(--ink-2);
}
@media (max-width: 1180px) {
  .info { grid-template-columns: repeat(2, 1fr); }
  .collab-row { grid-template-columns: 1fr; }
  .collab { grid-template-columns: repeat(2, 1fr); }
  .build { border-left: 0; padding-left: 0; }
}
@media (max-width: 640px) {
  .info, .collab { grid-template-columns: 1fr; }
}
</style>
