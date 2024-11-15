import { HomeStatsIcon } from "@/app/_components/home/stats/icon";

export function HomeClients() {
  return (
    <section className="bg-primary w-full rounded-tr-3xl rounded-tl-3xl">
      <div className="max-w-7xl mx-auto py-36 px-6 lg:px-8 grid grid-cols-3">
        <h2 className="text-secondary text-5xl col-span-2 font-semibold">
          Een goede webapplicatie bouwen is een uitdaging, maar wij hebben er
          dit jaar meer dan 5 gemaakt.
        </h2>
        <HomeStatsIcon />
      </div>
    </section>
  );
}
