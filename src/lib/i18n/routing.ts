import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['nl-NL'],
  defaultLocale: 'nl-NL',
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      'nl-NL': '/nl',
    },
  },
  pathnames: {
    '/': '/',
  },
})
