import { PageLinks } from '@/components/PageLinks'
import { loadArticles } from '@/lib/mdx'
import { getTranslations } from 'next-intl/server'

export async function AboutBlog() {
  const articles = (await loadArticles()).slice(0, 2)
  const t = await getTranslations('about.blog')

  return (
    <PageLinks
      className="mt-24 sm:mt-32 lg:mt-40"
      title={t('title')}
      intro={t('subtitle')}
      pages={articles}
    />
  )
}
