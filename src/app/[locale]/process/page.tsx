import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { RootLayout } from '@/components/RootLayout'
import { PageProps } from '@/lib/types/props'
import { getTranslations } from 'next-intl/server'
import { ProcessPageIntro } from '@/app/[locale]/process/_components/intro'
import { ProcessPageIdea } from '@/app/[locale]/process/_components/process/idea'
import { ProcessPageCreation } from '@/app/[locale]/process/_components/process/creation'
import { ProcessPageImpact } from '@/app/[locale]/process/_components/process/impact'
import { ProcessPageValues } from '@/app/[locale]/process/_components/values'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: 'process.metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Process() {
  return (
    <RootLayout>
      <ProcessPageIntro />

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <ProcessPageIdea />
        <ProcessPageCreation />
        <ProcessPageImpact />
      </div>

      <ProcessPageValues />

      <ContactSection />
    </RootLayout>
  )
}
