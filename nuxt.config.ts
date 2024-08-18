// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: ["@vueuse/motion/nuxt", "@nuxtjs/i18n"],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0
            }
          }
        }
      }
    }
  },

  // config directory
  app: {
    buildAssetsDir: "assets",
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          crossorigin: "anonymous",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        },
        // { rel: "icon", type: "image/png", href: "/coffee-icon.jpg" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
        }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" }
  },
  pages: true,
  components: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "v-calendar/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    preset: "node-server"
  },
  build: {}
});
