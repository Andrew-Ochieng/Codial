import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
        ],
        build: {
            transpile:[
                '@fortawesome/vue-fontawesome',
                '@fortawesome/fontawesome-svg-core',
                '@fortawesome/pro-solid-svg-icons',
                '@fortawesome/free-brands-svg-icons'
              ],
        postcss: {
            postcssOptions: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
            },
        },
        },
})
