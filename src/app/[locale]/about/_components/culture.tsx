import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { useTranslations } from 'next-intl'

export function AboutCulture() {
  const t = useTranslations('about.culture')

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow={t('eyebrow')} title={t('title')} invert>
        <p>{t('subtitle')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={t('values.quality.title')} invert>
            {t('values.quality.description')}
          </GridListItem>
          <GridListItem title={t('values.innovation.title')} invert>
            {t('values.innovation.description')}
          </GridListItem>
          <GridListItem title={t('values.transparency.title')} invert>
            {t('values.transparency.description')}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
