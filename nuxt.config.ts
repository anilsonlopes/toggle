// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
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
  site: {
    name: "Toggle — Simplesmente mostre se você está disponível ou ocupado",
    description:
      "Toggle é um app minimalista que permite alternar rapidamente seu status entre disponível e ocupado. Sem distrações, sem ruído — apenas a informação que importa, do jeito mais direto possível.",
  },
});
