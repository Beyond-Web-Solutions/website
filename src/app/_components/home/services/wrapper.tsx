import { CloudIcon, CodeIcon, GlobeIcon, PencilRulerIcon } from "lucide-react";

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
    <section
      id="services"
      className="w-full rounded-tl-3xl rounded-tr-3xl bg-primary"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-56 pt-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h2 className="text-6xl text-secondary">
            Wat Beyond Web Solutions voor jou kan betekenen.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="grid gap-24 rounded-xl bg-secondary/5 p-8"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
