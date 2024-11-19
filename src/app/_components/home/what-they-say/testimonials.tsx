import { QuoteIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 [&>div]:rounded-xl [&>div]:bg-white/25 [&>div]:p-12">
      <div className="grid gap-6 text-center">
        <div className="grid gap-2">
          <p className="text-[6rem] font-bold leading-none">5.0</p>
          <div className="flex justify-center [&>svg]:size-5 [&>svg]:fill-[#F45640] [&>svg]:text-[#F45640]">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="text-sm text-primary/70">(+5 reviews)</p>
        </div>
        <p className="break-all text-3xl font-semibold">
          Ondersteunt bedrijven met betrouwbare webapplicaties
        </p>
      </div>
      <div className="grid grid-cols-1 divide-y divide-tertiary lg:col-span-2 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <div className="grid gap-6 pb-6 lg:pb-0 lg:pr-6">
          <QuoteIcon className="size-12 text-quaternary" />

          <div className="grid gap-6">
            <p className="text-2xl text-primary/80">
              Beyond Web Solutions leverde een robuuste webapplicatie die
              perfect aansluit bij onze behoeften. Heldere communicatie en
              topkwaliteit!
            </p>
            <div className="flex items-center justify-between">
              <div className="grid flex-1 [&>p]:leading-tight">
                <p className="font-bold">Florian Käding</p>
                <p className="text-sm text-primary/70">Systeem Architect</p>
              </div>
              <Image
                src="/testimonials/prometech.png"
                alt="Prometech | Logo"
                className="max-h-[2.5em] w-auto max-w-full object-cover"
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-6 pt-6 lg:pl-6 lg:pt-0">
          <QuoteIcon className="size-12 text-quaternary" />

          <div className="grid gap-4">
            <p className="text-2xl text-primary/80">
              Beyond Web Solutions leverde een robuuste webapplicatie die
              perfect aansluit bij onze behoeften. Heldere communicatie en
              topkwaliteit!
            </p>
            <div className="flex items-center justify-between">
              <div className="grid flex-1 [&>p]:leading-tight">
                <p className="font-bold">Florian Käding</p>
                <p className="text-sm text-primary/70">Systeem Architect</p>
              </div>
              <Image
                src="/testimonials/prometech.png"
                alt="Prometech | Logo"
                className="max-h-[2.5em] w-auto max-w-full object-cover"
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
