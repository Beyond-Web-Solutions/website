import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { List, ListItem } from '@/components/List'
import { useTranslations } from 'next-intl'

export function HomePageServices() {
  const t = useTranslations('home.services')

  return (
    <>
      <SectionIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('subtitle')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title={t('list.web-development.title')}>
              {t('list.web-development.description')}
            </ListItem>
            <ListItem title={t('list.ai-integration.title')}>
              {t('list.ai-integration.description')}
            </ListItem>
            <ListItem title={t('list.consultancy.title')}>
              {t('list.consultancy.description')}
            </ListItem>
            <ListItem title={t('list.e-commerce.title')}>
              {t('list.e-commerce.description')}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}
