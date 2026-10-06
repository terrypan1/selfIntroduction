<template>
  <router-link :to="to" class="numbered-card">
    <div class="body">
      <div class="head">
        <h3>{{ title }}</h3>
        <span class="no">{{ index }}</span>
      </div>
      <p class="sub">{{ subtitle }}</p>
      <div class="tags"><TechTag v-for="t in tags" :key="t">{{ t }}</TechTag></div>
    </div>
    <div class="media"><slot name="media" /></div>
  </router-link>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import TechTag from './TechTag.vue'

defineProps<{ to: RouteLocationRaw; title: string; index: string; subtitle: string; tags: string[] }>()
</script>

<style scoped>
.numbered-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: var(--border) solid var(--line);
  border-radius: var(--radius);
  min-width: 0;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.numbered-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
}
.body {
  padding: 18px 20px 16px;
  display: grid;
  gap: var(--space-2);
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-3);
}
h3 {
  margin: 0;
  font: 800 22px / 1.2 var(--font-display);
  font-variation-settings: 'wdth' 85;
  color: var(--ink);
}
.no {
  font: 500 14px var(--font-mono);
  color: var(--ink-2);
}
.sub {
  margin: 0;
  font: 400 14px / 1.6 var(--font-tc);
  color: var(--ink-2);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: var(--space-1);
}
.media {
  margin-top: auto;
  aspect-ratio: 2 / 1;
  background: var(--surface-2);
  border-top: var(--border) solid var(--line);
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: var(--space-4);
}
</style>
