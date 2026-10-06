<template>
  <div class="eyebrow"><slot /></div>
</template>

<style scoped>
.eyebrow {
  font: 500 var(--fs-label) / 1.4 var(--font-mono);
  letter-spacing: var(--track-label);
  color: var(--ink-2);
  text-transform: uppercase;
}
</style>
