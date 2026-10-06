<template>
  <svg class="glyph" viewBox="0 0 160 80" aria-hidden="true">
    <template v-if="kind === 'agv'">
      <path d="M30 46 L78 26 L134 40 L86 62 Z" /><path d="M30 46 V54 L86 70 V62 M86 70 L134 50 V40" /><path d="M64 38 L84 30 L104 35 L84 43 Z" />
      <circle class="lamp" cx="112" cy="50" r="2.6" /><circle class="lamp" cx="122" cy="46" r="2.6" />
      <path class="route" d="M8 70 H40 L58 60" />
    </template>
    <template v-else-if="kind === 'ai'">
      <path d="M36 30 L80 12 L120 26 L76 44 Z" /><path d="M36 30 V56 L76 72 V44 M76 72 L120 56 V26" />
      <ellipse cx="98" cy="52" rx="10" ry="13" /><ellipse class="fill" cx="98" cy="52" rx="4" ry="5" />
      <path class="route" d="M10 18 H26 V30 M140 64 H150 V52" />
    </template>
    <template v-else-if="kind === 'iot'">
      <path d="M46 24 L80 10 L114 24 L80 38 Z" /><path d="M46 24 V58 L80 72 V38 M80 72 L114 58 V24" />
      <path d="M58 44 L68 48 M58 52 L68 56" /><circle class="lamp" cx="96" cy="44" r="3" />
      <path class="route" d="M10 60 H36 M124 40 H150" />
    </template>
    <template v-else>
      <path d="M40 22 L80 8 L120 22 L80 36 Z" /><path d="M40 22 V58 L80 72 V36 M80 72 L120 58 V22" />
      <path d="M40 34 L80 48 L120 34 M40 46 L80 60 L120 46" />
      <circle class="lamp" cx="50" cy="34" r="2" /><circle class="lamp" cx="50" cy="46" r="2" />
    </template>
  </svg>
</template>

<script setup lang="ts">
import type { ProjectCategory } from '@/data/types'
defineProps<{ kind: ProjectCategory }>()
</script>

<style scoped>
/* 專案卡在真實截圖到位前的線稿圖，風格同主視覺 */
.glyph { width: 100%; height: 100%; }
.glyph path, .glyph ellipse { fill: none; stroke: var(--accent); stroke-width: 1.3; stroke-linejoin: round; }
.glyph .route { stroke: var(--accent-2); stroke-dasharray: 4 4; }
.glyph .lamp, .glyph .fill { fill: var(--iso-lamp); stroke: none; }
</style>
