import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import { formatDate } from '@/lib/formatDate'
import { RootLayout } from '@/components/RootLayout'
import { WorkPageIntro } from '@/app/[locale]/work/_components/intro'
import { WorkPageCaseStudies } from '@/app/[locale]/work/_components/case-studies'
import { WorkPageTestimonial } from '@/app/[locale]/work/_components/testimonial'
import { WorkPageClients } from '@/app/[locale]/work/_components/clients'
import { PageProps } from '@/lib/types/props'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: 'work.metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Work() {
  return (
    <RootLayout>
      <WorkPageIntro />
      <WorkPageCaseStudies />
      <WorkPageTestimonial />
      <WorkPageClients />
      <ContactSection />
    </RootLayout>
  )
}
