<template>
  <img class="hero-image" :class="{ photo }" :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
// 各頁主視覺：圖片裁自 designs/（使用者指定），四邊淡出融進紙色背景；晚上模式反相成深色藍圖
// photo：真實照片類的圖反相會變負片，晚上模式不反相
defineProps<{ src: string; alt: string; width?: number; height?: number; photo?: boolean }>()
</script>

<style scoped>
.hero-image {
  display: block;
  width: 100%;
  height: auto;
  --fade: linear-gradient(to right, transparent, #000 9%, #000 91%, transparent), linear-gradient(to bottom, transparent, #000 9%, #000 91%, transparent);
  -webkit-mask-image: var(--fade);
  -webkit-mask-composite: source-in;
  mask-image: var(--fade);
  mask-composite: intersect;
}
/* 不能用 :global(...) 包前綴：Vue 會把整條選擇器變成 [data-theme='dark']，整頁被反相 */
[data-theme='dark'] .hero-image:not(.photo) {
  filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.95);
}
</style>
