import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function HomeHeroCircle2({ className }: Props) {
  return (
    <svg
      className={cn("size-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 335.2 335.2"
      width="120"
      height="120"
    >
      <circle
        className="fill-none stroke-primary"
        strokeWidth="25"
        cx="167.6"
        cy="167.6"
        r="130.1"
      ></circle>
    </svg>
  );
}
