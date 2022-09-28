export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/dotenv',
  ],
  env: {
    API_URL: 'http://localhost',
    PROD_API_URL:'https://api-hr-symfony.herokuapp.com'
      // 'https://portfolio-api.hermanneho.com/api/api/public/index.php',
  },
  publicRuntimeConfig: {
    apiURL: 'https://localhost',
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Ibarra+Real+Nova': true,
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  styleResources: {
    scss: './assets/scss/main.scss',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    devtools: true,
    babel: {
      compact: true,
    },
  },

  // Runtime lint
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
}
