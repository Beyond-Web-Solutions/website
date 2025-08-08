import { useTranslations } from 'next-intl'
import { PageIntro } from '@/components/PageIntro'

export function ProcessPageIntro() {
  const t = useTranslations('process.intro')

  return (
    <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
      <p>{t('description')}</p>
    </PageIntro>
  )
}
