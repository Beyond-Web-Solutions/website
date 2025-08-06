import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
import UmlChatLight from '@/images/clients/uml-chat/logo-light.svg'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'

const clients = [['UML.chat', UmlChatLight]]

export function HomePageClients() {
  const t = useTranslations('home.clients')

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {t('title')}
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    className="h-9 w-auto"
                    src={logo}
                    alt={client}
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
