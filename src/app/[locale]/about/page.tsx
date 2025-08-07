import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { RootLayout } from '@/components/RootLayout'
import { AboutIntro } from '@/app/[locale]/about/_components/intro'
import { AboutStats } from '@/app/[locale]/about/_components/stats'
import { AboutCulture } from '@/app/[locale]/about/_components/culture'
import { AboutTeam } from '@/app/[locale]/about/_components/team'
import { AboutBlog } from '@/app/[locale]/about/_components/blog'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default function About() {
  return (
    <RootLayout>
      <AboutIntro />
      <AboutStats />
      <AboutCulture />
      <AboutTeam />
      <AboutBlog />
      <ContactSection />
    </RootLayout>
  )
}
