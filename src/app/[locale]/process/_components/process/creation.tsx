import imageLaptop from '@/images/laptop.jpg'
import { ProcessPageSection } from '@/app/[locale]/process/_components/process/section'
import { useTranslations } from 'next-intl'
import { Blockquote } from '@/components/Blockquote'

export function ProcessPageCreation() {
  const t = useTranslations('process.creation')

  return (
    <ProcessPageSection title={t('title')} image={{ src: imageLaptop }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{t('paragraph-1')}</p>
        <p>{t('paragraph-2')}</p>
        <p>{t('paragraph-3')}</p>
      </div>

      <Blockquote
        author={{
          name: t('testimonial.author'),
          role: t('testimonial.company'),
        }}
        className="mt-12"
      >
        {t('testimonial.text')}
      </Blockquote>
    </ProcessPageSection>
  )
}
