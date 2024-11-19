import { Metadata } from "next";
import { HomeHero } from "@/app/_components/home/hero/hero";
import { Services } from "@/app/_components/home/services";
import { HomeStats } from "./_components/home/stats";
import { HowWeWork } from "@/app/_components/home/how-we-work";
import { WhatTheySay } from "@/app/_components/home/what-they-say/wrapper";
import { Contact } from "@/app/_components/home/contact";
import { AboutUs } from "@/app/_components/home/about/wrapper";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: "",
  };
}

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <Services />
      <HomeStats />
      <HowWeWork />
      <WhatTheySay />
      <AboutUs />
      <Contact />
    </main>
  );
}
