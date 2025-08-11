import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import Image from 'next/image'
import { Container } from '@/components/Container'
import logoUmlChat from '@/images/clients/uml-chat/logo-dark.svg'
import logoPrometech from '@/images/clients/prometech/logo-dark.svg'
import { useTranslations } from 'next-intl'

const clients = [
  ['UML.chat', logoUmlChat],
  ['Prometech', logoPrometech],
]

export function WorkPageClients() {
  const t = useTranslations('work')

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          {t('clients')}
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image
                    src={logo}
                    alt={client}
                    className="h-9 w-auto"
                    unoptimized
                  />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}
