import { Metadata } from "next";
import { HomeHero } from "@/app/_components/home/hero/hero";
import { Services } from "@/app/_components/home/services";
import { HomeStats } from "./_components/home/stats";
import { HowWeWork } from "@/app/_components/home/how-we-work";

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
      <div className="h-[400vh]" />
    </main>
  );
}
