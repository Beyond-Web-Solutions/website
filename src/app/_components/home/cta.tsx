import { Section } from "@/app/_components/section";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <Section
      id="cta"
      title="Een project in gedachten?"
      className="bg-tertiary [&>div]:gap-4"
      titleClassName="text-primary col-span-2 !text-2xl md:!text-3xl text-center"
    >
      <div className="grid gap-16">
        <p className="text-center text-[20vw] leading-none sm:text-[15vw] md:text-[9vw]">
          Let’s work
          <br />
          together
        </p>
        <Link
          href="https://calendar.app.google/AMCUDvoELqb9ivx57"
          target="_blank"
          className="mx-auto flex w-fit items-center rounded-full bg-primary/95 px-6 py-4 font-semibold text-secondary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Plan een kennismaking
          <ExternalLinkIcon className="ml-2 size-4" />
        </Link>
      </div>
    </Section>
  );
}
