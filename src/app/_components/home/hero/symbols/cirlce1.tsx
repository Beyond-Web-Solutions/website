import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function HomeHeroCircle1({ className }: Props) {
  return (
    <svg
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 335.2 335.2"
      width="120"
      height="120"
    >
      <circle
        className="fill-none stroke-secondary"
        strokeWidth="75"
        cx="167.6"
        cy="167.6"
        r="130.1"
      ></circle>
    </svg>
  );
}
