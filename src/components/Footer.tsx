import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/logo/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { useTranslations } from 'next-intl'

function Navigation() {
  const t = useTranslations()

  const navigation = [
    {
      title: t('common.root-layout.footer.work'),
      links: [
        { title: 'UML.chat', href: '/work/posts/uml-chat' },
        {
          title: (
            <>
              {t('common.actions.see-all')}{' '}
              <span aria-hidden="true">{t('common.symbols.arrow-right')}</span>
            </>
          ),
          href: '/work',
        },
      ],
    },
    {
      title: t('common.root-layout.footer.company'),
      links: [
        { title: t('common.root-layout.footer.about'), href: '/about' },
        { title: t('common.root-layout.footer.process'), href: '/process' },
        { title: t('common.root-layout.footer.blog'), href: '/blog' },
        { title: t('common.root-layout.footer.contact'), href: '/contact' },
      ],
    },
    {
      title: t('common.root-layout.footer.connect'),
      links: socialMediaProfiles,
    },
  ]

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  const t = useTranslations('common.root-layout.footer')
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">{/*<NewsletterForm />*/}</div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8 w-auto" />
          </Link>
          <p className="text-sm text-neutral-700">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
