import { routing } from '@/lib/i18n/routing'
import messages from './messages/nl-NL.json'

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
  }
}
