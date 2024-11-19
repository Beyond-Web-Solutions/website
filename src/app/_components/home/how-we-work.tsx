import {
  CodeIcon,
  FileSearchIcon,
  HandshakeIcon,
  MessageCircleIcon,
  PencilRulerIcon,
  RocketIcon,
  SettingsIcon,
  TestTubeIcon,
} from "lucide-react";
import { Section } from "@/app/_components/section";
import { BlurFade } from "@/_components/animations/blur-fade";

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
      "Alle benodigde functionaliteiten worden in kaart gebracht en vastgelegd in een Software Requirements Specification (SRS).",
    icon: FileSearchIcon,
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

export function HowWeWork() {
  return (
    <Section
      id="how-we-work"
      title="Onze Werkwijze"
      className="bg-tertiary"
      titleClassName="text-primary"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <BlurFade
            className="grid gap-20 rounded-xl bg-primary/5 p-8 [&>*]:text-primary"
            key={step.label}
            delay={0.2 * index}
            inView
          >
            <p className="text-sm font-bold text-secondary">
              STAP 0{index + 1}
            </p>
            <div className="grid gap-8">
              <step.icon className="size-16 stroke-1" />
              <div className="grid gap-4">
                <p className="text-3xl font-extrabold xl:text-2xl">
                  {step.label}
                </p>
                <p className="!text-primary/70">{step.description}</p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
