import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { PageProps } from '@/lib/types/props'
import { getTranslations } from 'next-intl/server'
import { ContactPageIntro } from '@/app/[locale]/contact/_components/intro'
import { ContactPageDetails } from '@/app/[locale]/contact/_components/details'
import { ContactPageForm } from '@/app/[locale]/contact/_components/form'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: 'contact.metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Contact() {
  return (
    <RootLayout>
      <ContactPageIntro />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactPageForm />
          <ContactPageDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
