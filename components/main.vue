<script setup>
import About from './about.vue'
import Skill from './skill.vue'
import Resume from './resume.vue'
import Profolio from './portfolio.vue'
import Contact from '../components/contact.vue';
</script>
<template>
    <main id="main">
        <About></About>
        <Skill></Skill>
        <Resume></Resume>
        <Profolio></Profolio>
        <Contact></Contact>
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