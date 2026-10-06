<template>
  <footer class="site-footer">
    <div class="container inner">
      <div class="who">
        <span>{{ pick(profile.display) }}<small>{{ pick(profile.alias) }}</small></span>
      </div>
      <div class="mid">{{ t('footer.tagline') }}</div>
      <div class="geo">
        <span class="target" aria-hidden="true" />
        <span>{{ t('footer.place') }}<br />24.9936° N &nbsp; 121.3010° E</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { pick } = useLocale()
</script>

<style scoped>
.site-footer {
  border-top: var(--border) solid var(--line);
}
.inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-5);
  padding-block: 20px 26px;
}
.who {
  display: flex;
  align-items: center;
  gap: 22px;
  font: 600 15px / 1.3 var(--font-sans);
  letter-spacing: 0.1em;
}
.who small {
  display: block;
  font-weight: 400;
  letter-spacing: 0.02em;
  font-size: 15px;
}
.mid {
  font: 500 10.5px var(--font-mono);
  letter-spacing: 0.16em;
  color: var(--ink-2);
  text-align: center;
}
.geo {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 18px;
  font: 500 10.5px / 1.6 var(--font-mono);
  letter-spacing: 0.12em;
  color: var(--ink-2);
}
.target {
  width: 26px;
  height: 26px;
  border: 1px solid var(--ink-2);
  border-radius: 50%;
  position: relative;
}
.target::before,
.target::after {
  content: '';
  position: absolute;
  background: var(--ink-2);
}
.target::before { left: 12px; top: -5px; width: 1px; height: 34px; }
.target::after { top: 12px; left: -5px; height: 1px; width: 34px; }
@media (max-width: 900px) {
  .inner { grid-template-columns: 1fr; gap: var(--space-3); }
  .mid { text-align: left; }
  .geo { justify-self: start; }
}
</style>
