<script setup>
import { ref } from 'vue'

const activateLink = ref(null)
const isModal = ref(null)
const isModal2 = ref(null)
const setActive = (link) => {
    activateLink.value = link
}
const handleclick = (img) => {
    console.log(img)
    switch (img) {
        case 'img1':
            isModal.value.click()
            break;
        case 'img2':
            isModal2.value.click()
            break;
    }
    // isModal.value.click()
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
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="d-flex justify-content-between">
                                        <div></div> <!-- 這是一個空的div，用於協助對齊 -->
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <img src="../assets/img/slider1.png" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal2 -->
                    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="d-flex justify-content-between">
                                        <div></div> <!-- 這是一個空的div，用於協助對齊 -->
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <img src="../assets/img/slider2.png" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-wrap">
                        <img src="../assets/img/img2.png" class="img-fluid">
                        <div class="portfolio-mask"></div>
                        <div class="portfolio-links">
                            <a class="portfolio-lightbox" title="圖片" style="border-right: 1px solid white;cursor: pointer;"
                                @click="handleclick('img1')"><i class="bi bi-eye">
                                    <button type="button" class="portfolio-lightbox" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop" v-show="false" ref="isModal">
                                        Launch static backdrop modal
                                    </button>
                                </i></a>
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
                            <a class="portfolio-lightbox" title="圖片" style="border-right: 1px solid white;cursor: pointer;"
                                @click="handleclick('img2')"><i class="bi bi-eye">
                                    <button type="button" class="portfolio-lightbox" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop2" v-show="false" ref="isModal2">
                                    </button>
                                </i></a>
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
                                <a href="http://220.133.235.3:5041/login" class="portfolio-lightbox" title="專案:微商Demo"><i
                                        class="bi bi-link-45deg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-3 ">
                    <div id="slider" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button class="active" type="button" data-bs-slide-to="0" data-bs-target="#slider"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-slide-to="1" data-bs-target="#slider"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-slide-to="2" data-bs-target="#slider"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-slide-to="3" data-bs-target="#slider"
                                aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner rounded-5">
                            <div class="carousel-item active">
                                <img src="../assets/img/slider1.png" alt="" class="d-block w-100 rounded-5" />
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/slider2.png" alt="" class="d-block w-100 rounded-5" />
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/slider3.png" alt="" class="d-block w-100 rounded-5" />
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/slider4.png" alt="" class="d-block w-100 rounded-5" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#slider">
                            <span class="carousel-control-prev-icon"
                                style="background-color: black;border-radius: 50px;"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#slider">
                            <span class="carousel-control-next-icon"
                                style="background-color: black;border-radius: 50px;"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
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