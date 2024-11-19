import { Section } from "@/app/_components/section";
import { Testimonials } from "@/app/_components/home/what-they-say/testimonials";

export function WhatTheySay() {
  return (
    <Section
      id="what-they-say"
      title="Wat ze over ons zeggen"
      className="bg-secondary"
      titleClassName="text-primary"
    >
      <Testimonials />
      {/*Brand logo's*/}
      <div></div>
    </Section>
  );
}
