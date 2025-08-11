'use server'

import { z } from 'zod/v4'
import { zfd } from 'zod-form-data'
import { verifyCaptcha } from '@/app/[locale]/contact/_lib/utils/verify-captcha'
import { resend } from '@/lib/resend'
import { getTranslations } from 'next-intl/server'

const schema = zfd.formData({
  name: zfd.text(z.string().nonempty()),
  email: zfd.text(z.email()),
  company: zfd.text(z.string().nonempty()),
  phone: zfd.text(z.string()),
  message: zfd.text(z.string().nonempty()),
  token: zfd.text(z.string().nonempty()),
})

type Response = {
  success: boolean
  message: string
}

export async function contact(_: Response | null, data: FormData) {
  const t = await getTranslations('contact.form.response')
  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: t('validation-error'),
    }
  }

  const validCaptcha = await verifyCaptcha(parsed.data.token)

  if (!validCaptcha) {
    return {
      success: false,
      message: t('captcha'),
    }
  }

  const response = await resend.emails.send({
    from: 'Beyond Web Solutions <no-reply@beyond-web.nl>',
    to: `info@beyond-web.nl`,
    replyTo: [parsed.data.email],
    subject: `Contact form submission from ${parsed.data.name}`,
    text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nCompany: ${parsed.data.company}\nPhone: ${parsed.data.phone}\nMessage: ${parsed.data.message}`,
  })

  if (response.error) {
    return {
      success: false,
      message: t('error'),
    }
  }
  return {
    success: true,
    message: t('success'),
  }
}
