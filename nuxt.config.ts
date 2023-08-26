// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // '~/assets/css/app.scss',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.scss',
    // 'ant-design-vue/dist/antd.css',
  ],
  modules: [
    '@pinia/nuxt',
    // '@nuxt/content',
    // '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
