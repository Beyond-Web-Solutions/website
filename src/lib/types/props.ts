import { ReactNode } from 'react'
import { Locale } from 'next-intl'

export type LayoutProps<Params = undefined> = Readonly<{
  children: ReactNode
  params: Promise<
    { locale: Locale } & (Params extends undefined ? object : Params)
  >
}>

// add params when they're not undefined
export type PageProps<Params = undefined, SearchParams = undefined> = Readonly<
  {
    params: Promise<
      { locale: Locale } & (Params extends undefined ? object : Params)
    >
  } & (SearchParams extends undefined
    ? object
    : { searchParams: Promise<SearchParams> })
>
