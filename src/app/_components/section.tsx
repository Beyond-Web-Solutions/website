import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  className: string;
  titleClassName: string;
  children: ReactNode;
}

export function Section({
  id,
  title,
  children,
  className,
  titleClassName,
}: Props) {
  return (
    <section
      id={id}
      className={cn("z-50 w-full rounded-tl-3xl rounded-tr-3xl", className)}
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-40 pt-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h2
            className={cn("break-words text-5xl md:text-6xl", titleClassName)}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
