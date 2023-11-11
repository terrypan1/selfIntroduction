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
                    <div class="portfolio-wrap">
                        <img src="../assets/img/img2.png" class="img-fluid">
                        <div class="portfolio-mask"></div>
                        <div class="portfolio-links">
                            <a href="https://air-conditioner-seven.vercel.app/" class="portfolio-lightbox" title="圖片"
                                style="border-right: 1px solid white;"><i class="bi bi-eye"></i></a>
                            <a href="https://air-conditioner-seven.vercel.app/" class="portfolio-lightbox"
                                title="嘉和水電冷氣行"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src="../assets/img/img3.png" class="img-fluid">
                        <div class="portfolio-mask"></div>
                        <div class="portfolio-links">
                            <a href="https://chat-project-vdjs.vercel.app/" class="portfolio-lightbox" title="圖片"
                                style="border-right: 1px solid white;"><i class="bi bi-eye"></i></a>
                            <a href="https://chat-project-vdjs.vercel.app/" class="portfolio-lightbox"
                                title="PsyChat聊天機器人"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src="../assets/img/img4.png" class="img-fluid">
                        <div class="portfolio-mask"></div>
                        <div class="portfolio-links">
                            <a href="http://220.133.235.3:5021/#/login" class="portfolio-lightbox" title="圖片"
                                style="border-right: 1px solid white;"><i class="bi bi-eye"></i></a>
                            <a href="http://220.133.235.3:5021/#/login" class="portfolio-lightbox" title="專案:企業訂餐Demo"><i
                                    class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <div>
                            <img src="../assets/img/img5.png" class="img-fluid">
                            <div class="portfolio-mask"></div>
                            <div class="portfolio-links">
                                <a href="http://220.133.235.3:5041/login" class="portfolio-lightbox" title="圖片"
                                    style="border-right: 1px solid white;"><i class="bi bi-eye"></i></a>
                                <a href="http://220.133.235.3:5041/login" class="portfolio-lightbox"
                                    title="專案:微商Demo"><i class="bi bi-link-45deg"></i></a>
                            </div>
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
    /* 設為相對定位 */
}

.portfolio .portfolio-wrap .portfolio-links {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 20%;
    top: 168px;
    left: 0;
}

.portfolio .portfolio-wrap .portfolio-links a {
    display: inline-block;
    text-align: center;
    color: #fff;
    background: rgba(20, 157, 221, 0.75);
    font-size: 28px;
    width: 50%;
}

.portfolio .portfolio-wrap .portfolio-links:hover {
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 20%;
    top: 168px;
    left: 0;
    transition: 0.5s;
}

.portfolio .portfolio-wrap {
    position: relative;

    .portfolio-mask {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); // 半透明黑色遮罩
        z-index: 1;
        pointer-events: none; // 讓鼠標事件穿透遮罩層
    }

    &:hover {
        .portfolio-mask {
            display: block;
        }

        .portfolio-links {
            opacity: 1;
            z-index: 2; // 確保連結在遮罩層之上
        }
    }
}
</style>