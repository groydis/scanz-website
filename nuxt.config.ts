// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'SCANZ',
      titleTemplate: (titleChunk) =>
        titleChunk && titleChunk !== 'SCANZ' ? `${titleChunk} | SCANZ` : 'SCANZ',
      htmlAttrs: {
        lang: 'en-AU',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'SCANZ is a casual Star Citizen community for Australia and New Zealand players, welcoming new and veteran pilots across every playstyle.',
        },
        { name: 'theme-color', content: '#f54d14' },
        { property: 'og:site_name', content: 'SCANZ' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'SCANZ - Star Citizen Australia & New Zealand',
        },
        {
          property: 'og:description',
          content:
            'Join SCANZ, a casual Star Citizen community for Australia and New Zealand players.',
        },
        { property: 'og:image', content: '/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
})
