<template>
  <div class="block-heading">
    <span class="idx">{{ index }}</span>
    <div>
      <h2>{{ title }}</h2>
      <p v-if="sub">{{ sub }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 案例頁、經歷頁區塊內的小標：編號＋英文大寫標題＋中文副標（designs/02-projects-agv.png）
defineProps<{ index: string; title: string; sub?: string }>()
</script>

<style scoped>
.block-heading {
  display: flex;
  gap: var(--space-4);
  align-items: baseline;
  margin-bottom: var(--space-5);
}
.idx {
  font: 500 12px var(--font-mono);
  color: var(--ink-2);
}
h2 {
  margin: 0;
  font: 600 17px / 1.3 var(--font-sans);
  letter-spacing: var(--track-nav);
  color: var(--ink);
}
p {
  margin: 2px 0 0;
  font: 400 12.5px var(--font-tc);
  letter-spacing: 0.2em;
  color: var(--ink-2);
}
</style>
