export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dreamer-true",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        async: true,
        src: "https://unpkg.com/@material-tailwind/html/scripts/ripple.js",
      },
    ],
  },

  router: {
    base: "/dreamer-true/",
    // base: process.env.NODE_ENV === "production" ? "/dreamer-true/" : "/",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Tailwind CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/image", "@pinia/nuxt"],

  image: {
    dir: "static/images",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // GitHub儲存庫名稱
  app: {
    baseURL: process.env.BASE_URL || "/dreamer-true/",
  },

  compatibilityDate: "2024-09-03",
});
