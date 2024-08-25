// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      "nuxt-quasar-ui",
      "@vee-validate/nuxt",
      "@pinia/nuxt"
  ],
    build: {
        transpile: ['yup'],
    },
    typescript: {
        shim: false,
    },
    alias: {
        yup: 'Yup',
    },
})