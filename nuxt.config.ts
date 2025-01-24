// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-swiper"],
  css: ["~/assets/styles/main.scss"],
  app: {
    rootId: "app",
    head: {
      title: "Grokhotov Test",
    },
  },
});
