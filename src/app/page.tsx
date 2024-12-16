import { Metadata } from "next";
import { HomeHero } from "@/app/_components/home/hero/hero";
import { WhyUs } from "@/app/_components/home/why-us";
import { HomeBlockQuote } from "./_components/home/quote";
import { HowWeWork } from "@/app/_components/home/how-we-work";
import { WhatTheySay } from "@/app/_components/home/what-they-say/wrapper";
import { AboutUs } from "@/app/_components/home/about/wrapper";
import { CTA } from "@/app/_components/home/cta";

export const metadata: Metadata = {
  title: "Razendsnelle en Betrouwbare Webapplicaties | Beyond Web Solutions",
  description:
    "Kies voor snelle implementatie, maximale betrouwbaarheid en directe samenwerking. Beyond Web Solutions levert maatwerk webapplicaties die uitblinken in snelheid, prestaties en gebruiksvriendelijkheid.",
  keywords: [
    "maatwerk webapplicaties",
    "snelle webapplicaties",
    "betrouwbare webapplicaties",
    "webapplicatie ontwikkeling",
    "directe samenwerking met ontwikkelaar",
    "snel implementeren",
    "robuste digitale oplossingen",
    "webapplicaties op maat",
    "performance webapplicaties",
    "gebruiksvriendelijke webapplicaties",
    "cloud oplossingen",
    "maatwerk websites",
    "webapplicatie ontwikkelaar",
  ],
  twitter: {
    images: [
      {
        url: new URL("https://beyond-web.nl/open-graph/big.jpg"),
      },
    ],
  },
  openGraph: {
    siteName: "Beyond Web Solutions",
    url: new URL("https://beyond-web.nl"),
    locale: "nl-NL",
    type: "website",
    images: [
      {
        url: new URL("https://beyond-web.nl/open-graph/big.jpg"),
      },
    ],
  },
};

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <WhyUs />
      <HomeBlockQuote />
      <HowWeWork />
      <WhatTheySay />
      <AboutUs />
      <CTA />
    </main>
  );
}
