"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarDaysIcon,
  CodeIcon,
  FileSearchIcon,
  HandshakeIcon,
  MessageCircleIcon,
  PencilRulerIcon,
  RocketIcon,
  SettingsIcon,
  TestTubeIcon,
} from "lucide-react";
import { ElementRef, useRef } from "react";
import { Section } from "@/app/_components/section";

const steps = [
  {
    label: "Kennismaking",
    description:
      "Tijdens een eerste gesprek worden doelen, wensen en uitdagingen besproken om de richting van het project te bepalen.",
    icon: HandshakeIcon,
  },
  {
    label: "Behoeftenanalyse",
    description:
      "Alle benodigde functionaliteiten worden in kaart gebracht en vastgelegd in een helder Software Requirements Specification (SRS).",
    icon: FileSearchIcon,
  },
  {
    label: "Planning",
    description:
      "Op basis van de eisen wordt een realistisch plan gemaakt, inclusief een tijdlijn en projectfasen.",
    icon: CalendarDaysIcon,
  },
  {
    label: "UI/UX Ontwerp",
    description:
      "Visualisatie van hoe de applicatie eruit zal zien en hoe gebruikers ermee werken.",
    icon: PencilRulerIcon,
  },
  {
    label: "Ontwikkeling",
    description:
      "De webapplicatie wordt gebouwd met een focus op robuustheid en gebruiksvriendelijkheid.",
    icon: CodeIcon,
  },
  {
    label: "Testen",
    description:
      "Elk onderdeel wordt grondig getest om ervoor te zorgen dat alles werkt zoals bedoeld.",
    icon: TestTubeIcon,
  },
  {
    label: "Feedbackronde",
    description:
      "De applicatie wordt gepresenteerd, waarbij ruimte is voor aanpassingen op basis van feedback.",
    icon: MessageCircleIcon,
  },
  {
    label: "Lancering",
    description:
      "De applicatie wordt live gezet en is klaar voor gebruik door eindgebruikers.",
    icon: RocketIcon,
  },
  {
    label: "Onderhoud & Doorontwikkeling",
    description:
      "Ondersteuning blijft beschikbaar voor updates, onderhoud en eventuele uitbreiding van functionaliteiten.",
    icon: SettingsIcon,
  },
];

// TODO; just display the list on mobile no fancy scroll animation
export function HowWeWork() {
  const ref = useRef<ElementRef<"section">>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((320 + 64 + 16) * steps.length)],
  );

  return (
    <>
      <section
        ref={ref}
        className="relative -mt-8 hidden h-[100vh] overflow-x-clip rounded-tl-3xl rounded-tr-3xl bg-tertiary lg:block"
      >
        <div className="sticky top-0 -mt-8 rounded-tl-3xl rounded-tr-3xl">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-40 pt-32 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h2 className="max-w-full break-words text-5xl md:text-6xl">
                Onze <br className="block md:hidden" />
                werkwijze
              </h2>
            </div>
            <motion.div
              id="carousel"
              style={{ translateX }}
              className="flex space-x-4"
            >
              {steps.map((service, index) => (
                <div
                  key={service.label}
                  className="z-20 grid w-[320px] max-w-full gap-20 rounded-xl bg-primary/5 p-8 [&>*]:text-primary"
                >
                  <p className="text-sm font-bold text-secondary">
                    0{index + 1}
                  </p>
                  <div className="grid gap-8">
                    <service.icon className="size-16 stroke-1" />
                    <div className="grid gap-4">
                      <p className="text-3xl font-extrabold xl:text-2xl">
                        {service.label}
                      </p>
                      <p className="!text-primary/70">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Section id="how-we-work"></Section>
    </>
  );
}
