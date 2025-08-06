import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { LayoutProps } from '@/lib/types/props'
import { setRequestLocale } from 'next-intl/server'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/lib/i18n/routing'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
