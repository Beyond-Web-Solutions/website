import { CloudIcon, CodeIcon, GlobeIcon, PencilRulerIcon } from "lucide-react";
import { Section } from "@/app/_components/section";
import { BlurFade } from "@/_components/animations/blur-fade";

export function Services() {
  const services = [
    {
      label: "Webapplicaties",
      description:
        "Ontwikkeling van robuuste webapplicaties die aansluiten bij jouw behoeften.",
      icon: GlobeIcon,
    },
    {
      label: "UI/UX ontwerp",
      description:
        "Design van gebruiksvriendelijke en visueel aantrekkelijke interfaces.",
      icon: PencilRulerIcon,
    },
    {
      label: "Cloud oplossingen",
      description:
        "Aanbieden van flexibele cloudinfrastructuur voor betrouwbare en krachtige prestaties.",
      icon: CloudIcon,
    },
    {
      label: "API ontwikkeling",
      description:
        "Ontwikkeling van maatwerk API's voor naadloze integratie en uitbreiding van functionaliteiten.",
      icon: CodeIcon,
    },
  ];

  return (
    <Section
      id="services"
      className="bg-primary"
      titleClassName="text-secondary"
      title="Wat Beyond Web Solutions voor jou kan betekenen."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <BlurFade
            className="grid gap-20 rounded-xl bg-secondary/5 p-8"
            key={service.label}
            delay={0.2 * index}
            inView
          >
            <p className="text-sm font-bold text-secondary">0{index + 1}</p>
            <div className="grid gap-8">
              <service.icon className="size-16 stroke-1 text-secondary" />
              <div className="grid gap-4">
                <p className="text-3xl font-extrabold text-secondary xl:text-2xl">
                  {service.label}
                </p>
                <p className="text-secondary/70">{service.description}</p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
