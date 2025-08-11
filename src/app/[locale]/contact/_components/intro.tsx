import { PageIntro } from '@/components/PageIntro'
import { useTranslations } from 'next-intl'

export function ContactPageIntro() {
  const t = useTranslations('contact.intro')

  return (
    <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
      <p>{t('description')}</p>
    </PageIntro>
  )
}
