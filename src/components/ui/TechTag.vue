<template>
  <span class="tech-tag"><slot /></span>
</template>

<style scoped>
.tech-tag {
  display: inline-block;
  font: 500 11.5px / 1 var(--font-sans);
  padding: 6px 10px;
  border: var(--border) solid var(--line);
  background: var(--surface);
  color: var(--ink);
  border-radius: var(--radius);
  white-space: nowrap;
}
</style>
