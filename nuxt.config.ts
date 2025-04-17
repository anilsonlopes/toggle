// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
  ],
  fonts: {
    families: [
      {
        name: "Bebas Neue",
      },
    ],
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          mono: ["Bebas Neue", "sans-serif"],
        },
      },
    },
  },
});
