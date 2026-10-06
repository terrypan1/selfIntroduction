<template>
  <!-- 操作方式比照 agv_mcs_web 頁首：圓形扁平按鈕＋q-menu（agv_mcs_web 本身沒有 i18n） -->
  <q-btn flat round dense class="lang-btn" :icon="mdiWeb" :aria-label="t('actions.language')">
    <q-tooltip>{{ t('actions.language') }}</q-tooltip>
    <q-menu anchor="bottom right" self="top right" :offset="[0, 10]" class="lang-menu">
      <ul class="lang-list" role="listbox" :aria-label="t('actions.language')">
        <li v-for="o in OPTIONS" :key="o.value">
          <button v-close-popup type="button" role="option" :aria-selected="locale === o.value" :class="{ on: locale === o.value }" @click="setLocale(o.value)">
            <span class="code">{{ o.code }}</span>
            <span class="label">{{ o.label }}</span>
            <q-icon v-if="locale === o.value" :name="mdiCheck" size="16px" class="check" />
          </button>
        </li>
      </ul>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiCheck, mdiWeb } from '@quasar/extras/mdi-v7'
import { useLocale } from '@/composables/useLocale'
import type { Locale } from '@/i18n'

const OPTIONS: { value: Locale; code: string; label: string }[] = [
  { value: 'zh', code: '中', label: '繁體中文' },
  { value: 'en', code: 'EN', label: 'English' },
]
const { t } = useI18n()
const { locale, setLocale } = useLocale()
</script>

<style scoped>
.lang-btn {
  color: var(--ink);
  border: var(--border) solid var(--line);
}
.lang-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.lang-list {
  list-style: none;
  margin: 0;
  padding: 6px;
  min-width: 180px;
}
.lang-list button {
  width: 100%;
  display: grid;
  grid-template-columns: 30px 1fr 16px;
  align-items: center;
  gap: 8px;
  padding: 9px 10px;
  border: 0;
  border-radius: var(--radius);
  background: transparent;
  color: var(--ink);
  font: 500 14px var(--font-tc);
  text-align: left;
  cursor: pointer;
}
.lang-list button:hover {
  background: var(--accent-soft);
}
.lang-list button.on {
  color: var(--accent);
}
.code {
  font: 600 11px var(--font-mono);
  letter-spacing: 0.06em;
  color: var(--ink-3);
  border: var(--border) solid var(--line);
  border-radius: var(--radius);
  text-align: center;
  padding: 2px 0;
}
.on .code {
  color: var(--accent);
  border-color: var(--accent);
}
.check {
  color: var(--accent);
}
</style>
<style>
/* q-menu 掛在 body 底下，外框要用非 scoped 樣式 */
.lang-menu {
  background: var(--surface);
  border: var(--border) solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
</style>
