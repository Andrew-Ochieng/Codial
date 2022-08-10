import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // global page headers
    head: {
        title: 'codial solutions',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    css: ['@/assets/css/main.css'],
    build: {
        postcss: {
            postcssOptions: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
            },
        },
    },

    // buildModules: [
    //     '@nuxtjs/fontawesome',
    //   ],
    
      fontawesome: {
        component: 'fa',
        icons: {
            solid: true,
            brands: true
        }
    },

    
})
