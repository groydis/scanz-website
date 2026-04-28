// https://nuxt.com/docs/api/configuration/nuxt-config

/** When true, @nuxt/content uses `node:sqlite` and skips the better-sqlite3 auto-install prompt (avoids TTY errors in non-interactive environments). */
function nuxtContentCanUseNodeSqlite(): boolean {
  try {
    return Boolean(
      (process as NodeJS.Process & { getBuiltinModule?: (id: string) => unknown })
        .getBuiltinModule?.('node:sqlite'),
    )
  } catch {
    return false
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/content'],
  content: {
    experimental: nuxtContentCanUseNodeSqlite() ? { nativeSqlite: true } : {},
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'SCANZ – Star Citizen Australia & New Zealand Community',
      htmlAttrs: {
        lang: 'en-AU',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
