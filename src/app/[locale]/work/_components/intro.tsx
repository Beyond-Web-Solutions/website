import { PageIntro } from '@/components/PageIntro'
import { useTranslations } from 'next-intl'

export function WorkPageIntro() {
  const t = useTranslations('work.intro')

  return (
    <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
      <p>{t('subtitle')}</p>
    </PageIntro>
  )
}
