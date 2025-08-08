import imageWhiteboard from '@/images/whiteboard.jpg'
import { TagList, TagListItem } from '@/components/TagList'
import { ProcessPageSection } from '@/app/[locale]/process/_components/process/section'
import { useTranslations } from 'next-intl'

export function ProcessPageIdea() {
  const t = useTranslations('process.idea')

  return (
    <ProcessPageSection title={t('title')} image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{t('paragraph-1')}</p>
        <p>{t('paragraph-2')}</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        {t('list.title')}
      </h3>
      <TagList className="mt-4">
        <TagListItem>{t('list.items.1')}</TagListItem>
        <TagListItem>{t('list.items.2')}</TagListItem>
        <TagListItem>{t('list.items.3')}</TagListItem>
        <TagListItem>{t('list.items.4')}</TagListItem>
      </TagList>
    </ProcessPageSection>
  )
}
