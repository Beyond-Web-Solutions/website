import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  description?: string;
  className: string;
  titleClassName: string;
  children: ReactNode;
  isQuote?: boolean;
}

export function Section({
  id,
  title,
  description,
  children,
  className,
  titleClassName,
  isQuote = false,
}: Props) {
  return (
    <section
      id={id}
      className={cn("-mt-8 w-full rounded-tl-3xl rounded-tr-3xl", className)}
    >
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-40 pt-32 lg:px-8">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          {isQuote ? (
            <blockquote
              className={cn("break-words text-5xl md:text-6xl", titleClassName)}
            >
              {title}
            </blockquote>
          ) : (
            <p
              className={cn("break-words text-5xl md:text-6xl", titleClassName)}
            >
              {title}
            </p>
          )}

          <p className="hidden lg:block">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
