import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { LayoutProps, PageProps } from '@/lib/types/props'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/lib/i18n/routing'
import { notFound } from 'next/navigation'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import Head from 'next/head'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'common.root-layout.metadata',
  })

  return {
    title: {
      template: '%s - Studio',
      default: 'Studio - Award winning developer studio based in Denmark',
    },
  }
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} className="h-full bg-neutral-950 text-base antialiased">
      <Head>
        <meta
          name="apple-mobile-web-app-title"
          content="Beyond Web Solutions"
        />
      </Head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
