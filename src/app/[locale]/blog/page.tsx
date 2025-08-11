import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { RootLayout } from '@/components/RootLayout'
import { PageProps } from '@/lib/types/props'
import { getTranslations } from 'next-intl/server'
import { BlogPageIntro } from '@/app/[locale]/blog/_components/intro'
import { BlogPageArticles } from '@/app/[locale]/blog/_components/articles'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: 'blog.metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Blog() {
  return (
    <RootLayout>
      <BlogPageIntro />
      <BlogPageArticles />
      <ContactSection />
    </RootLayout>
  )
}
