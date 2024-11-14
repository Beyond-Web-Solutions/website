import { Metadata } from "next";
import { HomeHero } from "@/app/_components/home/hero/hero";
import { HomeClients } from "@/app/_components/home/stats/stats";

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
      <HomeClients />
      <div className="h-[300vh]" />
    </main>
  );
}
