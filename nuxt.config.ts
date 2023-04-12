// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config'
        // exposeConfig: false,
        // config: {},
        // injectPosition: 0,
        // viewer: true,
    }
})
