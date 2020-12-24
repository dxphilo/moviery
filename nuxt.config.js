export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Moviery - The Movie Database',
        htmlAttrs: {
      lang: "en",  // it sets the language English
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'moviery' },
  { property: "og:site_name", content: "moviery" },
  { hid: "og:type", property: "og:type", content: "website" },
  {
    hid: "og:url",
    property: "og:url",
    content: "https://moviery.netlify.app",
  },
  {
    hid: "og:title",
    property: "og:title",
    content: "moviery",
  },
  {
    hid: "og:description",
    property: "og:description",
    content: "moviery",
  },
  {
    hid: "og:image",
    property: "og:image",
    content: "https://images.unsplash.com/photo-1591597787791-4b837b0bfa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  },
  { property: "og:image:width", content: "740" },
  { property: "og:image:height", content: "300" },
    { name: "twitter:site", content: "@amjohnphilip" },
  { name: "twitter:card", content: "https://images.unsplash.com/photo-1591597787791-4b837b0bfa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" },
  {
    hid: "twitter:url",
    name: "twitter:url",
    content: "https://moviery.netlify.app",
  },
  {
    hid: "twitter:title",
    name: "twitter:title",
    content: "moviery",
  },
  {
    hid: "twitter:description",
    name: "twitter:description",
    content: "moviery"
  },
  {
    hid: "twitter:image",
    name: "twitter:image",
    content: "https://images.unsplash.com/photo-1591597787791-4b837b0bfa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
     '@nuxtjs/axios',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
          loaders:  {
      vue: {
         prettify: false
      }
    },
         configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
  },

  }
}
