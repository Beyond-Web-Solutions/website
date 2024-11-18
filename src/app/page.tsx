import { Metadata } from "next";
import { HomeHero } from "@/app/_components/home/hero/hero";
import { Services } from "@/app/_components/home/services";
import { HomeStats } from "./_components/home/stats/stats";
import { HowWeWork } from "@/app/_components/home/how-we-work/container";

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
      <Services />
    </main>
  );
}
