<template>
  <q-layout view="hHh lpR fFf">
    <SiteHeader @menu="drawer = true" />
    <q-drawer v-model="drawer" side="right" overlay behavior="mobile" :width="280" class="drawer">
      <div class="drawer-in">
        <div class="drawer-tools"><LangSwitch /><ThemeToggle /></div>
        <button type="button" class="close" :aria-label="t('actions.closeMenu')" @click="drawer = false"><q-icon :name="mdiClose" size="22px" /></button>
        <router-link v-for="(item, i) in NAV" :key="item.key" :to="item.to" :class="{ on: route.meta.nav === item.key }" @click="drawer = false">
          <span>{{ String(i + 1).padStart(2, '0') }}</span>{{ t(`nav.${item.key}`) }}
        </router-link>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <SiteFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { mdiClose } from '@quasar/extras/mdi-v7'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { NAV } from '@/components/layout/nav'
import ThemeToggle from '@/components/layout/ThemeToggle.vue'
import LangSwitch from '@/components/layout/LangSwitch.vue'

const drawer = ref(false)
const route = useRoute()
const { t } = useI18n()
</script>

<style scoped>
.drawer-in {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-5);
  background: var(--paper);
  min-height: 100%;
}
.drawer-in a {
  font: 500 15px var(--font-sans);
  letter-spacing: var(--track-nav);
  padding: var(--space-3) 0;
  border-bottom: var(--border) solid var(--line);
  color: var(--ink);
}
.drawer-in a span {
  font-family: var(--font-mono);
  color: var(--ink-3);
  margin-right: var(--space-3);
}
.drawer-in a.on,
.drawer-in a.on span {
  color: var(--accent);
}
.drawer-tools {
  order: 99;
  display: flex;
  align-items: center;
  justify-self: start;
  gap: var(--space-3);
  padding-top: var(--space-4);
}
.close {
  justify-self: end;
  background: none;
  border: 0;
  color: var(--ink);
  cursor: pointer;
}
</style>
