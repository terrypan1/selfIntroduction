<template>
  <div class="section-heading">
    <span class="idx">{{ index }}</span>
    <h2 class="title">· {{ title }}</h2>
    <span class="rule" />
    <span v-if="desc" class="desc">{{ desc }}</span>
    <div v-if="arrows" class="arrows">
      <button type="button" :aria-label="prevLabel" :disabled="!canPrev" @click="$emit('prev')"><q-icon :name="mdiArrowLeft" size="20px" /></button>
      <button type="button" :aria-label="nextLabel" :disabled="!canNext" @click="$emit('next')"><q-icon :name="mdiArrowRight" size="20px" /></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiArrowLeft, mdiArrowRight } from '@quasar/extras/mdi-v7'

withDefaults(
  defineProps<{ index: string; title: string; desc?: string; arrows?: boolean; canPrev?: boolean; canNext?: boolean; prevLabel?: string; nextLabel?: string }>(),
  { arrows: false, canPrev: true, canNext: true, prevLabel: 'Previous', nextLabel: 'Next' },
)
defineEmits<{ prev: []; next: [] }>()
</script>

<style scoped>
.section-heading {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding-block: var(--space-4);
  border-top: var(--border) solid var(--line);
}
.idx {
  font: 600 15px var(--font-mono);
  color: var(--accent);
}
.title {
  margin: 0;
  font: 600 15px var(--font-sans);
  letter-spacing: var(--track-nav);
  color: var(--ink);
  white-space: nowrap;
}
.rule {
  flex: 1;
  height: 1px;
  background: var(--line);
  min-width: 24px;
}
.desc {
  font-size: var(--fs-small);
  color: var(--ink-2);
}
.arrows {
  display: flex;
  gap: var(--space-2);
}
.arrows button {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: none;
  border: 0;
  color: var(--ink);
  cursor: pointer;
}
.arrows button:disabled {
  color: var(--ink-3);
  cursor: default;
}
@media (max-width: 900px) {
  .desc { display: none; }
}
</style>
