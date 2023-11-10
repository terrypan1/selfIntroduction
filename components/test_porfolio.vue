<script setup>
import { ref } from 'vue'
const activateLink = ref(null)

const setActive = (link) => {
    activateLink.value = link
}
</script>
<template>
    <section id="portfolio" class="portfolio section-bg">
        <div class="container">
            <div class="section-title">
                <h2>Portfolio</h2>
                <p>

                </p>
            </div>
            <div class="row" data-aos="fade-up">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" :class="{ 'filter-active': activateLink == 'Front-end' }"
                            @click="setActive('Front-end')">Front-end</li>
                        <li data-filter=".filter-app" :class="{ 'filter-active': activateLink == 'Backend' }"
                            @click="setActive('Backend')">Backend</li>
                    </ul>
                </div>
            </div>
            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap" style="background-color: blue;">
                        <div>
                            <a href="https://air-conditioner-seven.vercel.app/" data-gallery="portfolioGallery"
                                class="portfolio-lightbox" title="嘉和水電冷氣行"><i class="bx bx-plus"></i>
                                <img src="../assets/img/img2.png" class="img-fluid">
                            </a>
                            <div class="portfolio-links">
                                <div>123</div>
                                <a href="../assets/img/img2.png" data-gallery="portfolioGallery" class="portfolio-lightbox"
                                    title="App 2"><i class="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <div>
                            <a href="https://chat-project-vdjs.vercel.app/" data-gallery="portfolioGallery"
                                class="portfolio-lightbox" title="PsyChat聊天機器人"><i class="bx bx-plus"></i>
                                <img src="../assets/img/img3.png" class="img-fluid">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <div>
                            <a href="http://220.133.235.3:5021/#/login" data-gallery="portfolioGallery"
                                class="portfolio-lightbox" title="專案:企業訂餐Demo"><i class="bx bx-plus"></i>
                                <img src="../assets/img/img4.png" class="img-fluid">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <div>
                            <a href="http://220.133.235.3:5041/login" data-gallery="portfolioGallery"
                                class="portfolio-lightbox" title="專案:微商Demo"><i class="bx bx-plus"></i>
                                <img src="../assets/img/img5.png" class="img-fluid">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.portfolio .portfolio-item {
    margin-bottom: 30px;
}

.portfolio #portfolio-flters {
    padding: 0;
    margin: 0 auto 35px auto;
    list-style: none;
    text-align: center;
    background: #fff;
    border-radius: 50px;
    padding: 2px 15px;
}

.portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px 8px 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: #272829;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
    color: #149ddd;
    cursor: pointer;
}

.portfolio-wrap {
    position: relative;
}

.portfolio-wrap::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(5, 13, 24, 0.5);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.portfolio-wrap:hover::before {
    opacity: 1;
    cursor: pointer;
}

.portfolio .portfolio-wrap:hover .portfolio-links {
    opacity: 1;
    bottom: 0;
}

.portfolio .portfolio-wrap .portfolio-links {
    opacity: 1;
    left: 0;
    right: 0;
    bottom: -60px;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: center;
}

.portfolio .portfolio-wrap .portfolio-links a {
    color: #fff;
    font-size: 40px;
    text-align: center;
    background: rgba(20, 157, 221, 0.75);
    transition: 0.3s;
    width: 100px;
}

.portfolio .portfolio-wrap .portfolio-links a {
    color: #fff;
    font-size: 28px;
    text-align: center;
    background: rgba(20, 157, 221, 0.75);
    transition: 0.3s;
    //   width: 50%;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
    background: rgba(20, 157, 221, 0.95);
}

.portfolio .portfolio-wrap .portfolio-links a+a {
    border-left: 1px solid #37b3ed;
}

.portfolio .portfolio-wrap:hover::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
}
</style>