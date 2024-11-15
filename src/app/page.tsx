import { Metadata } from "next";
import { HomeHero } from "@/app/_components/home/hero/hero";
import { Services } from "@/app/_components/home/services/wrapper";

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
      <div className="h-[300vh]" />
      {/*<HomeClients />*/}
    </main>
  );
}
