<script setup>
import { ref } from 'vue';
const activeLink = ref(null);

const setActive = (link) => {
    activeLink.value = link;
}
</script>
<template>
    <header id="header">
        <div class="d-flex flex-column">
            <div class="profile">
                <img src="../assets/img/img1.jpg" alt="" class="img-fluid rounded-circle w-100"
                    style="object-fit: cover;width: 220px;height: 160px;">
                <h1 class="text-light"><a href="index.html">Terry Pan</a></h1>
                <div class="social-links mt-3 text-center">
                    <a href="#" class="twitter"><i class="bi bi-github"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <!-- <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> -->
                </div>
            </div>
            <nav id="navbar" class="nav-menu navbar">
                <ul>
                    <li><a href="#hero" class="nav-link scrollto" @click="setActive('hero')"
                            :class="{ active: activeLink == 'hero' }"><i
                                class="bi bi-house-door-fill"></i><span>Home</span></a>
                    </li>
                    <li><a href="#about" class="nav-link scrollto" @click="setActive('about')" :class="{active:activeLink == 'about'}"><i class="bi bi-person-circle"></i><span>About</span></a>
                    </li>
                    <li><a href="#resume" class="nav-link scrollto" @click="setActive('resume')" :class="{active:activeLink == 'resume'}"><i
                                class="bi bi-file-earmark"></i><span>Resume</span></a>
                    </li>
                    <li><a href="#portfolio" class="nav-link scrollto" @click="setActive('portfolio')" :class="{active:activeLink == 'portfolio'}"><i class="bi bi-layout-text-sidebar-reverse"></i>
                            <span>Portfolio</span></a></li>
                    <li><a href="#contact" class="nav-link scrollto"  @click="setActive('contact')" :class="{active:activeLink == 'contact'}"><i class="bi bi-envelope"></i><span>Contact</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style lang="scss">
#header {
    overflow-y: hidden;
}

// #header {
//     overflow: hidden;
// }</style>