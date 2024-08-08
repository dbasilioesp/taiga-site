// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/content"],
  postcss: {},
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }
})