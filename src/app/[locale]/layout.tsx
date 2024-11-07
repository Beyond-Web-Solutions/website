import React from "react";
import { Poppins } from "next/font/google";
import { Locale, locales } from "@/lib/i18n/constants";
import "../globals.css";
import { Metadata } from "next";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: {
    template: "%s | Beyond Web Solutions",
    default: "Beyond Web Solutions",
  },
  metadataBase: new URL("https://beyond-web.nl"),
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
