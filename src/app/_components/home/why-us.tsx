import {
  ClockIcon,
  RocketIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react";

export function WhyUs() {
  const usp = [
    {
      label: "Razendsnelle webapplicaties",
      description:
        "Applicaties die uitblinken in snelheid en prestaties, voor een optimale gebruikerservaring.",
      icon: RocketIcon,
    },
    {
      label: "Eén-op-één samenwerking",
      description:
        "Direct contact met de ontwikkelaar, zonder tussenlagen of accountmanagers.",
      icon: UsersIcon,
    },
    {
      label: "Snelle implementatie",
      description:
        "Jouw oplossing wordt snel geleverd zonder concessies te doen aan betrouwbaarheid of functionaliteit.",
      icon: ClockIcon,
    },
    {
      label: "Maximale betrouwbaarheid",
      description:
        "Robuuste webapplicaties die zijn gebouwd om te blijven draaien, zelfs tijdens piekbelasting.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section
      id="why-us"
      className="-mt-8 w-full rounded-tl-3xl rounded-tr-3xl bg-primary"
    >
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-40 pt-32 lg:px-8">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <h2 className="break-words text-5xl text-secondary md:text-6xl">
            Dit is waarom je voor ons kiest
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {usp.map((point, index) => (
            <div
              key={point.label}
              className="grid gap-20 rounded-xl bg-secondary/5 p-8"
            >
              <p className="text-sm font-bold text-secondary">0{index + 1}</p>
              <div className="grid gap-8">
                <point.icon className="size-16 stroke-1 text-secondary" />
                <div className="grid gap-4">
                  <p className="text-3xl font-extrabold text-secondary xl:text-2xl">
                    {point.label}
                  </p>
                  <p className="text-secondary/70">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
