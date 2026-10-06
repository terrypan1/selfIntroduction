<template>
  <header class="site-header">
    <div class="container inner">
      <router-link to="/" class="logo" :aria-label="pick(profile.name)">
        <span class="tp">T<i>P</i></span><span class="slash" />
        <span class="brand"><span class="name">{{ pick(profile.name) }}<em v-if="locale === 'zh'">PAN CHIEN-YU</em></span><small>{{ pick(profile.title) }}</small></span>
      </router-link>

      <nav class="nav" aria-label="Main">
        <router-link v-for="(item, i) in NAV" :key="item.key" :to="item.to" :class="{ on: route.meta.nav === item.key }"><span class="no">{{ String(i + 1).padStart(2, '0') }}</span>{{ t(`nav.${item.key}`) }}</router-link>
      </nav>

      <div class="right">
        <LangSwitch />
        <ThemeToggle />
        <button type="button" class="tool menu" :aria-label="t('actions.menu')" @click="$emit('menu')"><q-icon :name="mdiMenu" size="20px" /></button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { mdiMenu } from '@quasar/extras/mdi-v7'
import { profile } from '@/data/profile'
import { useLocale } from '@/composables/useLocale'
import ThemeToggle from './ThemeToggle.vue'
import LangSwitch from './LangSwitch.vue'
import { NAV } from './nav'

defineEmits<{ menu: [] }>()
const route = useRoute()
const { t } = useI18n()
const { pick, locale } = useLocale()
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--header-bg);
  backdrop-filter: blur(8px);
  border-bottom: var(--border) solid var(--line);
}
.inner {
  display: flex;
  align-items: center;
  height: var(--header-h);
  gap: var(--space-6);
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);
}
.tp {
  font: 900 30px / 1 var(--font-display);
  letter-spacing: -0.04em;
}
.tp i {
  font-style: normal;
  color: var(--accent);
  font-size: 22px;
  position: relative;
  top: 6px;
  margin-left: -2px;
}
.slash {
  display: inline-block;
  width: 18px;
  height: 1.5px;
  background: currentColor;
  transform: rotate(-60deg);
}
.brand {
  display: grid;
  line-height: 1.25;
}
.name {
  font: 700 16px var(--font-tc);
  letter-spacing: 0.12em;
  white-space: nowrap;
}
.name em {
  font: 600 13px var(--font-sans);
  font-style: normal;
  letter-spacing: 0.1em;
  margin-left: 12px;
}
.brand small {
  font: 500 10.5px var(--font-tc);
  letter-spacing: 0.22em;
  color: var(--ink-2);
}
.nav {
  display: flex;
  gap: 44px;
  margin-inline: auto;
}
.nav a {
  position: relative;
  font: 500 14px var(--font-tc);
  letter-spacing: 0.08em;
  color: var(--ink);
  padding: 26px 0 24px;
  transition: color 0.15s;
}
.nav a .no {
  font: 500 12px var(--font-mono);
  color: var(--ink-3);
  margin-right: 10px;
}
.nav a.on .no {
  color: var(--accent);
}
.nav a:hover {
  color: var(--accent);
}
.nav a.on {
  color: var(--accent);
}
/* 選中項目下方的藍點（designs/01-home.png） */
.nav a.on::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 14px;
  width: 6px;
  height: 6px;
  margin-left: 5px;
  border-radius: 50%;
  background: var(--accent);
}
.right {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.tagline {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: var(--space-4);
  font: 500 10px / 1.5 var(--font-mono);
  letter-spacing: 0.16em;
  color: var(--ink-2);
  white-space: pre-line;
}
.tagline .slash {
  width: 34px;
  height: 1px;
  transform: rotate(-40deg);
}
.tool {
  width: 34px;
  height: 32px;
  display: grid;
  place-items: center;
  border: var(--border) solid var(--line);
  border-radius: var(--radius);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  font: 600 12px var(--font-mono);
}
.tool:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.menu {
  display: none;
}
@media (max-width: 1280px) {
  .tagline { display: none; }
}
@media (max-width: 1024px) {
  .nav { display: none; }
  .right { margin-left: auto; }
  .menu { display: grid; }
}
@media (max-width: 480px) {
  .name em, .brand small { display: none; }
}
</style>
