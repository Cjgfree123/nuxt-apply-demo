
module.exports = {
  // env配置环境变量
  env:{
    baseUrl: process.env.NODE_ENV === "production" ?"localhost":"/",
  },
  mode: 'universal',
  // 因为默认打包为1000kb,所以: 每次打包后，会有包溢出的警告。  解决:手动覆盖默认包的大小
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/common.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  transition:{
    name:'l',
  },
  router:{
    // 利用中间件，可以做权限登录
    middleware:'router',
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/element-ui',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
