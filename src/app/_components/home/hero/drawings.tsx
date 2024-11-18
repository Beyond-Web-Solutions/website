import { HomeHeroCircle1 } from "@/app/_components/home/hero/symbols/cirlce1";
import { HomeHeroDots } from "@/app/_components/home/hero/symbols/dots";
import { HomeHeroCircle2 } from "@/app/_components/home/hero/symbols/cirlce2";
import { HomeHeroCircle3 } from "@/app/_components/home/hero/symbols/cirlce3";

export function HomeHeroShapes() {
  return (
    <div className="relative [&>svg]:absolute">
      <HomeHeroCircle1 className="-top-12 right-48 z-10" />
      <HomeHeroDots className="top-18 right-8" />
      <HomeHeroCircle2 className="-right-6 top-16" />
      <HomeHeroCircle3 className="right-20 top-40" />
    </div>
  );
}
