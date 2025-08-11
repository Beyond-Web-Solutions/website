import { PageIntro } from '@/components/PageIntro'
import { useTranslations } from 'next-intl'

export function AboutIntro() {
  const t = useTranslations('about.intro')

  return (
    <PageIntro eyebrow="About us" title={t('title')}>
      <p>{t('subtitle')}</p>
      <div className="mt-10 max-w-2xl space-y-6 text-base">
        <p>{t('paragraphs.1')}</p>
        <p>{t('paragraphs.2')}</p>
      </div>
    </PageIntro>
  )
}
