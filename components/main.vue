<script setup>
import About from './about.vue'
</script>
<template>
    <main id="main">
        <About></About>
    </main>
</template>

<style lang="scss">
#main {
    margin-left: 300px;
}

@media (max-width: 1199px) {
    #main {
        margin-left: 0;
    }
}
</style>