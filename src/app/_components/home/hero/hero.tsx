import { HomeHeroTitle } from "@/app/_components/home/hero/title";

export function HomeHero() {
  return (
    <section className="relative mx-auto max-w-7xl flex-col justify-between space-y-44 px-6 pb-36 pt-16 lg:space-y-36 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <HomeHeroTitle />
      </div>
      <div className="grid h-1/2 grid-cols-1 lg:grid-cols-2">
        <div />
        <p className="text-3xl text-primary md:text-4xl">
          Beyond Web Solutions is een softwarebedrijf dat maatwerk
          webapplicaties ontwikkelt, met focus op kwaliteit en innovatie.
        </p>
      </div>
    </section>
  );
}
