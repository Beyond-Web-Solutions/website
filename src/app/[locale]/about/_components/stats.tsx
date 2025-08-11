import { Container } from '@/components/Container'
import { StatList, StatListItem } from '@/components/StatList'
import { useTranslations } from 'next-intl'

export function AboutStats() {
  const t = useTranslations('about.stats')

  return (
    <Container className="mt-16">
      <StatList>
        <StatListItem value="5+" label={t('1')} />
        <StatListItem value="20+" label={t('2')} />
        <StatListItem value="95+" label={t('3')} />
      </StatList>
    </Container>
  )
}
