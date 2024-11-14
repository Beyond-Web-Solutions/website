import { HeaderWrapper } from "@/app/_components/layout/header/wrapper";

export function Header() {
  const items = [
    { url: "#services", label: "Wat?" },
    { url: "#projects", label: "Projecten" },
    { url: "#about", label: "Over ons" },
  ];

  return (
    <HeaderWrapper items={items} cta={{ url: "#contact", label: "Contact" }} />
  );
}
