import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { RootLayout } from '@/components/RootLayout'
import { AboutIntro } from '@/app/[locale]/about/_components/intro'
import { AboutStats } from '@/app/[locale]/about/_components/stats'
import { AboutCulture } from '@/app/[locale]/about/_components/culture'
import { AboutTeam } from '@/app/[locale]/about/_components/team'
import { AboutBlog } from '@/app/[locale]/about/_components/blog'
import { PageProps } from '@/lib/types/props'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: 'about.metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function About() {
  return (
    <RootLayout>
      <AboutIntro />
      <AboutStats />
      <AboutCulture />
      <AboutTeam />
      <AboutBlog />
      <ContactSection />
    </RootLayout>
  )
}
