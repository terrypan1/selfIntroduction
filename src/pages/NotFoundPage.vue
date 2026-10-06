<template>
  <PendingPage title="404" :eyebrow="t('pages.notFound')" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PendingPage from '@/components/PendingPage.vue'
const { t } = useI18n()
</script>
