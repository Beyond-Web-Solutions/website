import { Section } from "@/app/_components/section";
import { Employee } from "@/app/_components/home/about/employee";

export function AboutUs() {
  const employees = [
    {
      image: "/employees/mees-egberts.jpeg",
      name: "Mees Egberts",
      role: "Eigenaar & Programmeur",
      linkedIn: "https://www.linkedin.com/in/mees-egberts",
      twitter: "https://www.twitter.com/meesegberts",
      github: "https://github.com/MeesEgberts",
    },
  ];

  return (
    <Section
      id="about"
      title="Dit is waar het begint"
      description="Met een passie voor webtechnologieën ligt de focus op robuuste webapplicaties die organisaties vooruithelpen."
      className="bg-white"
      titleClassName="text-primary"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <Employee key={employee.name} {...employee} />
        ))}
      </div>
    </Section>
  );
}
