import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { useTranslations } from 'next-intl'

export function ProcessPageValues() {
  const t = useTranslations('process.values')

  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('subtitle')}</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title={t('values.quality.title')}>
            {t('values.quality.description')}
          </GridListItem>
          <GridListItem title={t('values.efficiency.title')}>
            {t('values.efficiency.description')}
          </GridListItem>
          <GridListItem title={t('values.flexibility.title')}>
            {t('values.flexibility.description')}
          </GridListItem>
          <GridListItem title={t('values.transparency.title')}>
            {t('values.transparency.description')}
          </GridListItem>
          <GridListItem title={t('values.partnership.title')}>
            {t('values.partnership.description')}
          </GridListItem>
          <GridListItem title={t('values.innovation.title')}>
            {t('values.innovation.description')}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
