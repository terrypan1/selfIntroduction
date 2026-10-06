<template>
  <!-- 做法同 agv_mcs_web（layouts/MainLayout.vue、pages/LoginPage.vue）：白天顯示月亮、晚上顯示太陽，點了切換 -->
  <q-btn flat round dense class="theme-btn" :icon="mode === 'dark' ? mdiWeatherSunny : mdiWeatherNight" :aria-label="label" @click="toggle">
    <q-tooltip>{{ label }}</q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiWeatherNight, mdiWeatherSunny } from '@quasar/extras/mdi-v7'
import { useTheme } from '@/theme/useTheme'

const { t } = useI18n()
const { mode, toggle } = useTheme()
const label = computed(() => (mode.value === 'dark' ? t('actions.toLight') : t('actions.toDark')))
</script>

<style scoped>
.theme-btn {
  color: var(--ink);
  border: var(--border) solid var(--line);
}
.theme-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
