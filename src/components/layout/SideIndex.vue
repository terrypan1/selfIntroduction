<template>
  <ul class="side-index" aria-hidden="true">
    <li v-for="(item, i) in ITEMS" :key="item" :class="{ on: i === active }"><span>{{ String(i + 1).padStart(2, '0') }}</span>{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
// 設計稿右側的垂直領域索引，裝飾用，不是導覽
withDefaults(defineProps<{ active?: number }>(), { active: 0 })
const ITEMS = ['AGV', 'MCS', 'ROS', 'AI', 'WEB']
</script>

<style scoped>
.side-index {
  list-style: none;
  margin: 0;
  padding: 0 0 0 14px;
  border-left: var(--border) solid var(--line);
  display: grid;
  gap: 22px;
  font: 500 11px var(--font-mono);
  letter-spacing: 0.1em;
  color: var(--ink-2);
}
li {
  position: relative;
}
li span {
  margin-right: 10px;
}
li.on {
  color: var(--accent);
}
li.on::before {
  content: '';
  position: absolute;
  left: -18px;
  top: 5px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}
</style>
