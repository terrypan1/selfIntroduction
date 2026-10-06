<template>
  <component :is="tag" class="display-title"><slot /></component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), { tag: 'h1' })
</script>

<style scoped>
/* 設計稿的超粗窄體大標：Archivo 900，寬度軸收到 82 */
.display-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-variation-settings: 'wdth' 82;
  font-size: var(--fs-display);
  line-height: 0.92;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0;
}
</style>
