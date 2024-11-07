import DarkLogo from "../../../public/logo/dark.png";
import LightLogo from "../../../public/logo/light.png";
import Image from "next/image";
import { HyperText } from "@/app/[locale]/_components/hyper-text";
import { getScopedI18n } from "@/lib/i18n/server";
import { Metadata } from "next";
import React from "react";
import { Locale } from "@/lib/i18n/constants";
import { setStaticParamsLocale } from "next-international/server";

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ locale: Locale }>;
}>): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const t = await getScopedI18n("home.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const t = await getScopedI18n("home");

  return (
    <div className="h-screen w-screen flex gap-20 flex-col justify-center items-center">
      <Image
        className="block dark:hidden w-1/12"
        src={DarkLogo}
        alt="Beyond Web Solutions | Logo"
      />
      <Image
        className="hidden dark:block w-1/12"
        src={LightLogo}
        alt="Beyond Web Solutions | Logo"
      />
      <HyperText
        text={t("coming-soon")}
        className="text-fill dark:text-secondary text-primary"
      />
    </div>
  );
}
