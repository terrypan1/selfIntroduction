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
                <p style="font-weight: 900;">歡迎來到我的網頁，一名熱情且經驗豐富的前端開發工程師。我專注於使用 Vue.js
                    框架來創建直觀且動態的用戶介面。我對於撰寫乾淨且高效的代碼充滿熱情，並總是追求最佳的用戶體驗。

                    在前端領域，我不僅累積了豐富的 Vue 開發經驗，也熟悉現代前端技術

                    。我習慣於在敏捷開發環境中與團隊密切合作，從產品設計到功能開發，我都能提供專業的技術支持。
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
                        <h3>Front-end engineer & Backend engineer.</h3>
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
                                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0989181606</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New Taipei City,
                                            Taiwan</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>38</span></li>
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
                            最近，我開始拓展我的技術領域至 Python 和人工智慧，這讓我對數據驅動的應用開發與機器學習項目產生了濃厚的興趣。我正在尋找一個能讓我運用我所有技能，同時也能讓我在新技術領域不斷成長的機會。

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