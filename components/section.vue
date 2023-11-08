<script setup>
import { ref, onMounted } from 'vue'

const typedText = ref('') // 用於綁定到模板的響應式數據
const professions = ['Developer', 'Front-end engineer', 'Backend engineer']
let currentProfession = 0 // 目前顯示的職業
let letterIndex = 0 // 當前職業名稱的字母索引
let typingSpeed = 150 // 打字速度
let deletingSpeed = 50 // 刪除速度

const typeWriter = () => {
    // 如果當前文字長度小於目前職業的長度，則添加字母
    if (letterIndex < professions[currentProfession].length) {
        typedText.value += professions[currentProfession].charAt(letterIndex)
        letterIndex++
        setTimeout(typeWriter, typingSpeed)
    } else {
        // 如果全部文字都顯示了，暫停一會兒，然後開始刪除
        setTimeout(deleteWriter, 2000)
    }
}

const deleteWriter = () => {
    // 如果當前文字長度不為0，則刪除字母
    if (letterIndex > 0) {
        typedText.value = professions[currentProfession].substring(0, letterIndex - 1)
        letterIndex--
        setTimeout(deleteWriter, deletingSpeed)
    } else {
        // 如果全部文字都刪除了，切換到下一個職業
        currentProfession = (currentProfession + 1) % professions.length
        setTimeout(typeWriter, typingSpeed)
    }
}

onMounted(() => {
    typeWriter()
})
</script>

<template>
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
            <h1>Terry Pan</h1>
            <p>I'm <span class="typed">{{ typedText }}</span></p>
        </div>
    </section>
</template>

<style lang="scss">
#hero {
    width: 100%;
    height: 100vh;
    background: url("../assets/img/img1.jpg") no-repeat center;
    background-size: cover;
}

#hero:before {
    content: "";
    background: rgba(5, 13, 24, 0.3);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

#hero .hero-container {
    position: relative;
    z-index: 2;
    min-width: 300px;
}

#hero h1 {
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
}

#hero p {
    color: #fff;
    margin-bottom: 50px;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
}

#hero p span {
    color: #fff;
    padding-bottom: 4px;
    letter-spacing: 1px;
    border-bottom: 3px solid #149ddd;
}

@media (min-width: 1024px) {
    #hero {
        background-attachment: fixed;
    }
}

@media (max-width: 768px) {
    #hero h1 {
        font-size: 28px;
        line-height: 36px;
    }

    #hero h2 {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}
</style>