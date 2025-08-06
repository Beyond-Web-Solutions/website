import Image from 'next/image'
import { ComponentProps } from 'react'
import { useTranslations } from 'next-intl'
import WhiteLogo from './white.png'
import BlackLogo from './black.png'
import BlackEmblem from './black-emblem.png'
import WhiteEmblem from './white-emblem.png'

interface Props
  extends Omit<
    ComponentProps<typeof Image>,
    'src' | 'alt' | 'width' | 'height'
  > {
  invert?: boolean
}

export function Logomark({ invert, ...props }: Props) {
  const t = useTranslations('common')

  if (invert) {
    return <Image src={WhiteEmblem} alt={t('organization-name')} {...props} />
  }

  return <Image src={BlackEmblem} alt={t('organization-name')} {...props} />
}

export function Logo({ invert, ...props }: Props) {
  const t = useTranslations('common')

  if (invert) {
    return <Image src={WhiteLogo} alt={t('organization-name')} {...props} />
  }

  return <Image src={BlackLogo} alt={t('organization-name')} {...props} />
}
