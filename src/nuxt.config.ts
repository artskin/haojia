
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content', 
    '@nuxt/image', 
    '@nuxt/ui',
  ],
  css: ['/assets/style/main.css'],
  // plugins: [
  //   '/plugins/vclipboard.js',
  // ],
  nitro: {
    output: {
      publicDir:'../docs',
    },
    //debug: true,
    prerender: {
      // Workaround for "Error: [404] Page not found: /manifest.json"
      failOnError: false,
      //crawlLinks: true,
      //concurrency: 1,
    },
  },
  app: {
    baseURL: '/haojia/',
    buildAssetsDir: 'nuxt_assets',
  },
  experimental: {
    payloadExtraction: false,
  },
})
