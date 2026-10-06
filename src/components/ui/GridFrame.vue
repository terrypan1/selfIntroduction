<template>
  <div class="grid-frame">
    <CrossMark class="tl" /><CrossMark class="tr" /><CrossMark class="bl" /><CrossMark class="br" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import CrossMark from './CrossMark.vue'
</script>

<style scoped>
.grid-frame {
  position: relative;
}
.tl { left: -7px; top: -7px; }
.tr { right: -7px; top: -7px; }
.bl { left: -7px; bottom: -7px; }
.br { right: -7px; bottom: -7px; }
</style>
