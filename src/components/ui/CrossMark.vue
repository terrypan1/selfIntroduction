<template>
  <span class="cross-mark" aria-hidden="true" />
</template>

<style scoped>
/* 設計稿四周的 + 對位記號；用 position 由外層決定位置 */
.cross-mark {
  position: absolute;
  width: 14px;
  height: 14px;
  pointer-events: none;
}
.cross-mark::before,
.cross-mark::after {
  content: '';
  position: absolute;
  background: var(--plus);
}
.cross-mark::before {
  left: 6.5px;
  top: 0;
  width: 1px;
  height: 14px;
}
.cross-mark::after {
  top: 6.5px;
  left: 0;
  width: 14px;
  height: 1px;
}
</style>
