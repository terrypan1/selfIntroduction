<template>
  <router-link v-if="to" :to="to" class="site-btn" :class="variant"><slot /><q-icon v-if="arrow" :name="mdiArrowRight" size="18px" /></router-link>
  <button v-else type="button" class="site-btn" :class="variant"><slot /><q-icon v-if="arrow" :name="mdiArrowRight" size="18px" /></button>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { mdiArrowRight } from '@quasar/extras/mdi-v7'

withDefaults(defineProps<{ to?: RouteLocationRaw; variant?: 'primary' | 'ghost'; arrow?: boolean }>(), { variant: 'primary', arrow: false })
</script>

<style scoped>
.site-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font: 500 14.5px var(--font-sans);
  padding: 13px 26px;
  border: 1.5px solid var(--line-strong);
  border-radius: var(--radius);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.site-btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}
.site-btn.primary:hover {
  filter: brightness(1.08);
}
.site-btn.ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
