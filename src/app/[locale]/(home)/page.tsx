import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { RootLayout } from '@/components/RootLayout'
import { HomePageHero } from '@/app/[locale]/(home)/_components/hero'
import { HomePageClients } from '@/app/[locale]/(home)/_components/clients'
import { HomePageCaseStudies } from '@/app/[locale]/(home)/_components/case-studies'
import { HomePageTestimonial } from '@/app/[locale]/(home)/_components/testimonial'
import { HomePageServices } from '@/app/[locale]/(home)/_components/services'
import { PageProps } from '@/lib/types/props'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home.metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Home() {
  return (
    <RootLayout>
      <HomePageHero />
      <HomePageClients />
      <HomePageCaseStudies />
      <HomePageTestimonial />
      <HomePageServices />
      <ContactSection />
    </RootLayout>
  )
}
