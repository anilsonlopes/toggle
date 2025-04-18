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
    "@vite-pwa/nuxt",
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
    name: "Toggle",
    description:
      "Simplesmente mostre se você está disponível ou ocupado. Sem distrações, sem ruído — do jeito mais direto possível.",
  },
  typescript: {
    typeCheck: true,
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
});
