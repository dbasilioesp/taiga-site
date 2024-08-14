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
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon/favicon_32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon/favicon_180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon/favicon_192.png",
        },
      ],
      meta: [
        {
          name: "facebook-domain-verification",
          // content: "xxn44nui7v1m7f0ub61li1fv8edkq4",
        },
      ],
    }
  }
})