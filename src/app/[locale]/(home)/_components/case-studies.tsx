import { loadCaseStudies } from '@/lib/mdx'
import { getTranslations } from 'next-intl/server'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Link from 'next/link'
import Image from 'next/image'

export async function HomePageCaseStudies() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3)
  const t = await getTranslations('home.case-studies')

  return (
    <>
      <SectionIntro title={t('title')} className="mt-24 sm:mt-32 lg:mt-40">
        <p>{t('subtitle')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-auto"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  {/* eslint-disable-next-line react/jsx-no-literals */}
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{t('case-study')}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
