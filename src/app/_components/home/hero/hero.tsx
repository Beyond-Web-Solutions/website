import { HomeHeroTitle } from "@/app/_components/home/hero/title";
import { BlurFade } from "@/_components/animations/blur-fade";

export function HomeHero() {
  return (
    <section className="flex-col justify-between max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <HomeHeroTitle />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2">
        <div />
        <BlurFade>
          <p className="text-primary text-3xl md:text-4xl">
            Beyond Web Solutions is een softwarebedrijf dat maatwerk
            webapplicaties ontwikkelt, met focus op kwaliteit en innovatie.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
