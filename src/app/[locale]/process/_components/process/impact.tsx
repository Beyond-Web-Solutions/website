import imageMeeting from '@/images/meeting.jpg'
import { ProcessPageSection } from '@/app/[locale]/process/_components/process/section'
import { useTranslations } from 'next-intl'
import { List, ListItem } from '@/components/List'

export function ProcessPageImpact() {
  const t = useTranslations('process.impact')

  return (
    <ProcessPageSection title={t('title')} image={{ src: imageMeeting }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{t('paragraph-1')}</p>
        <p>{t('paragraph-2')}</p>
        <p>{t('paragraph-3')}</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        {t('list.title')}
      </h3>
      <List className="mt-8">
        <ListItem title={t('list.items.1.title')}>
          {t('list.items.1.description')}
        </ListItem>
        <ListItem title={t('list.items.2.title')}>
          {t('list.items.2.description')}
        </ListItem>
        <ListItem title={t('list.items.3.title')}>
          {t('list.items.3.description')}
        </ListItem>
      </List>
    </ProcessPageSection>
  )
}
