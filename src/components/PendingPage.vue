<template>
  <q-page class="pending">
    <div class="container">
      <Eyebrow>{{ eyebrow }}</Eyebrow>
      <DisplayTitle class="t">{{ title }}</DisplayTitle>
      <p>{{ t('pages.pending') }}</p>
      <SiteButton to="/" variant="ghost">{{ t('pages.backHome') }}</SiteButton>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// 02 之後才會完成的頁面先用這個佔位
import { useI18n } from 'vue-i18n'
import Eyebrow from '@/components/ui/Eyebrow.vue'
import DisplayTitle from '@/components/ui/DisplayTitle.vue'
import SiteButton from '@/components/ui/SiteButton.vue'

defineProps<{ title: string; eyebrow: string }>()
const { t } = useI18n()
</script>

<style scoped>
.pending { padding-block: 64px 96px; }
.t { margin: 18px 0 18px; }
p { color: var(--ink-2); margin: 0 0 24px; }
</style>
