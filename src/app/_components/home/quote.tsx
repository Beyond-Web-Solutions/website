import { Section } from "@/app/_components/section";
import { QuoteIcon } from "lucide-react";

export function HomeBlockQuote() {
  return (
    <Section
      id="stats"
      title="Een goede webapplicatie bouwen is een uitdaging, maar wij doen het continu"
      className="bg-secondary text-center"
      titleClassName="text-primary col-span-2 z-10"
    >
      <QuoteIcon className="absolute left-16 top-8 size-40 text-tertiary 2xl:-left-24" />
    </Section>
  );
}
