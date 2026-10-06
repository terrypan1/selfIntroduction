<template>
  <section class="page-hero">
    <CrossMark class="cm cm-tl" /><CrossMark class="cm cm-tr" />
    <div class="intro">
      <Eyebrow class="eyebrow">{{ eyebrow }}</Eyebrow>
      <DisplayTitle class="title" :style="{ fontSize: fitTitle(title, 96, true) }">{{ title }}</DisplayTitle>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      <slot />
    </div>
    <div class="visual">
      <div v-if="label" class="label"><CrossMark class="label-cm" /><span>{{ label }}</span></div>
      <HeroImage :src="image" :alt="imageAlt" />
    </div>
    <SideIndex class="side" :active="active" />
  </section>
</template>

<script setup lang="ts">
import CrossMark from './CrossMark.vue'
import Eyebrow from './Eyebrow.vue'
import DisplayTitle from './DisplayTitle.vue'
import HeroImage from './HeroImage.vue'
import SideIndex from '@/components/layout/SideIndex.vue'
import { fitTitle } from '@/composables/fitTitle'

withDefaults(defineProps<{ eyebrow: string; title: string; subtitle?: string; image: string; imageAlt: string; label?: string; active?: number }>(), { active: 0 })
</script>

<style scoped>
.page-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr) 70px;
  gap: var(--space-5);
  padding-block: 36px 34px;
  align-items: start;
}
.cm-tl { left: -26px; top: 12px; }
.cm-tr { right: -26px; top: 12px; }
.intro {
  container-type: inline-size;
  min-width: 0;
}
.eyebrow {
  margin-top: 26px;
}
.title {
  margin: 18px 0 14px;
  text-wrap: balance;
}
.subtitle {
  margin: 0 0 var(--space-4);
  font: 400 clamp(17px, 3.6cqi, 22px) / 1.45 var(--font-sans);
  color: var(--ink);
  max-width: 28em;
}
.visual {
  position: relative;
  margin-top: 8px;
}
.label {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  gap: 10px;
  font: 500 9.5px / 1.5 var(--font-mono);
  letter-spacing: 0.12em;
  color: var(--accent);
  white-space: pre-line;
}
.label-cm {
  position: relative;
}
.side {
  margin-top: 40px;
}
@media (max-width: 1180px) {
  .page-hero { grid-template-columns: 1fr; }
  .side, .cm { display: none; }
  .visual { max-width: 760px; }
}
@media (max-width: 640px) {
  .label { display: none; }
}
</style>
