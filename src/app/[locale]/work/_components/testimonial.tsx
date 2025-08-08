import { useTranslations } from 'next-intl'
import { Testimonial } from '@/components/Testimonial'
import logoUmlChat from '@/images/clients/uml-chat/logo-dark.svg'

export function WorkPageTestimonial() {
  const t = useTranslations('work')

  return (
    <Testimonial
      className="mt-24 sm:mt-32 lg:mt-40"
      client={{ name: 'UML.chat', logo: logoUmlChat }}
    >
      {t('testimonial')}
    </Testimonial>
  )
}
