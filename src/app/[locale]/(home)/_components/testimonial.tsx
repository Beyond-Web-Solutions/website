import { Testimonial } from '@/components/Testimonial'
import logoPrometechDark from '@/images/clients/prometech/logo-dark.svg'
import { useTranslations } from 'next-intl'

export function HomePageTestimonial() {
  const t = useTranslations('home')

  return (
    <Testimonial
      className="mt-24 sm:mt-32 lg:mt-40"
      client={{ name: 'Prometech', logo: logoPrometechDark }}
    >
      {t('testimonial')}
    </Testimonial>
  )
}
