import { Metadata } from "next";
import { HomeHero } from "@/app/_components/home/hero/hero";
import { Services } from "@/app/_components/home/services";
import { HomeBlockQuote } from "./_components/home/quote";
import { HowWeWork } from "@/app/_components/home/how-we-work";
import { WhatTheySay } from "@/app/_components/home/what-they-say/wrapper";
import { AboutUs } from "@/app/_components/home/about/wrapper";
import { CTA } from "@/app/_components/home/cta";

export const metadata: Metadata = {
  title: "Maatwerk Webapplicaties | Beyond Web Solutions",
  description:
    "Beyond Web Solutions: Ontwikkeling van maatwerk webapplicaties met focus op kwaliteit en innovatie. Maak impact met robuuste digitale oplossingen op maat.",
};

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <Services />
      <HomeBlockQuote />
      <HowWeWork />
      <WhatTheySay />
      <AboutUs />
      <CTA />
    </main>
  );
}
