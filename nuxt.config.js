import pkg from './package'
import info from './content/setup/info'
import path from 'path'
import glob from 'glob'

var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/*.json',
  '/subject': 'subject/*.json',
});

console.log(dynamicRoutes);

export default {
  mode: 'universal',

  head: {
    title: info.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'apple-mobile-web-app-capable', content: 'yes'},
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap' },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/244be9cb46.js",
        type: "text/javascript"
      }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },

  loading: { color: '#fff' },

  css: [
  ],

  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/language'}
  ],

  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv'
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  generate: {
    fallback: false,
    routes: dynamicRoutes
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
