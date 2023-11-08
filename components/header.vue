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
                <img src="../assets/img/T1.png" alt="" class="img-fluid rounded-circle"
                    style="object-fit: cover;">
                <h1 class="text-light"><a href="index.html">Terry Pan</a></h1>
                <div class="social-links mt-3 text-center">
                    <a href="https://github.com/terrypan1" class="twitter"><i class="bi bi-github"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
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
                                class="bi bi-file-earmark"></i><span>Resumes</span></a>
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
// }
#header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  transition: all ease-in-out 0.5s;
  z-index: 9997;
  transition: all 0.5s;
  padding: 0 15px;
  background: #040b14;
  overflow-y: auto;
}

#header .profile img {
  margin: 15px auto;
  display: block;
  width: 120px;
  border: 8px solid #2c2f3f;
}

#header .profile h1 {
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  -moz-text-align-last: center;
  text-align-last: center;
  font-family: "Poppins", sans-serif;
}

#header .profile h1 a,
#header .profile h1 a:hover {
  color: #fff;
  text-decoration: none;
}

#header .profile .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #212431;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#header .profile .social-links a:hover {
  background: #149ddd;
  color: #fff;
  text-decoration: none;
}

#main {
  margin-left: 300px;
}

.container,
.container-fluid {
  padding-left: 30px;
  padding-right: 30px;
}

@media (max-width: 1199px) {
  #header {
    left: -300px;
  }

  #main {
    margin-left: 0;
  }

  .container,
  .container-fluid {
    padding-left: 12px;
    padding-right: 12px;
  }
}

.nav-menu {
  padding: 30px 0 0 0;
}

.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu>ul>li {
  position: relative;
  white-space: nowrap;
}

.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: #a8a9b4;
  padding: 12px 15px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
}

.nav-menu a i,
.nav-menu a:focus i {
  font-size: 24px;
  padding-right: 8px;
  color: #6f7180;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
  text-decoration: none;
  color: #fff;
}

.nav-menu a:hover i,
.nav-menu .active i,
.nav-menu .active:focus i,
.nav-menu li:hover>a i {
  color: #149ddd;
}

/* Mobile Navigation */
.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  background-color: #149ddd;
  color: #fff;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 50px;
  cursor: pointer;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}
</style>