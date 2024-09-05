export default {
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
  },

  // 專案名稱
  target: "static",
  // 全域頁面轉場動畫
  transition: {
    name: "page",
    mode: "out-in",
  },
  // 路由配置
  router: {
    base: "/dreamer-true/",
    // base: process.env.NODE_ENV === "production" ? "/dreamer-true/" : "/",
  },

  // 產生靜態頁面配置
  generate: {
    fallback: true, // 生成404.html，用於GitHub Pages部署
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
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  compatibilityDate: "2024-09-03",
};
