'use client'

import { FadeIn } from '@/components/FadeIn'
import {
  ComponentPropsWithoutRef,
  useActionState,
  useId,
  useState,
} from 'react'
import { useTranslations } from 'next-intl'
import { contact } from '@/app/[locale]/contact/_lib/actions/contact'
import Form from 'next/form'
import { Button } from '@/components/Button'
import Turnstile from 'react-turnstile'
import { Spinner } from '@/app/[locale]/contact/_components/spinner'
import clsx from 'clsx'

export function ContactPageForm() {
  const t = useTranslations('contact.form')

  const [token, setToken] = useState<string>('')

  const [state, action, pending] = useActionState(contact, null)

  return (
    <FadeIn className="lg:order-last">
      <Form action={action}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t('title')}
        </h2>
        {state && (
          <div
            className={clsx(
              'mt-6 mb-8 rounded-2xl border p-6 text-base/6',
              state.success
                ? 'border-neutral-300'
                : 'border-red-600 text-red-500',
            )}
          >
            {state.message}
          </div>
        )}
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t('fields.name')} name="name" autoComplete="name" />
          <TextInput
            label={t('fields.email')}
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label={t('fields.company')}
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label={t('fields.phone')}
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <input className="hidden" name="token" value={token} readOnly />
          <TextInput label={t('fields.message')} name="message" />
        </div>
        <Button disabled={pending} type="submit" className="mt-10">
          {pending ? <Spinner /> : t('submit')}
        </Button>
        <Turnstile
          sitekey={String(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)}
          onVerify={setToken}
        />
      </Form>
    </FadeIn>
  )
}

function TextInput({
  label,
  ...props
}: ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}
