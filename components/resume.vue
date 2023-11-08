<script setup>

</script>
<template>
    <section id="resume" class="resume">
        <div class="container">

            <div class="section-title">
                <h2>Resumes</h2>
                <p>基於熱衷學習的態度與服務熱忱，未來計畫在業餘時間持續增強技能專長，期望能錄取工作，以延續自身對於維修的熱忱與技能專長，
                    我將虛心接受公司的職務安排及規劃，努力完成部門目標， 以達成我對於工作及職涯的期望及願景。</p>
            </div>

            <div class="row">
                <div class="col-lg-6" data-aos="fade-up">
                    <h3 class="resume-title">Education</h3>
                    <div class="resume-item pb-0">
                        <h4>高雄科技大學</h4>
                        <p><em>電機工程學系</em></p>
                        <ul>
                            <li>學士學位</li>
                            <li>地點:高雄</li>
                        </ul>
                    </div>
                    <h3 class="resume-title">工作經驗</h3>
                    <div class="resume-item">
                        <h4>晉龍有限公司</h4>
                        <h5>2011 - 2017</h5>
                        <p><em>品管人員</em></p>
                        <ul>
                            <li>驅動IC Bonding 測試</li>
                            <li>地點:新竹</li>
                            <li>5年9個月</li>
                        </ul>
                    </div>
                    <div class="resume-item">
                        <h4>詠詮事業有限公司</h4>
                        <h5>2018 - 2021</h5>
                        <p><em>機電工程師</em></p>
                        <p>機電系統維護及緊急修復</p>
                        <li>地點:桃園</li>
                        <li>3年6個月</li>
                    </div>
                </div>
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="resume-title">工作經驗</h3>
                    <div class="resume-item">
                        <h4>坂和企業有限公司</h4>
                        <h5>2022/7 - 2022/11</h5>
                        <p><em>前端實習生</em></p>
                        <ul>
                            <p>畫面製作與程式撰寫</p>
                            <li>地點:高雄</li>
                            <li>6個月</li>
                        </ul>
                    </div>
                    <div class="resume-item">
                        <h4>連訊科技服務股份有限公司</h4>
                        <h5>2022/12 - 2023/8</h5>
                        <p><em>前端工程師</em></p>
                        <ul>
                            <p>前端專案開發</p>
                            <li>地點:高雄</li>
                            <li>9個月</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
<style lang="scss">
.resume .resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #050d18;
}

.resume .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #1f5297;
    position: relative;
}

.resume .resume-item h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #050d18;
    margin-bottom: 10px;
}

.resume .resume-item h5 {
    font-size: 16px;
    background: #e4edf9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
}

.resume .resume-item ul {
    padding-left: 20px;
}

.resume .resume-item ul li {
    padding-bottom: 10px;
}

.resume .resume-item:last-child {
    padding-bottom: 0;
}

.resume .resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid #1f5297;
}
</style>