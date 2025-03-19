<script setup>
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
        }
    ]
})
const isVisible = ref(false);
onMounted(() => {
    window.addEventListener('scroll', () => {
        const aboutSection = document.getElementById('about')
        const rect = aboutSection.getBoundingClientRect()
        // 當about區塊進入視窗時
        if (rect.top <= window.innerHeight) {
            isVisible.value = true;
        }
    })
})
</script>
<template>
    <section id="about" class="about">
        <div class="container">
            <div class="section-title">
                <h2>About</h2>
                <p style="font-weight: 900;">
                    我是潘建宇，一名全端開發的工程師。我具備謹慎與積極的工作態度，在技術領域擁有豐富的實戰經驗。作為一名專注於全端開發的工程師，我在前端和後端開發領域均有深入的技術積累和實戰經驗。
                    在前端開發領域，我尤其擅長使用 Vue.js 框架，具有豐富的實戰經驗。
                    我熱衷於透過 Vue 創建互動式、響應式的用戶界面，並致力於提高網站的性能和用戶體驗。
                    在後端開發方面，我熟悉使用 .NET Core Web API 進行後端架構開發，並搭配 Entity Framework Core (EF Core)
                    來進行資料庫操作和管理。我擅長設計高效、安全且可擴展的 API，確保系統的穩定性與效能。
                </p>
            </div>
            <div class="row">
                <transition name="slide-in-left">
                    <div class="col-lg-4" v-if="isVisible" data-aos="fade-right">
                        <img src="../assets/img/T1.png" class="img-fluid" alt="">
                    </div>
                </transition>
                <transition name="slide-in-right">
                    <div class="col-lg-8 pt-4 pt-lg-0 content" v-if="isVisible" data-aos="fade-left">
                        <h3>Front-end engineer.</h3>
                        <p class="fst-italic">
                            我對於技術的深度了解及廣度探索，使我熱衷學習新事物。
                        </p>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>19 December
                                            1984</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong>
                                        <span>www.example.com</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
                                        <span>0989181606</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New Taipei
                                            City,
                                            Taiwan</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>40</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's
                                            degree</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                                        <span>terrypan1@gmail.com</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Job:</strong> <span>Front-end
                                            engineer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p style="font-weight: 900;">
                            我正在尋找一個能讓我運用我所有技能，同時也能讓我在新技術領域不斷成長的機會。
                            期待有機會加入貴公司的專業團隊，與您共同打造優秀的產品和服務。
                        </p>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "../assets/scss/index.scss";

.about .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #173b6c;
}

.about .content ul {
    list-style: none;
    padding: 0;
}

.about .content ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.about .content ul strong {
    margin-right: 10px;
}

.about .content ul i {
    font-size: 16px;
    margin-right: 5px;
    color: #149ddd;
    line-height: 0;
}

.about .content p:last-child {
    margin-bottom: 45px;
}

.slide-in-left-enter-active,
.slide-in-left-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-in-right-enter-active,
.slide-in-right-leave-active {
    transition: transform 0.5s ease-in-out;
}

/* 定義進入動畫的起始狀態 */
.slide-in-left-enter-from,
.slide-in-left-leave-to {
    transform: translateX(-100%);
}

.slide-in-right-enter-from,
.slide-in-right-leave-to {
    transform: translateX(100%);
}

/* 定義進入動畫的結束狀態 */
.slide-in-left-enter-to,
.slide-in-left-leave-from {
    transform: translateX(0);
}

.slide-in-right-enter-to,
.slide-in-right-leave-from {
    transform: translateX(0);
}
</style>